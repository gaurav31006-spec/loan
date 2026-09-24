import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, ArrowRight, RotateCcw, BarChart3 } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const RiskMeter = ({ probPercentage, label }) => {
  let riskLevel = "Low Risk";
  if (probPercentage > 30 && probPercentage <= 60) riskLevel = "Medium Risk";
  else if (probPercentage > 60) riskLevel = "High Risk";

  return (
    <div>
      {label && (
        <div className="text-xs font-semibold text-text-gray uppercase tracking-wider mb-2">{label}</div>
      )}
      <div className="flex justify-between text-sm font-medium mb-2 text-text-gray">
        <span>0%</span>
        <span>{riskLevel}</span>
        <span>100%</span>
      </div>
      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${probPercentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full rounded-full ${
            probPercentage <= 30 ? 'bg-emerald-primary' :
            probPercentage <= 60 ? 'bg-warning-amber' : 'bg-danger-red'
          }`}
        />
      </div>
    </div>
  );
};

const ModelCard = ({ model, delay = 0 }) => {
  if (!model) return null;
  const prob = model.probability != null ? Math.round(model.probability * 100) : null;
  const isHighRisk = model.prediction === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`rounded-xl border-2 overflow-hidden bg-white shadow-sm ${
        isHighRisk ? 'border-danger-red/30' : 'border-emerald-primary/30'
      }`}
    >
      <div className={`px-5 py-3 flex items-center justify-between ${
        isHighRisk ? 'bg-danger-red/10' : 'bg-emerald-primary/10'
      }`}>
        <div className="flex items-center space-x-2">
          <BarChart3 size={16} className={isHighRisk ? 'text-danger-red' : 'text-emerald-primary'} />
          <span className="font-bold text-sm text-navy-deep">{model.name}</span>
        </div>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
          isHighRisk
            ? 'bg-danger-red/20 text-danger-red'
            : 'bg-emerald-primary/20 text-emerald-primary'
        }`}>
          {model.risk_status}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-xs text-text-gray mb-1">Default Probability</div>
            <div className="text-3xl font-bold text-navy-deep">
              {prob != null ? `${prob}%` : 'N/A'}
            </div>
          </div>
          <div className="flex items-center space-x-1.5">
            {isHighRisk ? (
              <AlertTriangle size={20} className="text-danger-red" />
            ) : (
              <CheckCircle size={20} className="text-emerald-primary" />
            )}
            <span className={`text-sm font-semibold ${isHighRisk ? 'text-danger-red' : 'text-emerald-primary'}`}>
              {isHighRisk ? 'Default' : 'No Default'}
            </span>
          </div>
        </div>
        {prob != null && <RiskMeter probPercentage={prob} />}
      </div>
    </motion.div>
  );
};

const PredictionResult = ({ result, onReset }) => {
  if (!result) return null;

  // Extract all model results dynamically
  const modelKeys = ['logistic_regression', 'random_forest', 'decision_tree', 'adaboost', 'bagging'];
  const activeModels = modelKeys.map(k => result[k]).filter(Boolean);

  const primary = activeModels[0] || {
    name: 'Model Prediction',
    prediction: result.prediction ?? 0,
    probability: 0.1,
    risk_status: result.risk_status || 'Low Risk (No Default)'
  };

  const isMultiple = activeModels.length > 1;
  const isHighRisk = primary?.prediction === 1;
  const primaryProb = primary?.probability != null ? Math.round(primary.probability * 100) : null;

  let riskLevel = "Low Risk";
  if (primaryProb > 30 && primaryProb <= 60) riskLevel = "Medium Risk";
  else if (primaryProb > 60) riskLevel = "High Risk";

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mx-auto ${
        isMultiple ? 'max-w-4xl' : 'max-w-2xl'
      }`}
    >
      {/* Hero Banner */}
      <div className={`p-8 text-center text-white ${isHighRisk ? 'bg-danger-red' : 'bg-emerald-primary'}`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          {isHighRisk ? <AlertTriangle size={64} /> : <CheckCircle size={64} />}
        </motion.div>
        <h2 className="text-3xl font-bold mb-2">
          {isHighRisk ? '! HIGH RISK' : '✓ LOW RISK'}
        </h2>
        <p className="text-lg opacity-90">
          Loan Default Predicted: <strong>{isHighRisk ? 'YES' : 'NO'}</strong>
        </p>
      </div>

      <div className="p-6 md:p-8">
        {/* Single model view */}
        {!isMultiple && (
          <>
            <motion.div variants={itemVariants} className="mb-8 text-center">
              <h3 className="text-text-gray font-medium mb-1 uppercase tracking-wider text-sm">
                {primary.name}
              </h3>
              <p className="text-xs text-text-gray mb-4">Default Probability</p>
              <div className="text-6xl font-bold text-navy-deep mb-2">
                {primaryProb != null ? `${primaryProb}%` : 'N/A'}
              </div>
              <p className="text-text-gray">
                The applicant is currently classified as <strong className="text-navy-deep">{riskLevel.toLowerCase()}</strong>.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10 max-w-xl mx-auto">
              {primaryProb != null && <RiskMeter probPercentage={primaryProb} />}
            </motion.div>
          </>
        )}

        {/* Multiple models comparison */}
        {isMultiple && (
          <motion.div variants={itemVariants} className="mb-10">
            <h3 className="text-text-gray font-medium uppercase tracking-wider text-sm text-center mb-6">
              Model Comparison ({activeModels.length} Models)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeModels.map((m, idx) => (
                <ModelCard key={m.name || idx} model={m} delay={0.1 * (idx + 1)} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onReset} variant="outline" icon={RotateCcw} className="w-full sm:w-auto">
            Analyze Another Application
          </Button>
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="secondary" icon={ArrowRight} className="w-full">
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PredictionResult;

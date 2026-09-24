import { motion } from 'framer-motion';
import { Brain, TreePine, GitCommit, Zap, Layers, CheckCircle2, XCircle, Gauge, Timer, BarChart3, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ModelComparison = () => {
  const models = [
    {
      name: 'Logistic Regression',
      icon: Brain,
      color: 'blue',
      tagline: 'Fast & Interpretable Baseline',
      description: 'A linear classification algorithm that models default probability using a sigmoid function. Highly transparent and lightweight.',
      pros: [
        'Highly interpretable feature impact',
        'Instantaneous prediction and training speed',
        'Minimal memory footprint (~1 KB)',
        'Calibrated probability outputs',
      ],
      cons: [
        'Cannot capture non-linear relationships',
        'Sensitive to extreme outliers',
      ],
      metrics: {
        speed: 98,
        accuracy: 88.49,
        interpretability: 95,
      },
    },
    {
      name: 'Random Forest',
      icon: TreePine,
      color: 'emerald',
      tagline: 'Robust Multitree Ensemble',
      description: 'Combines multiple decorrelated decision trees using bagging and feature subspace sampling to yield balanced high accuracy.',
      pros: [
        'Captures complex non-linear feature interactions',
        'Highly resistant to overfitting',
        'Built-in feature importance evaluation',
      ],
      cons: [
        'Larger file size (~13 MB)',
        'Requires more memory during inference',
      ],
      metrics: {
        speed: 75,
        accuracy: 88.56,
        interpretability: 60,
      },
    },
    {
      name: 'Decision Tree',
      icon: GitCommit,
      color: 'amber',
      tagline: 'Rule-Based Hierarchical Model',
      description: 'Splits features sequentially based on information gain or Gini impurity, producing clear logical rule splits.',
      pros: [
        'Simple logic tree structure',
        'Requires no linear assumptions',
        'Fast execution speed',
      ],
      cons: [
        'Can be sensitive to small data variations',
        'Single tree may overfit without pruning',
      ],
      metrics: {
        speed: 92,
        accuracy: 88.14,
        interpretability: 85,
      },
    },
    {
      name: 'AdaBoost',
      icon: Zap,
      color: 'purple',
      tagline: 'Adaptive Boosting Ensemble',
      description: 'Sequentially trains weak decision stumps, placing higher sample weights on previously misclassified applicants.',
      pros: [
        'Strong focus on hard-to-classify samples',
        'Excellent overall predictive capability',
        'Reduces model bias significantly',
      ],
      cons: [
        'Sensitive to noisy labels or extreme outliers',
        'Sequential training nature',
      ],
      metrics: {
        speed: 82,
        accuracy: 88.56,
        interpretability: 55,
      },
    },
    {
      name: 'Bagging Classifier',
      icon: Layers,
      color: 'indigo',
      tagline: 'Bootstrap Aggregated Estimator',
      description: 'Fits base estimators on random bootstrap subsets of the dataset to decrease variance and produce stable outputs.',
      pros: [
        'Effectively reduces model variance',
        'Handles noise gracefully',
        'Strong generalization performance',
      ],
      cons: [
        'Ensemble aggregation limits simple visual logic',
        'Moderate computational overhead',
      ],
      metrics: {
        speed: 78,
        accuracy: 88.39,
        interpretability: 50,
      },
    },
  ];

  const comparisonTable = [
    { aspect: 'Algorithm Family', logistic: 'Linear', rf: 'Bagged Trees', dt: 'Single Tree', ada: 'Boosting', bag: 'Bagged Ensemble' },
    { aspect: 'Model Accuracy', logistic: '88.49%', rf: '88.56%', dt: '88.14%', ada: '88.56%', bag: '88.39%' },
    { aspect: 'Inference Speed', logistic: '⚡ Instant', rf: '⏱️ Fast', dt: '⚡ Instant', ada: '⏱️ Fast', bag: '⏱️ Fast' },
    { aspect: 'Non-linear Handling', logistic: '❌ Limited', rf: '✅ Excellent', dt: '✅ Good', ada: '✅ Excellent', bag: '✅ Excellent' },
    { aspect: 'Overfitting Risk', logistic: '⚠️ Moderate', rf: '✅ Low', dt: '⚠️ High', ada: '✅ Low', bag: '✅ Low' },
    { aspect: 'Explainability', logistic: '✅ High', rf: '⚠️ Moderate', dt: '✅ High', ada: '⚠️ Moderate', bag: '⚠️ Moderate' },
  ];

  const MetricBar = ({ value, color }) => {
    const colorClasses = {
      blue: 'bg-blue-500',
      emerald: 'bg-emerald-primary',
      amber: 'bg-amber-500',
      purple: 'bg-purple-500',
      indigo: 'bg-indigo-500',
    };
    return (
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`h-full rounded-full ${colorClasses[color] || 'bg-emerald-primary'}`}
        />
      </div>
    );
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-24 pb-20 bg-soft-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-primary/10 rounded-2xl mb-6">
            <BarChart3 className="w-8 h-8 text-emerald-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">Model Benchmark & Comparison</h1>
          <p className="text-lg text-text-gray max-w-3xl mx-auto leading-relaxed">
            Compare all 5 machine learning models integrated in our system — Logistic Regression, Random Forest, Decision Tree, AdaBoost, and Bagging Classifier.
          </p>
        </motion.div>

        {/* Model Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Model Header */}
                <div className="p-6 bg-gradient-to-br from-navy-deep to-slate-800 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-white/10 p-2.5 rounded-xl">
                      <model.icon className="w-6 h-6 text-emerald-bright" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">{model.name}</h2>
                      <p className="text-xs opacity-80">{model.tagline}</p>
                    </div>
                  </div>
                  <p className="text-xs opacity-90 leading-relaxed">{model.description}</p>
                </div>

                {/* Metrics */}
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xs font-bold text-navy-deep uppercase tracking-wider mb-3">Metrics</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-text-gray flex items-center"><Gauge size={12} className="mr-1"/> Accuracy</span>
                        <span className="text-xs font-bold text-navy-deep">{model.metrics.accuracy}%</span>
                      </div>
                      <MetricBar value={model.metrics.accuracy} color={model.color} />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-text-gray flex items-center"><Timer size={12} className="mr-1"/> Speed</span>
                        <span className="text-xs font-bold text-navy-deep">{model.metrics.speed}%</span>
                      </div>
                      <MetricBar value={model.metrics.speed} color={model.color} />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-text-gray flex items-center"><Brain size={12} className="mr-1"/> Interpretability</span>
                        <span className="text-xs font-bold text-navy-deep">{model.metrics.interpretability}%</span>
                      </div>
                      <MetricBar value={model.metrics.interpretability} color={model.color} />
                    </div>
                  </div>
                </div>

                {/* Strengths */}
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xs font-bold text-emerald-primary uppercase tracking-wider mb-2">Strengths</h3>
                  <ul className="space-y-1.5">
                    {model.pros.map((pro, i) => (
                      <li key={i} className="flex items-start text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-text-gray">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Limitations */}
              <div className="p-5">
                <h3 className="text-xs font-bold text-danger-red uppercase tracking-wider mb-2">Limitations</h3>
                <ul className="space-y-1.5">
                  {model.cons.map((con, i) => (
                    <li key={i} className="flex items-start text-xs">
                      <XCircle className="w-3.5 h-3.5 text-danger-red mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-text-gray">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-12 overflow-x-auto"
        >
          <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
            <div className="bg-emerald-primary/10 p-2.5 rounded-xl mr-4">
              <BarChart3 className="w-5 h-5 text-emerald-primary" />
            </div>
            <h2 className="text-xl font-bold text-navy-deep">Side-by-Side Comparison</h2>
          </div>

          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="text-left py-3 px-3 text-xs font-bold text-navy-deep">Aspect</th>
                <th className="text-left py-3 px-3 text-xs font-bold text-blue-600">Logistic Reg</th>
                <th className="text-left py-3 px-3 text-xs font-bold text-emerald-primary">Random Forest</th>
                <th className="text-left py-3 px-3 text-xs font-bold text-amber-600">Decision Tree</th>
                <th className="text-left py-3 px-3 text-xs font-bold text-purple-600">AdaBoost</th>
                <th className="text-left py-3 px-3 text-xs font-bold text-indigo-600">Bagging</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, idx) => (
                <tr key={idx} className={`border-b border-gray-50 ${idx % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
                  <td className="py-3 px-3 text-xs font-semibold text-navy-deep">{row.aspect}</td>
                  <td className="py-3 px-3 text-xs text-text-gray">{row.logistic}</td>
                  <td className="py-3 px-3 text-xs text-text-gray">{row.rf}</td>
                  <td className="py-3 px-3 text-xs text-text-gray">{row.dt}</td>
                  <td className="py-3 px-3 text-xs text-text-gray">{row.ada}</td>
                  <td className="py-3 px-3 text-xs text-text-gray">{row.bag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Recommendation */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-navy-deep text-white rounded-2xl p-6 md:p-8 mb-12"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-emerald-primary/20 p-3 rounded-xl flex-shrink-0">
              <Sparkles className="w-6 h-6 text-emerald-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Multi-Model Recommendation</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Selecting <strong className="text-emerald-primary">All Models</strong> on the prediction screen provides an instant ensemble consensus from all 5 models (Logistic Regression, Random Forest, Decision Tree, AdaBoost, and Bagging Classifier), offering maximum confidence when evaluating loan default risk.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/prediction">
            <Button size="lg" icon={ArrowRight}>
              Test All 5 Models Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ModelComparison;

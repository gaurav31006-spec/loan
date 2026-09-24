import { motion } from 'framer-motion';
import { Database, BrainCircuit, Activity, LineChart, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

const About = () => {
  const datasetInfo = [
    { label: 'Dataset Size', value: '255,347 Records' },
    { label: 'Prediction Target', value: 'Default' },
    { label: 'Machine Learning Models', value: '5 Integrated Classifiers' },
    { label: 'Input Features', value: '16' },
  ];

  const features = [
    'Age', 'Income', 'Loan Amount', 'Credit Score',
    'Months Employed', 'Credit Lines', 'Interest Rate', 'Loan Term',
    'DTI Ratio', 'Education', 'Employment Type', 'Marital Status',
    'Mortgage', 'Dependents', 'Loan Purpose', 'Co-Signer'
  ];

  const pipeline = [
    { title: 'Historical Loan Data', icon: Database },
    { title: 'Data Preprocessing', icon: FileText },
    { title: 'Feature Scaling', icon: Activity },
    { title: '5 ML Classifiers', icon: BrainCircuit },
    { title: 'Risk Probability', icon: LineChart },
    { title: 'Default Prediction', icon: CheckCircle2 },
  ];

  return (
    <div className="pt-24 pb-20 bg-soft-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">About LoanPredict AI</h1>
          <p className="text-lg text-text-gray max-w-2xl mx-auto leading-relaxed">
            This project uses Machine Learning to predict whether a loan applicant is likely to default based on historical loan and financial information.
          </p>
        </motion.div>

        {/* Dataset Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 mb-12"
        >
          <div className="flex items-center mb-8">
            <div className="bg-emerald-primary/10 p-3 rounded-xl mr-4">
              <Database className="text-emerald-primary w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-navy-deep">Dataset Information</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {datasetInfo.map((info, idx) => (
              <div key={idx} className="bg-soft-bg p-5 rounded-xl border border-gray-50">
                <div className="text-sm text-text-gray mb-1">{info.label}</div>
                <div className="text-xl font-bold text-navy-deep">{info.value}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
            <p>Note: The <code className="bg-blue-100 px-1.5 py-0.5 rounded text-blue-900 font-mono">LoanID</code> column in the dataset is a unique identifier and is intentionally excluded from the prediction features to prevent the model from learning arbitrary patterns.</p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 mb-12"
        >
          <div className="flex items-center mb-8">
            <div className="bg-emerald-primary/10 p-3 rounded-xl mr-4">
              <Activity className="text-emerald-primary w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-navy-deep">Features Used by Model</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center bg-soft-bg px-4 py-3 rounded-lg border border-gray-50">
                <div className="w-2 h-2 rounded-full bg-emerald-primary mr-3"></div>
                <span className="text-sm font-medium text-navy-deep">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Machine Learning Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10"
        >
          <div className="flex items-center mb-10">
            <div className="bg-emerald-primary/10 p-3 rounded-xl mr-4">
              <BrainCircuit className="text-emerald-primary w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-navy-deep">Machine Learning Pipeline</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-100 md:hidden"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-center relative">
              {/* Desktop connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block z-0"></div>
              
              {pipeline.map((step, idx) => (
                <div key={idx} className="flex md:flex-col items-center mb-8 md:mb-0 relative z-10 group">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, type: 'spring' }}
                    className="w-16 h-16 bg-white border-2 border-emerald-primary/30 rounded-full flex items-center justify-center shadow-sm group-hover:border-emerald-primary group-hover:scale-110 transition-all duration-300"
                  >
                    <step.icon className="text-emerald-primary w-7 h-7" />
                  </motion.div>
                  
                  {/* Mobile connecting arrow */}
                  {idx < pipeline.length - 1 && (
                    <div className="md:hidden ml-6 pl-2 py-2 text-gray-300">
                      <ChevronRight size={20} className="rotate-90" />
                    </div>
                  )}
                  
                  <div className="ml-6 md:ml-0 md:mt-4 md:text-center md:absolute md:top-20 md:w-32 md:-left-8">
                    <span className="font-semibold text-sm text-navy-deep text-center block leading-tight">{step.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

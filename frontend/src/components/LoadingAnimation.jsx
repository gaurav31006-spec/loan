import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-emerald-primary/20 rounded-full blur-xl"></div>
        <div className="relative bg-white border border-emerald-primary/30 p-6 rounded-full shadow-lg">
          <BrainCircuit size={48} className="text-emerald-primary" />
        </div>
      </motion.div>
      
      <h3 className="text-2xl font-bold text-navy-deep mb-3">
        Analyzing Application...
      </h3>
      <p className="text-text-gray text-center max-w-md">
        Our AI model is evaluating the applicant's financial profile. This should only take a few seconds.
      </p>
      
      <div className="mt-8 flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 0.6, 
              repeat: Infinity, 
              delay: i * 0.15,
              ease: "easeInOut"
            }}
            className="w-3 h-3 bg-emerald-primary rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, ShieldAlert, Zap, ArrowRight, Play, Database, Server } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const stats = [
    { value: '255K+', label: 'Loan Records' },
    { value: '16', label: 'Prediction Features' },
    { value: 'AI', label: 'Powered Prediction' },
    { value: 'Real-Time', label: 'Risk Analysis' },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI Prediction',
      description: 'Use Logistic Regression to estimate loan default risk.'
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'Analyze income, credit score, loan amount and debt-to-income ratio.'
    },
    {
      icon: ShieldAlert,
      title: 'Risk Assessment',
      description: 'Convert financial information into an easy-to-understand risk result.'
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'Get prediction results within seconds.'
    }
  ];

  const steps = [
    { number: '01', title: 'Enter Information' },
    { number: '02', title: 'Analyze Financial Data' },
    { number: '03', title: 'AI Model Processes Risk' },
    { number: '04', title: 'Receive Prediction' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-deep text-white pb-20 pt-16 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-primary/10 blur-[150px] pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Predict Loan Default with <span className="text-emerald-primary">AI</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Make smarter lending decisions with machine learning-powered loan risk analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/prediction">
                  <Button size="lg" icon={Play} className="w-full sm:w-auto">
                    Start Prediction
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
                    Explore Project
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-navy-dark/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-primary/20 blur-[50px] rounded-full"></div>
                
                <h3 className="text-xl font-bold mb-6 flex items-center text-white/90">
                  <Brain className="mr-2 text-emerald-primary" /> AI Risk Analysis
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-400">Credit Score</span>
                    <span className="font-semibold text-lg text-emerald-bright">742</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-400">Debt-to-Income</span>
                    <span className="font-semibold text-lg text-emerald-bright">28%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3">
                    <span className="text-gray-400">Loan Amount</span>
                    <span className="font-semibold text-lg text-emerald-bright">$125,000</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="text-sm text-gray-400 mb-1">Risk Level</div>
                  <div className="text-2xl font-bold text-emerald-primary mb-3">LOW RISK</div>
                  
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      className="h-full bg-emerald-primary rounded-full"
                    />
                  </div>
                  <div className="text-right text-xs text-gray-400 mt-2 font-mono">82% CONFIDENCE</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 z-0 hidden md:block"
              >
                <Database className="text-emerald-bright w-8 h-8" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20 hidden md:block"
              >
                <Server className="text-blue-400 w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-primary py-12 relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-emerald-900 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-wider mb-2">Core Features</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-deep">Everything you need for smart risk assessment</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <FeatureCard 
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep">How It Works</h2>
            <p className="mt-4 text-lg text-text-gray">A simple 4-step process to evaluate loan applications.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-navy-deep shadow-sm group-hover:border-emerald-primary transition-colors duration-300 relative">
                    {step.number}
                    {idx < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-8 text-gray-300 lg:hidden">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-navy-deep">{step.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Link to="/prediction">
              <Button size="lg" icon={ArrowRight}>
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

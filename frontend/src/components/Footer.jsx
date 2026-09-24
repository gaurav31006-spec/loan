import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white py-12 border-t border-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-2">
             <div className="bg-emerald-primary text-white p-1.5 rounded-lg">
              <ShieldCheck size={24} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              LoanPredict <span className="text-emerald-primary">AI</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
            Make smarter lending decisions with machine learning-powered loan risk analysis.
          </p>
        </div>
        
        <div className="flex space-x-8 text-sm font-medium">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/prediction" className="text-gray-300 hover:text-white transition-colors">Prediction</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-navy-dark/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>
          &copy; 2026 LoanPredict AI. All rights reserved.
        </p>
        <p>
          Powered by AI & Machine Learning
        </p>
      </div>
    </footer>
  );
};

export default Footer;

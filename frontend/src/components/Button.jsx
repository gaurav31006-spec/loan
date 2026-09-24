import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon: Icon, className = '', disabled, isLoading, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center space-x-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-emerald-primary hover:bg-emerald-bright text-white focus:ring-emerald-primary",
    secondary: "bg-navy-deep hover:bg-navy-dark text-white focus:ring-navy-deep",
    outline: "border-2 border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white focus:ring-navy-deep",
    danger: "bg-danger-red hover:bg-red-600 text-white focus:ring-danger-red"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const selectedVariant = variants[variant] || variants.primary;
  const selectedSize = sizes[props.size || 'md'];

  return (
    <motion.button
      whileHover={disabled || isLoading ? {} : { scale: 1.02 }}
      whileTap={disabled || isLoading ? {} : { scale: 0.98 }}
      className={`${baseClasses} ${selectedVariant} ${selectedSize} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : Icon && (
        <Icon className="w-5 h-5" />
      )}
      <span>{children}</span>
    </motion.button>
  );
};

export default Button;

import { forwardRef } from 'react';

const InputField = forwardRef(({ label, error, helperText, className = '', ...props }, ref) => {
  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-text-dark">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full px-4 py-2.5 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-shadow ${
          error 
            ? 'border-danger-red focus:ring-danger-red/20' 
            : 'border-gray-200 focus:border-emerald-primary focus:ring-emerald-primary/20'
        }`}
        {...props}
      />
      {error && (
        <span className="text-xs font-medium text-danger-red">
          {error}
        </span>
      )}
      {!error && helperText && (
        <span className="text-xs text-text-gray">
          {helperText}
        </span>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;

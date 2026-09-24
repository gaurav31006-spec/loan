import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectField = forwardRef(({ label, options, error, className = '', ...props }, ref) => {
  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-text-dark">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={`w-full appearance-none px-4 py-2.5 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-shadow cursor-pointer ${
            error 
              ? 'border-danger-red focus:ring-danger-red/20' 
              : 'border-gray-200 focus:border-emerald-primary focus:ring-emerald-primary/20'
          }`}
          {...props}
        >
          <option value="" disabled>Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-text-gray">
          <ChevronDown size={18} />
        </div>
      </div>
      {error && (
        <span className="text-xs font-medium text-danger-red">
          {error}
        </span>
      )}
    </div>
  );
});

SelectField.displayName = 'SelectField';

export default SelectField;

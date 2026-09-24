import { forwardRef } from 'react';

const ToggleSwitch = forwardRef(({ label, checked, onChange, error, className = '', ...props }, ref) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {label && (
        <span className="text-sm font-semibold text-text-dark">
          {label}
        </span>
      )}
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <div className={`w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all ${checked ? 'peer-checked:bg-emerald-primary' : ''}`}></div>
        <span className="ml-3 text-sm font-medium text-text-gray">
          {checked ? 'Yes' : 'No'}
        </span>
      </label>
      {error && (
        <span className="text-xs font-medium text-danger-red">
          {error}
        </span>
      )}
    </div>
  );
});

ToggleSwitch.displayName = 'ToggleSwitch';

export default ToggleSwitch;

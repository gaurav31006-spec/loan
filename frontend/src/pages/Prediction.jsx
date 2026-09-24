import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, CreditCard, PieChart, Shield, Sparkles, AlertCircle, Cpu } from 'lucide-react';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import ToggleSwitch from '../components/ToggleSwitch';
import Button from '../components/Button';
import LoadingAnimation from '../components/LoadingAnimation';
import PredictionResult from '../components/PredictionResult';
import { predictLoanDefault } from '../api/predictionApi';

const Prediction = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Income: '',
    Education: '',
    EmploymentType: '',
    MonthsEmployed: '',
    CreditScore: '',
    NumCreditLines: '',
    LoanAmount: '',
    InterestRate: '',
    LoanTerm: '',
    LoanPurpose: '',
    DTIRatio: '',
    MaritalStatus: '',
    HasMortgage: false,
    HasDependents: false,
    HasCoSigner: false,
  });

  const [selectedModel, setSelectedModel] = useState('all');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [result, setResult] = useState(null);
  const [apiError, setApiError] = useState('');

  const educationOptions = [
    { value: "High School", label: "High School" },
    { value: "Bachelor's", label: "Bachelor's" },
    { value: "Master's", label: "Master's" },
    { value: "PhD", label: "PhD" },
  ];

  const employmentOptions = [
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Self-employed", label: "Self-employed" },
    { value: "Unemployed", label: "Unemployed" },
  ];

  const loanTermOptions = [
    { value: 12, label: "12 months" },
    { value: 24, label: "24 months" },
    { value: 36, label: "36 months" },
    { value: 48, label: "48 months" },
    { value: 60, label: "60 months" },
  ];

  const loanPurposeOptions = [
    { value: "Auto", label: "Auto" },
    { value: "Business", label: "Business" },
    { value: "Education", label: "Education" },
    { value: "Home", label: "Home" },
    { value: "Other", label: "Other" },
  ];

  const maritalOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Age
    if (!formData.Age) newErrors.Age = "Please enter a valid age.";
    else if (formData.Age < 18 || formData.Age > 100) newErrors.Age = "Age must be between 18 and 100.";
    
    // Income
    if (!formData.Income) newErrors.Income = "Annual income is required.";
    else if (formData.Income <= 0) newErrors.Income = "Income must be greater than 0.";

    // Education
    if (!formData.Education) newErrors.Education = "Please select education level.";

    // Employment
    if (!formData.EmploymentType) newErrors.EmploymentType = "Please select employment type.";
    
    if (formData.MonthsEmployed === '') newErrors.MonthsEmployed = "Months employed is required.";
    else if (formData.MonthsEmployed < 0) newErrors.MonthsEmployed = "Cannot be negative.";

    // Credit Score
    if (!formData.CreditScore) newErrors.CreditScore = "Credit score is required.";
    else if (formData.CreditScore < 300 || formData.CreditScore > 850) newErrors.CreditScore = "Credit score must be between 300 and 850.";

    // Credit Lines
    if (formData.NumCreditLines === '') newErrors.NumCreditLines = "Required.";
    else if (formData.NumCreditLines < 0) newErrors.NumCreditLines = "Cannot be negative.";

    // Loan Amount
    if (!formData.LoanAmount) newErrors.LoanAmount = "Loan amount is required.";
    else if (formData.LoanAmount <= 0) newErrors.LoanAmount = "Loan amount must be greater than 0.";

    // Interest Rate
    if (formData.InterestRate === '') newErrors.InterestRate = "Interest rate is required.";
    else if (formData.InterestRate < 0 || formData.InterestRate > 100) newErrors.InterestRate = "Invalid percentage.";

    // Loan Term
    if (!formData.LoanTerm) newErrors.LoanTerm = "Please select a loan term.";

    // Loan Purpose
    if (!formData.LoanPurpose) newErrors.LoanPurpose = "Please select a loan purpose.";

    // DTI Ratio
    if (formData.DTIRatio === '') newErrors.DTIRatio = "DTI ratio is required.";
    else if (formData.DTIRatio < 0 || formData.DTIRatio > 1) newErrors.DTIRatio = "DTI ratio must be between 0 and 1.";

    // Marital Status
    if (!formData.MaritalStatus) newErrors.MaritalStatus = "Please select marital status.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll to first error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setStatus('loading');
    setApiError('');

    try {
      // Prepare data for API
      const apiData = {
        Age: Number(formData.Age),
        Income: Number(formData.Income),
        LoanAmount: Number(formData.LoanAmount),
        CreditScore: Number(formData.CreditScore),
        MonthsEmployed: Number(formData.MonthsEmployed),
        NumCreditLines: Number(formData.NumCreditLines),
        InterestRate: Number(formData.InterestRate),
        LoanTerm: Number(formData.LoanTerm),
        DTIRatio: Number(formData.DTIRatio),
        Education: formData.Education,
        EmploymentType: formData.EmploymentType,
        MaritalStatus: formData.MaritalStatus,
        HasMortgage: formData.HasMortgage ? 'Yes' : 'No',
        HasDependents: formData.HasDependents ? 'Yes' : 'No',
        LoanPurpose: formData.LoanPurpose,
        HasCoSigner: formData.HasCoSigner ? 'Yes' : 'No',
      };

      const response = await predictLoanDefault(apiData, selectedModel);
      setResult(response);
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setApiError('Unable to connect to the prediction server. Please make sure the backend server is running and try again.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setResult(null);
    setApiError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const modelOptions = [
    { value: 'all', label: 'All Models (5)', desc: 'Compare all 5 algorithms side-by-side' },
    { value: 'logistic', label: 'Logistic Regression', desc: 'Fast & interpretable linear model' },
    { value: 'random_forest', label: 'Random Forest', desc: 'High-accuracy ensemble tree model' },
    { value: 'decision_tree', label: 'Decision Tree', desc: 'Rule-based hierarchical model' },
    { value: 'adaboost', label: 'AdaBoost', desc: 'Adaptive boosting ensemble model' },
    { value: 'bagging', label: 'Bagging Classifier', desc: 'Bootstrap aggregated ensemble model' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-20 bg-soft-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {status === 'idle' || status === 'error' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-navy-deep mb-3">Loan Default Prediction</h1>
              <p className="text-lg text-text-gray">
                Enter the applicant's financial information to estimate default risk.
              </p>
            </div>

            <AnimatePresence>
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-danger-red/10 border-l-4 border-danger-red p-4 rounded-r-lg flex items-start"
                >
                  <AlertCircle className="text-danger-red mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-danger-red font-medium">{apiError}</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Model Selector */}
            <motion.div
              variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.05 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                <Cpu className="text-emerald-primary mr-3" />
                <h2 className="text-xl font-bold text-navy-deep">Select Prediction Model</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {modelOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => setSelectedModel(opt.value)}
                    className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                      selectedModel === opt.value
                        ? 'border-emerald-primary bg-emerald-primary/5 shadow-md shadow-emerald-primary/10'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {selectedModel === opt.value && (
                      <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-emerald-primary" />
                    )}
                    <div className={`font-semibold text-sm mb-1 ${
                      selectedModel === opt.value ? 'text-emerald-primary' : 'text-navy-deep'
                    }`}>
                      {opt.label}
                    </div>
                    <div className="text-xs text-text-gray">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Personal Info */}
              <motion.div 
                variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <User className="text-emerald-primary mr-3" />
                  <h2 className="text-xl font-bold text-navy-deep">Personal Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Age"
                    name="Age"
                    type="number"
                    min="18"
                    max="100"
                    placeholder="Enter age (18-100)"
                    value={formData.Age}
                    onChange={handleChange}
                    error={errors.Age}
                  />
                  <InputField
                    label="Income"
                    name="Income"
                    type="number"
                    placeholder="Enter annual income"
                    value={formData.Income}
                    onChange={handleChange}
                    error={errors.Income}
                  />
                  <SelectField
                    label="Education"
                    name="Education"
                    options={educationOptions}
                    value={formData.Education}
                    onChange={handleChange}
                    error={errors.Education}
                  />
                </div>
              </motion.div>

              {/* Section 2: Employment */}
              <motion.div 
                variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <Briefcase className="text-emerald-primary mr-3" />
                  <h2 className="text-xl font-bold text-navy-deep">Employment & Financial Profile</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField
                    label="Employment Type"
                    name="EmploymentType"
                    options={employmentOptions}
                    value={formData.EmploymentType}
                    onChange={handleChange}
                    error={errors.EmploymentType}
                  />
                  <InputField
                    label="Months Employed"
                    name="MonthsEmployed"
                    type="number"
                    placeholder="Total months employed"
                    value={formData.MonthsEmployed}
                    onChange={handleChange}
                    error={errors.MonthsEmployed}
                  />
                  <InputField
                    label="Credit Score"
                    name="CreditScore"
                    type="number"
                    min="300"
                    max="850"
                    placeholder="Score between 300 and 850"
                    value={formData.CreditScore}
                    onChange={handleChange}
                    error={errors.CreditScore}
                  />
                  <InputField
                    label="Number of Credit Lines"
                    name="NumCreditLines"
                    type="number"
                    placeholder="Total open credit lines"
                    value={formData.NumCreditLines}
                    onChange={handleChange}
                    error={errors.NumCreditLines}
                  />
                </div>
              </motion.div>

              {/* Section 3: Loan Info */}
              <motion.div 
                variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <CreditCard className="text-emerald-primary mr-3" />
                  <h2 className="text-xl font-bold text-navy-deep">Loan Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Loan Amount"
                    name="LoanAmount"
                    type="number"
                    placeholder="Requested amount ($)"
                    value={formData.LoanAmount}
                    onChange={handleChange}
                    error={errors.LoanAmount}
                  />
                  <InputField
                    label="Interest Rate (%)"
                    name="InterestRate"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 5.5"
                    value={formData.InterestRate}
                    onChange={handleChange}
                    error={errors.InterestRate}
                  />
                  <SelectField
                    label="Loan Term"
                    name="LoanTerm"
                    options={loanTermOptions}
                    value={formData.LoanTerm}
                    onChange={handleChange}
                    error={errors.LoanTerm}
                  />
                  <SelectField
                    label="Loan Purpose"
                    name="LoanPurpose"
                    options={loanPurposeOptions}
                    value={formData.LoanPurpose}
                    onChange={handleChange}
                    error={errors.LoanPurpose}
                  />
                </div>
              </motion.div>

              {/* Section 4: Financial Risk */}
              <motion.div 
                variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <PieChart className="text-emerald-primary mr-3" />
                  <h2 className="text-xl font-bold text-navy-deep">Financial Risk</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="DTI Ratio"
                    name="DTIRatio"
                    type="number"
                    step="0.01"
                    placeholder="Example: 0.35"
                    helperText="Debt-to-Income ratio should be between 0 and 1."
                    value={formData.DTIRatio}
                    onChange={handleChange}
                    error={errors.DTIRatio}
                  />
                  <SelectField
                    label="Marital Status"
                    name="MaritalStatus"
                    options={maritalOptions}
                    value={formData.MaritalStatus}
                    onChange={handleChange}
                    error={errors.MaritalStatus}
                  />
                </div>
              </motion.div>

              {/* Section 5: Loan Conditions */}
              <motion.div 
                variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <Shield className="text-emerald-primary mr-3" />
                  <h2 className="text-xl font-bold text-navy-deep">Loan Conditions</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <ToggleSwitch
                    label="Has Mortgage"
                    name="HasMortgage"
                    checked={formData.HasMortgage}
                    onChange={handleChange}
                  />
                  <ToggleSwitch
                    label="Has Dependents"
                    name="HasDependents"
                    checked={formData.HasDependents}
                    onChange={handleChange}
                  />
                  <ToggleSwitch
                    label="Has Co-Signer"
                    name="HasCoSigner"
                    checked={formData.HasCoSigner}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>

              <div className="pt-4 flex justify-end">
                <Button 
                  type="submit" 
                  size="lg" 
                  icon={Sparkles} 
                  className="w-full sm:w-auto"
                >
                  Analyze Loan Risk
                </Button>
              </div>
            </form>
          </motion.div>
        ) : status === 'loading' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center min-h-[60vh]"
          >
            <LoadingAnimation />
          </motion.div>
        ) : (
          <PredictionResult 
            result={result}
            onReset={handleReset} 
          />
        )}
      </div>
    </div>
  );
};

export default Prediction;

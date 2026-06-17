import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, ArrowRight, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  businessName: string;
  budgetRange: string;
  projectType: string;
  projectDetails: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  projectDetails?: string;
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessName: '',
    budgetRange: '',
    projectType: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateStep = (currentStep: number): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        tempErrors.name = 'Please enter your name.';
        isValid = false;
      } else if (formData.name.trim().length < 2) {
        tempErrors.name = 'Name must be at least 2 characters.';
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        tempErrors.email = 'Please enter your email.';
        isValid = false;
      } else if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email.';
        isValid = false;
      }
    }

    if (currentStep === 2) {
      if (!formData.projectType) {
        tempErrors.projectType = 'Please select a project type.';
        isValid = false;
      }
    }

    if (currentStep === 3) {
      if (!formData.budgetRange) {
        tempErrors.budgetRange = 'Please select a budget range.';
        isValid = false;
      }
      if (!formData.projectDetails.trim()) {
        tempErrors.projectDetails = 'Please provide details.';
        isValid = false;
      } else if (formData.projectDetails.trim().length < 15) {
        tempErrors.projectDetails = 'Please describe in at least 15 characters.';
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors inline
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        businessName: '',
        budgetRange: '',
        projectType: '',
        projectDetails: '',
      });
      setStep(1);
    }, 1800);
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-5 md:p-6 shadow-xl relative overflow-hidden glow-card-purple">
      
      {/* Step Progress Indicator */}
      {!submitSuccess && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 mb-2">
            <span>Step {step} of 3</span>
            <span>{step === 1 ? 'Contact Details' : step === 2 ? 'Project Type' : 'Budget & Details'}</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-850 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!submitSuccess ? (
          <motion.form
            key={`step-${step}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            {/* Step 1: Contact Details */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border rounded-xl outline-none text-zinc-900 dark:text-white transition-all text-sm ${
                        errors.name ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-primary-500'
                      }`}
                    />
                    {errors.name && <AlertCircle className="absolute right-3 top-3 w-4 h-4 text-rose-500" />}
                  </div>
                  {errors.name && <p className="text-xs text-rose-500">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border rounded-xl outline-none text-zinc-900 dark:text-white transition-all text-sm ${
                        errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-primary-500'
                      }`}
                    />
                    {errors.email && <AlertCircle className="absolute right-3 top-3 w-4 h-4 text-rose-500" />}
                  </div>
                  {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    Business Name <span className="text-zinc-400 font-medium normal-case">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none text-zinc-900 dark:text-white transition-all focus:border-primary-500 text-sm"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Project Type */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                    What kind of project is this? <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      'Website Development',
                      'Full Stack Web Application',
                      'Website Redesign',
                      'High-Converting Landing Page',
                      'E-commerce Store',
                      'Other'
                    ].map((type) => (
                      <label
                        key={type}
                        className={`flex items-center p-3.5 rounded-xl border text-sm font-semibold cursor-pointer transition-all ${
                          formData.projectType === type
                            ? 'border-primary-500 bg-primary-500/5 text-primary-600 dark:text-primary-400'
                            : 'border-zinc-250 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-950'
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type}
                          checked={formData.projectType === type}
                          onChange={handleInputChange}
                          className="mr-3 text-primary-600 focus:ring-primary-500"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                  {errors.projectType && <p className="text-xs text-rose-500">{errors.projectType}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Budget + Details */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                    Project Budget <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Under ₹1.5 Lakhs', value: 'under-150000' },
                      { label: '₹1.5L - ₹3 Lakhs', value: '150000-300000' },
                      { label: '₹3L - ₹6 Lakhs', value: '300000-600000' },
                      { label: '₹6 Lakhs+', value: '600000-plus' }
                    ].map((tier) => (
                      <label
                        key={tier.value}
                        className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-200 text-center ${
                          formData.budgetRange === tier.value
                            ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400'
                            : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 text-zinc-650 dark:text-zinc-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budgetRange"
                          value={tier.value}
                          checked={formData.budgetRange === tier.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        {tier.label}
                      </label>
                    ))}
                  </div>
                  {errors.budgetRange && <p className="text-xs text-rose-500">{errors.budgetRange}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="projectDetails" className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    Project Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border rounded-xl outline-none text-zinc-900 dark:text-white transition-all text-sm resize-none ${
                      errors.projectDetails ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-primary-500'
                    }`}
                  />
                  {errors.projectDetails && <p className="text-xs text-rose-500">{errors.projectDetails}</p>}
                </div>
              </div>
            )}

            {/* Stepper Navigation buttons */}
            <div className="flex items-center justify-between pt-2 space-x-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center justify-center space-x-1 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold py-2.5 px-4 rounded-xl text-xs hover:bg-zinc-550 dark:hover:bg-zinc-800 transition-all cursor-pointer h-12"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div /> /* Empty spacer to push next button right */
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center justify-center space-x-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold py-2.5 px-6 rounded-xl text-xs hover:bg-primary-600 dark:hover:bg-primary-500 dark:hover:text-white transition-all cursor-pointer h-12 ml-auto"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs shadow-md transition-all cursor-pointer disabled:opacity-80 h-12 ml-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-6 space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle className="w-7 h-7 animate-[pulse_1.5s_infinite]" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                Inquiry Sent!
              </h3>
              <p className="text-xs text-zinc-550 dark:text-zinc-400 max-w-sm">
                Your request has been saved. I'll reach out via email within 24 hours to schedule our discovery call.
              </p>
            </div>

            <button
              onClick={() => setSubmitSuccess(false)}
              className="flex items-center text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline"
            >
              Submit another inquiry <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useState } from 'react';
import { CheckCircle2, Truck, Box } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ clientName: '', clientPhone: '', selectedService: 'home' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Dynamic submission timeout mimicking server transaction cycles
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2800); 
  };

  const resetFormState = () => {
    setShowSuccess(false);
    setFormData({ clientName: '', clientPhone: '', selectedService: 'home' });
  };

  return (
    <section id="contact" className="py-24 bg-custom-global w-full flex items-center justify-center scroll-mt-16 transition-colors duration-300">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6">
        <div className="bg-custom-surface rounded-2xl border border-custom p-8 sm:p-10 shadow-md flex flex-col w-full transition-colors duration-300 min-h-460px justify-center">
          
          {!showSuccess ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-custom-main mb-2">
                  Request an Estimate
                </h2>
                <p className="text-xs sm:text-sm text-custom-muted font-medium">
                  Get a verified calculating response back within 15 minutes.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5 w-full flex flex-col">
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-wider text-custom-muted mb-2 text-left select-none">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="clientName"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl border border-custom focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 bg-custom-global text-custom-main transition-all text-sm placeholder:text-slate-300 dark:placeholder:text-slate-700 disabled:opacity-60" 
                    placeholder="John Doe"
                    value={formData.clientName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-wider text-custom-muted mb-2 text-left select-none">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="clientPhone"
                    required
                    pattern="[0-9]{10}"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl border border-custom focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 bg-custom-global text-custom-main transition-all text-sm placeholder:text-slate-300 dark:placeholder:text-slate-700 disabled:opacity-60" 
                    placeholder="9876543210"
                    value={formData.clientPhone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-wider text-custom-muted mb-2 text-left select-none">
                    Service Type
                  </label>
                  <select 
                    name="selectedService"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl border border-custom focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 bg-custom-global text-custom-muted font-medium text-sm disabled:opacity-60"
                    value={formData.selectedService}
                    onChange={handleInputChange}
                  >
                    <option value="home">Home Relocation</option>
                    <option value="office">Office Shifting</option>
                    <option value="packing">Premium Packing Only</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative w-full mt-2 h-12 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white text-sm font-bold tracking-wide uppercase shadow-md hover:bg-slate-800 dark:hover:bg-indigo-700 transition-colors duration-150 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:cursor-not-allowed select-none active:scale-[0.99]" 
                >
                  {isSubmitting ? (
                    <div className="absolute inset-0 flex items-center justify-center gap-3 text-slate-400 dark:text-indigo-200">
                      <div className="relative w-12 h-6 overflow-hidden flex items-center justify-center">
                        <Box className="h-3 w-3 absolute top-0 text-amber-500 animate-box-loading" />
                        <Truck className="h-5 w-5 absolute bottom-0 text-indigo-500 dark:text-white animate-truck-loading" />
                      </div>
                      <span className="text-xs lowercase font-semibold tracking-normal text-slate-500 dark:text-slate-400">Loading cargo...</span>
                    </div>
                  ) : (
                    'Get Pricing Details'
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Premium Success State Modal UI Card Replacing Basic Alert */
            <div className="flex flex-col items-center text-center py-4 animate-fade-in">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-100 dark:border-emerald-900/50 text-emerald-500 mb-6 shadow-inner">
                <CheckCircle2 className="h-12 w-12" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black text-custom-main mb-3 tracking-tight">
                Estimate Request Logged
              </h3>
              <p className="text-sm text-custom-muted leading-relaxed max-w-sm mb-2 font-medium">
                Thank you, <span className="text-custom-main font-bold">{formData.clientName}</span>. A logistics tracking node has been opened for your reference sequence.
              </p>
              <div className="px-3 py-1.5 bg-custom-global border border-custom rounded-lg text-[11px] font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 mb-8 select-all">
                REF_ID: #SS-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <p className="text-xs text-custom-muted mb-8 leading-normal">
                Our assignment operator will place an active callback connection to your mobile channel (<span className="text-custom-main font-semibold">{formData.clientPhone}</span>) inside a 15-minute verification tier.
              </p>
              <button
                onClick={resetFormState}
                className="px-6 py-2.5 rounded-xl border border-custom text-xs font-bold uppercase tracking-wider text-custom-muted hover:text-custom-main bg-custom-global transition-colors"
              >
                Submit New Request
              </button>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
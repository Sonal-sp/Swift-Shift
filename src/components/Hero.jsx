import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-custom-global flex items-center justify-center overflow-hidden border-b border-custom transition-colors duration-300"
    >
      <div className="absolute top-12 left-1/4 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-950/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-24 right-1/4 w-80 h-80 bg-violet-100/20 dark:bg-violet-950/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex flex-col items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl w-full flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-indigo-50/80 dark:bg-indigo-950/40 text-black dark:text-indigo-300 mb-8 border border-indigo-100/40 dark:border-indigo-900/20 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.5} /> 100% Safe & Insured Relocation
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-custom-main block mb-6 leading-[1.12]">
            Moving stressful? <br />
            <span className="text-indigo-600 dark:text-indigo-400">We make it effortless.</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-custom-muted max-w-xl mx-auto mb-10 block leading-relaxed font-medium">
            Professional packing, secure transport, and seamless setup. Your belongings are treated like family heirlooms.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <motion.a 
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="w-full sm:w-52 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white font-semibold text-sm hover:bg-slate-800 dark:hover:bg-indigo-700 shadow-lg shadow-slate-900/5 transition-colors duration-200"
            >
              Book Your Move <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#services" 
              className="w-full sm:w-52 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-custom-surface border border-custom text-custom-muted font-semibold text-sm hover:bg-slate-50/50 dark:hover:bg-slate-800/50 shadow-sm transition-colors duration-200"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-custom-muted w-full font-semibold tracking-wide uppercase">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 opacity-70" strokeWidth={2.5} /> On-Time Delivery Guaranteed
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 opacity-70" strokeWidth={2.5} /> Fully Verified Drivers
          </div>
        </div>
      </div>
    </section>
  );
}
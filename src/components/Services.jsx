import React from 'react';
import { Home, Briefcase, Box } from 'lucide-react';
import { SHIFTING_SERVICES } from '../constants';

const CORE_ICON_MAP = {
  'residential': <Home className="h-5 w-5 text-indigo-600 dark:text-indigo-400" strokeWidth={2.2} />,
  'corporate': <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" strokeWidth={2.2} />,
  'specialty': <Box className="h-5 w-5 text-amber-600 dark:text-amber-400" strokeWidth={2.2} />
};

const DYNAMIC_THEME_MAP = {
  indigo: 'hover:border-indigo-500/20 dark:hover:border-indigo-500/40 hover:shadow-indigo-500/5',
  emerald: 'hover:border-emerald-500/20 dark:hover:border-emerald-500/40 hover:shadow-emerald-500/5',
  amber: 'hover:border-amber-500/20 dark:hover:border-amber-500/40 hover:shadow-amber-500/5'
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-custom-global w-full scroll-mt-16 border-b border-custom transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-custom-main mb-4">
            Tailored Moving Solutions
          </h2>
          <p className="text-custom-muted text-sm sm:text-base leading-relaxed">
            Select an intentional service profile matching your spatial parameters. Comprehensive tracking metrics are bundled natively into every moving tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {SHIFTING_SERVICES.map(({ id, title, description, category, accentColor }) => (
            <div
              key={id}
              className={`p-8 rounded-2xl border border-custom bg-custom-surface transition-all duration-300 flex flex-col items-start text-left group ${DYNAMIC_THEME_MAP[accentColor] || ''}`}
            >
              <div className="p-3.5 rounded-xl bg-custom-global border border-custom shadow-sm mb-6 flex items-center justify-center group-hover:scale-105 group-hover:bg-custom-surface transition-all duration-200">
                {CORE_ICON_MAP[category]}
              </div>
              
              <h3 className="text-lg font-bold text-custom-main mb-2 tracking-tight">
                {title}
              </h3>
              
              <p className="text-custom-muted leading-relaxed text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { LOGISTICS_FAQS } from '../constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-custom-global w-full scroll-mt-16 border-b border-custom transition-colors duration-300">
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-custom-main mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-custom-muted text-sm sm:text-base">
            Clear, upfront insights regarding our logistics frameworks, coverage policies, and estimation models.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {LOGISTICS_FAQS.map(({ id, question }, index) => {
            const isCurrentOpen = openIndex === index;
            
            return (
              <div 
                key={id} 
                className="border border-custom rounded-2xl bg-custom-surface/50 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleAccordion(index)} 
                  className="w-full p-6 flex justify-between items-center text-left font-bold text-custom-main hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150 group focus:outline-none"
                  aria-expanded={isCurrentOpen}
                >
                  <span className="text-sm sm:text-base pr-4 select-none">
                    {question}
                  </span>
                  <ChevronDown 
                    className={`h-4 w-4 shrink-0 text-custom-muted group-hover:text-indigo-500 transition-transform duration-300 ${
                      isCurrentOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''
                    }`} 
                    strokeWidth={2.5}
                  />
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isCurrentOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-xs sm:text-sm text-custom-muted leading-relaxed text-left">
                      Our pricing model index is computed strictly against metric cargo volume, absolute travel distance coordinates, and selected packing tier specs. We do not incorporate unlisted operational surcharges.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
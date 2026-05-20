import React from 'react';
import { Truck } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-custom-surface border-t border-custom py-16 text-custom-muted transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-custom">
          
          <div className="flex flex-col items-start max-w-xs gap-3">
            <div className="flex items-center gap-2 text-custom-main select-none">
              <Truck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" strokeWidth={2.2} />
              <span className="font-extrabold text-lg tracking-tight">
                Swift<span className="text-indigo-600 dark:text-indigo-400">Shift</span>
              </span>
            </div>
            <p className="text-xs text-custom-muted/80 leading-relaxed text-left">
              Simplifying commercial and residential logistics across domestic networks with highly secure transit protocols.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-custom-main uppercase tracking-wider">
                Company Links
              </span>
              <ul className="flex flex-col gap-2.5 text-xs font-medium">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={`footer-${link.href}`}>
                    <a 
                      href={link.href} 
                      className="text-custom-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-custom-main uppercase tracking-wider">
                Compliance
              </span>
              <ul className="flex flex-col gap-2.5 text-xs font-medium text-custom-muted">
                <li>
                  <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-[11px] font-medium text-custom-muted tracking-wide">
          <p>
            &copy; {currentYear} SwiftShift Logistics. Engineered natively. All rights reserved.
          </p>
          <p className="text-custom-muted/40">
            Version 1.0.0 Stable
          </p>
        </div>
      </div>
    </footer>
  );
}
import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, Sun, Moon } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Synchronize global layout theme configuration values on initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('site-theme');
    const root = document.documentElement;

    if (savedTheme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
      setIsDarkMode(true);
    } else {
      root.removeAttribute('data-theme');
      root.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  // Global Orchestrator: Toggles both Tailwind selectors and custom CSS variables synchronously
  const toggleThemeMode = () => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.removeAttribute('data-theme');
      root.classList.remove('dark');
      localStorage.setItem('site-theme', 'light');
      setIsDarkMode(false);
    } else {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
      localStorage.setItem('site-theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const destination = document.querySelector(targetId);
    if (destination) {
      destination.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-custom-surface/90 backdrop-blur-md border-b border-custom shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          
          {/* FIXED LOGO CONTAINER: Added explicit text-slate-900 and dark:text-white to ensure visibility */}
<div className="flex items-center gap-2 select-none">
  <Truck className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
  <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
    Swift<span className="text-indigo-600 dark:text-indigo-400">Shift</span>
  </span>
</div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold ml-auto">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="relative py-1 text-custom-muted hover:text-custom-main transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-2px bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Premium Theme Switcher Button Element */}
            <button
              onClick={toggleThemeMode}
              className="p-2 rounded-xl bg-custom-global border border-custom text-custom-muted hover:text-custom-main transition-all active:scale-95 cursor-pointer"
              aria-label="Toggle visual interface layout theme parameters"
            >
              {isDarkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4" />}
            </button>
            
            <a 
              href="#contact" 
              onClick={(e) => handleNavigation(e, '#contact')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200 text-xs tracking-wide uppercase font-bold"
            >
              Get Quote
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleThemeMode}
              className="p-2 rounded-xl bg-custom-global border border-custom text-custom-muted active:scale-95"
            >
              {isDarkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-custom-muted p-2 rounded-xl hover:bg-custom-global border border-transparent hover:border-custom transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" strokeWidth={2.2} /> : <Menu className="h-5 w-5" strokeWidth={2.2} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-custom-surface border-t border-custom w-full px-4 py-4 space-y-2 flex flex-col shadow-xl">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={`mobile-${link.href}`}
              href={link.href} 
              onClick={(e) => handleNavigation(e, link.href)} 
              className="block px-4 py-3 text-custom-muted font-semibold text-sm rounded-xl hover:bg-custom-global transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavigation(e, '#contact')} 
            className="block text-center px-4 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-sm active:scale-[0.99] transition-transform"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}
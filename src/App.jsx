import React from 'react';
// Make sure this matches the file name exactly with a capital B
import NavBar from './components/NavBar.jsx'; 
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import FAQ from './components/FAQ.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Update the component tag to use capital B */}
      <NavBar />
      <main className="pt-16">
        <Hero />
        <Services />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
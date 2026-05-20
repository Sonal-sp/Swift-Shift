import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
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
import React from 'react';
import { Smartphone, Shield, Zap, Code2, ChevronRight, Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import BackgroundNetwork from './components/BackgroundNetwork';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Cybersecurity from './components/Cybersecurity';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle Network Constellation Canvas */}
      <BackgroundNetwork />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Cybersecurity />
        <Education />
        <Certificates />
        <Contact />
      </main>

      {/* Clean Minimal Footer */}
      <Footer />
    </div>
  );
}

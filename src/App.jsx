import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Global background grid overlay */}
      <div className="fixed inset-0 grid-bg opacity-15 pointer-events-none z-0" />
      
      {/* Navbar header */}
      <Navbar />
      
      {/* Main sections container */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer info & links */}
      <Footer />
    </div>
  );
}

export default App;

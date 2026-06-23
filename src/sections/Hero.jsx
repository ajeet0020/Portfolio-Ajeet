import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Brand SVG Icons since Lucide v1+ removed brand icons
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const LeetcodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.406L1.405 11.524a1.4 1.4 0 0 0 0 1.98l7.676 7.674c.264.263.626.41 1 .41h10.514a1.4 1.4 0 0 0 1.4-1.4V9.69a1.4 1.4 0 0 0-.41-1L14.444.406A1.374 1.374 0 0 0 13.483 0zm.043 2.735l6.096 6.095v10.158H10.8L3.705 11.9 10.8 4.805l2.726-2.07z" />
    <path d="M16.182 8.31a.925.925 0 0 0-1.309 0L9.42 13.763c-.362.361-.362.946 0 1.308l2.181 2.181a.925.925 0 0 0 1.308 0l5.454-5.454a.925.925 0 0 0 0-1.308l-2.181-2.18z" />
  </svg>
);

const Hero = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'Ajeet_Kumar_Resume.pdf');
      document.body.appendChild(link);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[90px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glassmorphism text-xs font-medium text-indigo-300 border border-indigo-500/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Available for Software Engineer Opportunities</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Hi, I am <span className="text-gradient-purple-cyan">Ajeet Kumar</span>
        </motion.h1>

        {/* Roles/Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl font-medium text-gray-300 max-w-2xl mb-8 leading-relaxed"
        >
          Java Developer <span className="text-indigo-400">|</span> Full Stack Developer
          <span className="block text-sm sm:text-base text-gray-400 mt-3 font-normal">
            Crafting scalable backend architectures and engaging full-stack web experiences.
          </span>
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          <a
            href="#contact"
            className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-indigo-400/20"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleDownload}
            disabled={downloading || downloadSuccess}
            className={`flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full font-medium transition-all duration-300 border ${
              downloadSuccess
                ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-300'
                : 'glassmorphism border-white/10 hover:border-white/20 text-white hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {downloading ? (
              <>
                <span className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                <span>Downloading...</span>
              </>
            ) : downloadSuccess ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex space-x-6 text-gray-400"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 hover:scale-110 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 hover:scale-110 transition-all duration-300 flex items-center space-x-1"
            aria-label="LeetCode Profile"
          >
            <LeetcodeIcon className="w-6 h-6" />
            <span className="text-xs font-semibold font-mono hidden sm:inline">LeetCode</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-6 rounded-full bg-indigo-500/50"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { ChevronUp } from 'lucide-react';

// Custom brand SVGs
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const LeetcodeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.406L1.405 11.524a1.4 1.4 0 0 0 0 1.98l7.676 7.674c.264.263.626.41 1 .41h10.514a1.4 1.4 0 0 0 1.4-1.4V9.69a1.4 1.4 0 0 0-.41-1L14.444.406A1.374 1.374 0 0 0 13.483 0zm.043 2.735l6.096 6.095v10.158H10.8L3.705 11.9 10.8 4.805l2.726-2.07z" />
    <path d="M16.182 8.31a.925.925 0 0 0-1.309 0L9.42 13.763c-.362.361-.362.946 0 1.308l2.181 2.181a.925.925 0 0 0 1.308 0l5.454-5.454a.925.925 0 0 0 0-1.308l-2.181-2.18z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02000c] border-t border-white/5 py-12 overflow-hidden text-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
        
        {/* Logo and Brand */}
        <div className="space-y-2">
          <a href="#home" className="text-lg font-bold text-white tracking-tight">
            Ajeet<span className="text-indigo-400">.dev</span>
          </a>
          <p className="text-xs text-gray-500 max-w-xs">
            BCA Graduate & Java Developer. Building high-quality, scalable applications.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold text-gray-400">
          <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors duration-300">Skills</a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors duration-300">Experience</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4 text-gray-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300"
              aria-label="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-600 border border-white/10 hover:border-indigo-500/50 text-indigo-400 hover:text-white transition-all duration-300 group shadow-md"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-white/5 text-center flex flex-col sm:flex-row sm:justify-between text-[10px] text-gray-600">
        <span>&copy; {currentYear} Ajeet Kumar. All rights reserved.</span>
        <span className="mt-1 sm:mt-0">Designed with React, Tailwind & Framer Motion.</span>
      </div>
    </footer>
  );
};

export default Footer;

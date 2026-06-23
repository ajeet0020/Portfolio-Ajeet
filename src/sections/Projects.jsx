import React from 'react';
import { FolderGit2, ExternalLink, Sparkles, Car } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom GitHub Icon since Lucide v1+ removed brand icons
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'AI SaaS Web Application',
      category: 'AI / Full Stack',
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      description: 'A cutting-edge software-as-a-service web application integrated with generative AI capabilities, allowing interactive chats and real-time processing.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'OpenAI API'],
      features: [
        'AI-driven chat response systems using OpenAI APIs.',
        'Real-time interaction and fluid user interfaces.',
        'Robust user authentication and secure profile storage.'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Car Rental Web Application',
      category: 'E-Commerce / Full Stack',
      icon: <Car className="w-5 h-5 text-cyan-400" />,
      description: 'A comprehensive car rental web portal enabling seamless vehicle browsing, bookings, and full admin control panels.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
      features: [
        'Interactive vehicle catalog with filters and booking forms.',
        'Sleek Admin Dashboard for managing fleet, bookings, and users.',
        'Clean RESTful API architecture for service communication.'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-indigo-400 text-xs uppercase tracking-widest font-semibold mb-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Featured <span className="text-gradient-purple-cyan">Projects</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl glassmorphism border-white/5 hover:border-indigo-500/20 glow-card transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-8">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-indigo-500/10 transition-colors duration-500">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase font-mono text-indigo-400">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features Header */}
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Key Features</h4>
                
                {/* Features Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Tech Stack & Action Links */}
              <div className="px-6 py-5 sm:px-8 bg-black/20 border-t border-white/5">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold font-mono px-2.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center text-sm font-semibold">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'KodNest Technologies',
      duration: 'Nov 2025 – Present',
      location: 'Bengaluru, Karnataka',
      responsibilities: [
        'Engaged in backend development focusing on Java programming and MySQL databases.',
        'Gained hands-on understanding of the Software Development Life Cycle (SDLC) from planning to execution.',
        'Collaborated effectively within a development team to understand requirements and review design implementations.',
        'Participated in unit testing and debugged issues to ensure system reliability.'
      ],
      techs: ['Java', 'MySQL', 'SDLC', 'Manual Testing']
    },
    {
      role: 'Software Development Intern',
      company: 'Yuga Yatra Retail Pvt Ltd',
      duration: 'Aug 2025 – Oct 2025',
      location: 'Bengaluru, Karnataka',
      responsibilities: [
        'Assisted developers with software module creation and database configurations.',
        'Learned to test and validate modules against user requirements before deployment.',
        'Acquired key practical skills in coding best practices and version control setups.'
      ],
      techs: ['Software Development', 'Testing Modules', 'Version Control']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-indigo-400 text-xs uppercase tracking-widest font-semibold mb-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Work <span className="text-gradient-purple-cyan">Experience</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-dashed border-indigo-500/20 ml-4 md:ml-32 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
                className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#030014] border-4 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/50"
              />

              {/* Sidebar Info for Desktop */}
              <div className="hidden md:block absolute -left-[130px] top-1.5 w-24 text-right text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                {exp.duration.split(' – ')[0]}
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl glassmorphism border-white/5 hover:border-indigo-500/20 transition-all duration-300 shadow-xl"
              >
                {/* Mobile Duration & Location Row */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-4 text-xs font-mono text-gray-400">
                  <span className="md:hidden flex items-center space-x-1.5 bg-indigo-500/10 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.duration}</span>
                  </span>
                  
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Role and Company */}
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-sm font-semibold text-indigo-300 mb-6">{exp.company}</h4>

                {/* Responsibilities bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-3 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500/80 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

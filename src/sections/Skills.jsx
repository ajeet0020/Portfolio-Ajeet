import React from 'react';
import { Award, Code2, Layout, Database, Server, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 }
      ],
      color: 'indigo'
    },
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 }
      ],
      color: 'purple'
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'Spring Boot', level: 40, status: 'Coming Soon' }
      ],
      color: 'cyan'
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 }
      ],
      color: 'emerald'
    },
    {
      title: 'Tools & Environments',
      icon: <Settings className="w-5 h-5 text-amber-400" />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Cursor AI', level: 85 },
        { name: 'Firebase Studio', level: 70 }
      ],
      color: 'amber'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'indigo': return { border: 'group-hover:border-indigo-500/30', text: 'text-indigo-400', progress: 'bg-indigo-500' };
      case 'purple': return { border: 'group-hover:border-purple-500/30', text: 'text-purple-400', progress: 'bg-purple-500' };
      case 'cyan': return { border: 'group-hover:border-cyan-500/30', text: 'text-cyan-400', progress: 'bg-cyan-500' };
      case 'emerald': return { border: 'group-hover:border-emerald-500/30', text: 'text-emerald-400', progress: 'bg-emerald-500' };
      case 'amber': return { border: 'group-hover:border-amber-500/30', text: 'text-amber-400', progress: 'bg-amber-500' };
      default: return { border: 'group-hover:border-indigo-500/30', text: 'text-indigo-400', progress: 'bg-indigo-500' };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

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
            <Award className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Skills & <span className="text-gradient-purple-cyan">Expertise</span>
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group p-6 rounded-2xl glassmorphism border-white/5 glow-card transition-all duration-500 flex flex-col justify-between ${colors.border}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-white/90">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                          {skill.status ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/20">
                              {skill.status}
                            </span>
                          ) : (
                            <span className="text-xs font-semibold text-gray-500">{skill.level}%</span>
                          )}
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className={`h-full rounded-full ${colors.progress} opacity-80`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { Trophy, Code2, Award, Briefcase, Navigation, TrendingUp, Sparkles, FolderKanban } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: '300+ DSA Solved',
      subtitle: 'LeetCode & Platforms',
      description: 'Demonstrated strong logic skills by solving 300+ data structures and algorithms challenges.',
      icon: <Code2 className="w-6 h-6 text-indigo-400" />
    },
    {
      title: 'Java Full Stack Training',
      subtitle: 'Certification Course',
      description: 'Completed extensive training covering core Java, Advanced Java, Hibernate, and SQL development.',
      icon: <Award className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Dual Internships',
      subtitle: 'Industry Experience',
      description: 'Completed two consecutive software development internships in Bengaluru, working on production-ready systems.',
      icon: <Briefcase className="w-6 h-6 text-cyan-400" />
    }
  ];

  const interests = [
    {
      name: 'Bike Riding',
      description: 'Exploring scenic routes and road tripping.',
      icon: <Navigation className="w-5 h-5 text-indigo-400" />
    },
    {
      name: 'Trading',
      description: 'Analyzing financial markets and chart patterns.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
    },
    {
      name: 'AI Tools',
      description: 'Integrating modern developer models to optimize build tasks.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />
    },
    {
      name: 'Building Side Projects',
      description: 'Experimenting with React, Node, and database architectures.',
      icon: <FolderKanban className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Achievements Column */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 text-indigo-400 text-xs uppercase tracking-widest font-semibold mb-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Successes</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tight text-white"
              >
                Key <span className="text-gradient-purple-cyan">Achievements</span>
              </motion.h2>
            </div>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-5 rounded-2xl glassmorphism border-white/5 hover:border-indigo-500/10 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-0.5">{item.title}</h3>
                    <h4 className="text-xs font-semibold text-indigo-300 mb-2">{item.subtitle}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests Column */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 text-indigo-400 text-xs uppercase tracking-widest font-semibold mb-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Life</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tight text-white"
              >
                Personal <span className="text-gradient-purple-cyan">Interests</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-2xl glassmorphism border-white/5 hover:border-indigo-500/15 group hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 w-fit mb-4 group-hover:bg-indigo-500/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;

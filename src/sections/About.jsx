import React, { useState } from 'react';
import { User, Terminal, Cpu, GraduationCap, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const profileJson = `{
  "name": "Ajeet Kumar",
  "education": "BCA, Aisect University",
  "gpa": "7.9 / 10.0",
  "role": "Java & Full Stack Developer",
  "location": "Bengaluru, India",
  "interests": [
    "Scalable Architecture",
    "Problem Solving",
    "AI Tools",
    "Bike Riding",
    "Trading"
  ],
  "seeking": "Software Engineer Opportunities"
}`;

  const bashCommand = `ajeet@dev-pc:~$ cat education.sh
# Academic Profile
university="Aisect University Hazaribagh"
degree="Bachelor of Computer Applications (BCA)"
cgpa="7.9 / 10"
graduation_year="2025"

echo "🎓 Ready to build software that scales."
🎓 Ready to build software that scales.`;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px]" />

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
            <User className="w-3.5 h-3.5" />
            <span>Biography</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            About <span className="text-gradient-purple-cyan">Me</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Story & Card Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span>Passionate Backend & Full Stack Engineer</span>
            </h3>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I am a Bachelor of Computer Applications (BCA) graduate from Aisect University Hazaribagh, completed with an academic CGPA of 7.9. Currently active as a Java Developer with valuable hands-on internship experience in Bengaluru.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              My core strengths lie in Java, JavaScript, databases, and building robust backend services. I love dissecting complex problems, writing clean code, and experimenting with AI tools and full-stack development to build side projects.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I am looking for a full-time Software Engineer opportunity where I can apply my skills, solve challenging problems, and grow along with the organization.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl glassmorphism border-white/5 flex items-start space-x-3">
                <GraduationCap className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Education</h4>
                  <p className="text-sm font-semibold text-white mt-1">BCA Graduate</p>
                  <p className="text-xs text-indigo-300 mt-0.5">CGPA 7.9</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glassmorphism border-white/5 flex items-start space-x-3">
                <Code2 className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Focus</h4>
                  <p className="text-sm font-semibold text-white mt-1">Java & Full Stack</p>
                  <p className="text-xs text-cyan-300 mt-0.5">Backend Passion</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="w-full rounded-2xl glassmorphism overflow-hidden border border-white/10 shadow-2xl relative">
              {/* Terminal Title Bar */}
              <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center space-x-1 text-xs font-mono text-gray-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>bash - terminal</span>
                </div>
                <div className="w-12" /> {/* spacer to center title */}
              </div>

              {/* Tabs */}
              <div className="bg-black/30 flex px-4 border-b border-white/5 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-4 py-2 border-b-2 transition-colors duration-300 ${
                    activeTab === 'profile'
                      ? 'border-indigo-400 text-indigo-300 bg-white/5'
                      : 'border-transparent text-gray-500 hover:text-gray-300'
                  }`}
                >
                  ajeet.json
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-4 py-2 border-b-2 transition-colors duration-300 ${
                    activeTab === 'education'
                      ? 'border-indigo-400 text-indigo-300 bg-white/5'
                      : 'border-transparent text-gray-500 hover:text-gray-300'
                  }`}
                >
                  education.sh
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-6 bg-black/40 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
                {activeTab === 'profile' ? (
                  <pre className="text-emerald-400">
                    <span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {profileJson}
                  </pre>
                ) : (
                  <pre className="text-gray-300 whitespace-pre-wrap">
                    {bashCommand}
                  </pre>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

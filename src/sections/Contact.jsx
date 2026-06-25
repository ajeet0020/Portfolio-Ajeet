import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactEmail = 'ajeetya0020@gmail.com';
  const contactPhone = '+91 9508771783';
  const contactLocation = 'Bengaluru, Karnataka, India';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowToast(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px]" />

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
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Get In <span className="text-gradient-purple-cyan">Touch</span>
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl glassmorphism border-white/5 space-y-6">
              <h3 className="text-lg font-bold text-white mb-4">Let's talk about opportunities!</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Whether you're looking to hire, discuss a projects, or simply want to connect—feel free to drop a message.
              </p>

              <div className="space-y-4 pt-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-indigo-500/20 transition-all duration-300">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500">Email</span>
                      <span className="text-sm font-semibold text-white break-all">{contactEmail}</span>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500">Phone</span>
                    <span className="text-sm font-semibold text-white">{contactPhone}</span>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500">Location</span>
                    <span className="text-sm font-semibold text-white">{contactLocation}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl glassmorphism border-white/5 space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ${errors.name ? 'border-rose-500/50' : 'border-white/10'
                    }`}
                />
                {errors.name && (
                  <span className="text-xs text-rose-400 flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ${errors.email ? 'border-rose-500/50' : 'border-white/10'
                    }`}
                />
                {errors.email && (
                  <span className="text-xs text-rose-400 flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi Ajeet, I'd love to connect..."
                  className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none ${errors.message ? 'border-rose-500/50' : 'border-white/10'
                    }`}
                />
                {errors.message && (
                  <span className="text-xs text-rose-400 flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-300 shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Notification Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 flex items-center space-x-3 px-5 py-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/30 text-emerald-300 backdrop-blur-md shadow-2xl"
          >
            <CheckCircle className="w-5 h-5 shrink-0" />
            <div className="text-xs sm:text-sm font-semibold">
              Message sent! Thanks for reaching out.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

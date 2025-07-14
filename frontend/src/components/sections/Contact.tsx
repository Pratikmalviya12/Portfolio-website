import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  username?: string;
}

interface ContactProps {
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: SocialLink[];
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: <Github className="w-5 h-5" />,
    username: '@yourusername'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: <Linkedin className="w-5 h-5" />,
    username: '/in/yourusername'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: <Twitter className="w-5 h-5" />,
    username: '@yourusername'
  }
];

export const Contact: React.FC<ContactProps> = ({
  email = 'your.email@example.com',
  phone = '+1 (555) 123-4567',
  location = 'Your City, Country',
  socialLinks = defaultSocialLinks
}) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 glitch-text" data-text="Contact">
              Contact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's connect and discuss your next project
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="cyberpunk-card">
                <h3 className="text-2xl font-semibold text-cyber-primary mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-cyber-neon mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-cyber-secondary font-mono">Email</p>
                      <a 
                        href={`mailto:${email}`}
                        className="text-gray-300 hover:text-cyber-neon transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-cyber-neon mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-cyber-secondary font-mono">Phone</p>
                      <a 
                        href={`tel:${phone}`}
                        className="text-gray-300 hover:text-cyber-neon transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-cyber-neon mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-cyber-secondary font-mono">Location</p>
                      <p className="text-gray-300">{location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="cyberpunk-card">
                <h3 className="text-xl font-semibold text-cyber-primary mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg bg-background-dark hover:bg-cyber-neon/10 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="text-cyber-neon group-hover:text-cyber-primary transition-colors">
                        {link.icon}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-white group-hover:text-cyber-primary transition-colors">
                          {link.platform}
                        </p>
                        {link.username && (
                          <p className="text-sm text-gray-400 font-mono">{link.username}</p>
                        )}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="cyberpunk-card">
                <h3 className="text-2xl font-semibold text-cyber-primary mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-cyber-secondary mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background-dark border border-cyber-neon/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-neon focus:outline-none focus:ring-2 focus:ring-cyber-neon/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cyber-secondary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background-dark border border-cyber-neon/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-neon focus:outline-none focus:ring-2 focus:ring-cyber-neon/20 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-cyber-secondary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-dark border border-cyber-neon/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-neon focus:outline-none focus:ring-2 focus:ring-cyber-neon/20 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cyber-secondary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background-dark border border-cyber-neon/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-neon focus:outline-none focus:ring-2 focus:ring-cyber-neon/20 transition-all resize-vertical"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg ${
                        submitStatus === 'success'
                          ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                          : 'bg-red-500/20 border border-red-500/30 text-red-300'
                      }`}
                    >
                      {submitStatus === 'success' 
                        ? '✅ Message sent successfully! I\'ll get back to you soon.'
                        : '❌ Failed to send message. Please try again or email me directly.'
                      }
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyberpunk-button w-full inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

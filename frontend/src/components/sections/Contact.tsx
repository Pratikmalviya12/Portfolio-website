import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { portfolioData } from "../../data";
import { Button } from "../ui/Button";
import { 
  openEmailClient, 
  validateContactForm, 
  type ContactFormData 
} from "../../utils/contactUtils";

interface ContactProps {
  email?: string;
  phone?: string;
  location?: string;
}

export const Contact: React.FC<ContactProps> = ({
  email: propEmail,
  phone: propPhone,
  location: propLocation,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Use props or data from portfolio
  const email = propEmail || portfolioData.personal.email;
  const phone = propPhone || portfolioData.personal.phone;
  const location = propLocation || portfolioData.personal.location;
  const socialLinks = portfolioData.socialLinks;

  // Function to get icon based on iconType
  const getIcon = (iconType: string) => {
    switch (iconType.toLowerCase()) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const validationErrors = validateContactForm(formData);
    if (validationErrors.length > 0) {
      console.log("Validation errors:", validationErrors);
      setIsSubmitting(false);
      setSubmitStatus("error");
      return;
    }

    try {
      // Open email client with pre-filled message
      openEmailClient(formData, email);
      
      setSubmitStatus("success");
      
      // Clear form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      console.error("Failed to open email client:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-5 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto motion-safe-fallback"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2
              className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-50 mb-3"
              data-text={portfolioData.sections.contact.title}
            >
              {portfolioData.sections.contact.title}
            </h2>
            <p className="text-sm md:text-base text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              {portfolioData.sections.contact.subtitle}
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent-blue-500 to-accent-purple-500 mx-auto mt-3 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg p-6 shadow-lg">
                <h3 className="text-base font-semibold text-primary-900 dark:text-primary-50 mb-4">
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-accent-blue-600 dark:text-accent-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-primary-600 dark:text-primary-400 font-mono">
                        Email
                      </p>
                      <a
                        href={`mailto:${email}`}
                        className="text-primary-700 dark:text-primary-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors text-sm"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-accent-blue-600 dark:text-accent-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-primary-600 dark:text-primary-400 font-mono">
                        Phone
                      </p>
                      <a
                        href={`tel:${phone}`}
                        className="text-primary-700 dark:text-primary-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors text-sm"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-accent-blue-600 dark:text-accent-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-primary-600 dark:text-primary-400 font-mono">
                        Location
                      </p>
                      <p className="text-primary-700 dark:text-primary-300 text-sm">
                        {location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg p-6 shadow-lg">
                <h3 className="text-base font-semibold text-primary-900 dark:text-primary-50 mb-3">
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg bg-primary-50/50 dark:bg-primary-900/50 hover:bg-accent-blue-50 dark:hover:bg-accent-blue-900/20 border border-primary-200/50 dark:border-primary-700/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="text-accent-blue-600 dark:text-accent-blue-400 group-hover:text-accent-purple-600 dark:group-hover:text-accent-purple-400 transition-colors">
                        {getIcon(link.iconType)}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-primary-900 dark:text-primary-100 group-hover:text-accent-purple-700 dark:group-hover:text-accent-purple-300 transition-colors text-sm">
                          {link.platform}
                        </p>
                        {link.username && (
                          <p className="text-xs text-primary-600 dark:text-primary-400 font-mono">
                            {link.username}
                          </p>
                        )}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/90 dark:bg-primary-800/80 backdrop-blur-md border border-primary-200/60 dark:border-primary-700/60 rounded-lg p-6 shadow-lg">
                <h3 className="text-base font-semibold text-primary-900 dark:text-primary-50 mb-4">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-primary-700 dark:text-primary-300 mb-1"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white dark:bg-primary-900 border border-primary-300 dark:border-primary-600 rounded-lg text-primary-900 dark:text-primary-100 placeholder-primary-400 dark:placeholder-primary-500 focus:border-accent-blue-500 focus:outline-none focus:ring-1 focus:ring-accent-blue-500/20 transition-all text-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-primary-700 dark:text-primary-300 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white dark:bg-primary-900 border border-primary-300 dark:border-primary-600 rounded-lg text-primary-900 dark:text-primary-100 placeholder-primary-400 dark:placeholder-primary-500 focus:border-accent-blue-500 focus:outline-none focus:ring-1 focus:ring-accent-blue-500/20 transition-all text-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-primary-700 dark:text-primary-300 mb-1"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-white dark:bg-primary-900 border border-primary-300 dark:border-primary-600 rounded-lg text-primary-900 dark:text-primary-100 placeholder-primary-400 dark:placeholder-primary-500 focus:border-accent-blue-500 focus:outline-none focus:ring-1 focus:ring-accent-blue-500/20 transition-all text-sm"
                      placeholder="Brief description of your message"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-primary-700 dark:text-primary-300 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white dark:bg-primary-900 border border-primary-300 dark:border-primary-600 rounded-lg text-primary-900 dark:text-primary-100 placeholder-primary-400 dark:placeholder-primary-500 focus:border-accent-blue-500 focus:outline-none focus:ring-1 focus:ring-accent-blue-500/20 transition-all resize-vertical text-sm"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus !== "idle" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-lg text-sm ${
                        submitStatus === "success"
                          ? "bg-green-500/20 border border-green-500/30 text-green-300"
                          : "bg-red-500/20 border border-red-500/30 text-red-300"
                      }`}
                    >
                      {submitStatus === "success"
                        ? "✅ Message sent successfully! I'll get back to you soon."
                        : "❌ Failed to send message. Please try again or email me directly."}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full"
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
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

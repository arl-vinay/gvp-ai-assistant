import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass glass-glow p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-chat-input/50 border border-glass-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-chat-input/50 border border-glass-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-chat-input/50 border border-glass-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold neon-glow hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Support Info */}
            <div className="glass glass-glow p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Support Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Response Time:</strong><br />
                  We typically respond within 24 hours during business days.
                </p>
                <p>
                  <strong className="text-foreground">Business Hours:</strong><br />
                  Monday - Friday, 9:00 AM - 6:00 PM PST
                </p>
                <p>
                  <strong className="text-foreground">Emergency Support:</strong><br />
                  For urgent issues, please include "URGENT" in your subject line.
                </p>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="glass glass-glow p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-primary neon-glow">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@gvpassistant.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-secondary neon-glow-secondary">
                    <MessageCircle className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 on our main chat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="glass glass-glow p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Quick Help</h3>
              <p className="text-muted-foreground mb-4">
                Looking for instant answers? Check out our documentation and FAQ section.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/docs'}
                className="px-4 py-2 bg-gradient-secondary text-secondary-foreground rounded-lg font-medium neon-glow-secondary hover:shadow-glow-secondary transition-all duration-300"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
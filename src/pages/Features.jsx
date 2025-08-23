import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Zap, 
  Shield, 
  Smartphone, 
  Brain, 
  Clock 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Engage in fluid, contextual conversations that feel natural and intuitive.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant responses powered by advanced AI technology for real-time assistance.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are secure and private with enterprise-grade encryption.",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless experience across all devices with responsive glassmorphic design.",
      gradient: "from-orange-500 to-red-400",
    },
    {
      icon: Brain,
      title: "Smart Context",
      description: "Remembers conversation history and context for more relevant responses.",
      gradient: "from-indigo-500 to-blue-400",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Always ready to help, any time of day or night without interruption.",
      gradient: "from-teal-500 to-cyan-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes GVP Assistant the perfect AI companion for all your needs
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass glass-hover glass-glow p-8 rounded-2xl group cursor-pointer"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass glass-glow p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to experience the future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start chatting with GVP Assistant today and discover the power of AI conversation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold neon-glow hover:shadow-glow transition-all duration-300"
            >
              Start Chatting Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
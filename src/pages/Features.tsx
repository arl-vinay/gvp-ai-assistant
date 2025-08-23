import { motion } from "framer-motion";
import { Code, BookOpen, Zap, Users, Bot, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Code Assistance",
      description: "Get help with coding problems, debugging, and best practices across multiple programming languages.",
      color: "neon-glow"
    },
    {
      icon: BookOpen,
      title: "Learning Support",
      description: "Personalized learning paths and explanations for complex concepts in computer science and development.",
      color: "neon-glow-secondary"
    },
    {
      icon: Zap,
      title: "Quick Solutions",
      description: "Instant answers and solutions to common development challenges and technical questions.",
      color: "neon-glow-accent"
    },
    {
      icon: Users,
      title: "Project Planning",
      description: "Help with project architecture, technology selection, and development roadmaps.",
      color: "neon-glow"
    },
    {
      icon: Bot,
      title: "24/7 Availability",
      description: "Always available to help with your development needs, no matter the time or complexity.",
      color: "neon-glow-secondary"
    },
    {
      icon: Sparkles,
      title: "Innovation Focus",
      description: "Stay updated with the latest trends and technologies in software development.",
      color: "neon-glow-accent"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <FloatingParticles />
      <Navbar />
      
      <div className="pt-32 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Powerful Features
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to accelerate your development journey and build amazing projects.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`glass glass-border h-full hover:${feature.color} transition-all duration-300`}>
                  <CardHeader className="text-center">
                    <motion.div 
                      className="mx-auto mb-4 p-3 rounded-full bg-primary/20 w-fit"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-6">
                Jump into the chat and start building something amazing with GVP Assistant.
              </p>
              <motion.a
                href="/"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium neon-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Chatting
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
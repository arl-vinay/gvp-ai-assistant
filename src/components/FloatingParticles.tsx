import { motion } from "framer-motion";
import { Bot, Code, BookOpen, Sparkles, Zap, Cpu } from "lucide-react";

const FloatingParticles = () => {
  const particles = [
    { Icon: Bot, delay: 0, x: "10%", y: "20%" },
    { Icon: Code, delay: 0.5, x: "80%", y: "15%" },
    { Icon: BookOpen, delay: 1, x: "15%", y: "70%" },
    { Icon: Sparkles, delay: 1.5, x: "85%", y: "75%" },
    { Icon: Zap, delay: 2, x: "50%", y: "10%" },
    { Icon: Cpu, delay: 2.5, x: "25%", y: "85%" },
  ];

  const floatingVariants = {
    initial: { 
      opacity: 0,
      scale: 0.5,
      rotate: 0 
    },
    animate: {
      opacity: [0, 0.3, 0.5, 0.3],
      scale: [0.5, 1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-32 right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Floating icons */}
      {particles.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/30"
          style={{ left: x, top: y }}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        >
          <Icon size={32} className="drop-shadow-lg" />
        </motion.div>
      ))}
      
      {/* Animated background lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(270 100% 70%)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(200 100% 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(320 100% 70%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,100 Q400,50 800,100 T1600,100"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,200 Q600,150 1200,200 T2400,200"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </svg>
    </div>
  );
};

export default FloatingParticles;
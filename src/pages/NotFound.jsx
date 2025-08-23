import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <div className="glass glass-glow p-12 rounded-3xl inline-block">
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-8xl md:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4"
            >
              404
            </motion.h1>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="p-4 rounded-2xl bg-gradient-secondary neon-glow-secondary inline-block"
            >
              <Search className="w-12 h-12 text-secondary-foreground" />
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold neon-glow hover:shadow-glow transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 px-6 py-3 glass glass-hover glass-glow rounded-xl font-semibold transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
              }}
              animate={{
                y: -50,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
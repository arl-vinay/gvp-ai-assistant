import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Chat", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Docs", path: "/docs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b glass-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">GVP Assistant</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <motion.span
                  className={`text-foreground/80 hover:text-foreground transition-colors py-2 px-4 rounded-lg ${
                    location.pathname === item.path ? 'text-primary' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary neon-glow rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  whileHover={{ scale: 1.02 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Props: message, isBot, timestamp (optional)

const ChatMessage = ({ message, isBot, timestamp }) => {
  return (
    <motion.div
      className={`flex gap-4 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {isBot && (
        <Avatar className="w-10 h-10 ring-2 ring-primary/50">
          <AvatarFallback className="bg-primary/20">
            <Bot className="w-5 h-5 text-primary" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <motion.div
        className={`max-w-[80%] md:max-w-[70%] p-4 rounded-2xl glass-border backdrop-blur-sm ${
          isBot 
            ? 'bg-card/80 text-card-foreground neon-glow' 
            : 'bg-primary/20 text-primary-foreground neon-glow-secondary ml-auto'
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-sm leading-relaxed">{message}</p>
        {timestamp && (
          <p className="text-xs text-muted-foreground mt-2 opacity-70">
            {timestamp}
          </p>
        )}
      </motion.div>
      
      {!isBot && (
        <Avatar className="w-10 h-10 ring-2 ring-secondary/50">
          <AvatarFallback className="bg-secondary/20">
            <User className="w-5 h-5 text-secondary" />
          </AvatarFallback>
        </Avatar>
      )}
    </motion.div>
  );
};

export default ChatMessage;
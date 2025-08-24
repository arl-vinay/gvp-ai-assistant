import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";
import ChatMessage from "@/components/ChatMessage";
import TypingIndicator from "@/components/TypingIndicator";
import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";

// Message shape: { id, content, isBot, timestamp }

const mockResponses = [
  "I'm here to help you with your development projects! What would you like to build today?",
  "That's a great question! Let me help you explore that concept further.",
  "I can assist you with coding, learning new technologies, or planning your next project.",
  "Interesting! Here's what I think about that approach...",
  "Let's break that down step by step to make it easier to understand.",
  "I'd be happy to help you solve that problem. Here's my suggestion...",
];

const Index = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello! I'm your GVP Assistant. I'm here to help students and developers with their projects. How can I assist you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef(null);

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("gvp-chat-history");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem("gvp-chat-history", JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      content: input,
      isBot: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate API call
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearHistory = () => {
    setMessages([{
      id: "1",
      content: "Hello! I'm your GVP Assistant. I'm here to help students and developers with their projects. How can I assist you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString(),
    }]);
    toast({
      title: "Chat cleared",
      description: "Your chat history has been cleared.",
    });
  };

  const newChat = () => {
    clearHistory();
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Effects */}
      <FloatingParticles />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-20 px-4 h-screen flex flex-col">
        {/* Hero Section */}
        <motion.div 
          className="text-center py-8 md:py-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Build Something GVP ✨
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your AI Assistant for Students and Developers
          </motion.p>
        </motion.div>

        {/* Chat Container */}
        <motion.div 
          className="flex-1 max-w-4xl mx-auto w-full flex flex-col"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Chat Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-foreground/90">Chat</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={newChat}
                className="glass-border hover:neon-glow-secondary"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                New Chat
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clearHistory}
                className="glass-border hover:neon-glow-accent"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 glass rounded-2xl p-6 mb-4 overflow-hidden">
            <ScrollArea 
              className="h-full scrollbar-neon pr-4" 
              ref={scrollAreaRef}
            >
              <AnimatePresence>
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    message={message.content}
                    isBot={message.isBot}
                    timestamp={message.timestamp}
                  />
                ))}
                {isTyping && <TypingIndicator />}
              </AnimatePresence>
            </ScrollArea>
          </div>

          {/* Input Area */}
          <motion.div 
            className="glass rounded-2xl p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary text-base py-3"
                  disabled={isTyping}
                />
              </div>
              <Button
                size="icon"
                variant="outline"
                className="glass-border hover:neon-glow-secondary shrink-0"
              >
                <Mic className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-primary hover:bg-primary/90 neon-glow shrink-0"
              >
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

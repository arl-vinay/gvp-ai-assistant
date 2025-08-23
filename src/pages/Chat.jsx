import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, RotateCcw, Trash2, Bot, User } from "lucide-react";
import { toast } from "sonner";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("gvp-chat-history");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Welcome message
      setMessages([
        {
          id: 1,
          type: "bot",
          content: "👋 Welcome to GVP Assistant! I'm here to help you with any questions or tasks. What can I assist you with today?",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    localStorage.setItem("gvp-chat-history", JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const mockApiResponses = [
    "That's a great question! I'd be happy to help you explore that topic further.",
    "Based on your query, here are some insights that might be useful...",
    "I understand what you're looking for. Let me break this down for you:",
    "Excellent point! Here's what I think about that:",
    "That's an interesting perspective. From my analysis:",
    "I can definitely assist with that. Here's my recommendation:",
  ];

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: "bot",
        content: mockApiResponses[Math.floor(Math.random() * mockApiResponses.length)],
        timestamp: new Date().toISOString(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        content: "Chat cleared! How can I help you today?",
        timestamp: new Date().toISOString(),
      },
    ]);
    toast.success("Chat history cleared");
  };

  const newChat = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        content: "👋 Starting a new conversation! What would you like to discuss?",
        timestamp: new Date().toISOString(),
      },
    ]);
    toast.success("New chat started");
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[calc(100vh-8rem)] flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-t-2xl p-6 border-b border-glass-border/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-gradient-primary neon-glow">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">GVP Assistant</h1>
                <p className="text-sm text-muted-foreground">
                  AI-powered conversational assistant
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={newChat}
                className="p-2 rounded-lg glass glass-hover glass-glow transition-all duration-300"
                title="New Chat"
              >
                <RotateCcw className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearChat}
                className="p-2 rounded-lg glass glass-hover glass-glow transition-all duration-300"
                title="Clear History"
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Messages */}
        <div className="flex-1 glass glass-glow overflow-hidden">
          <div className="h-full overflow-y-auto p-6 space-y-4 custom-scrollbar">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-3 max-w-[80%] ${
                      message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        message.type === "user"
                          ? "bg-gradient-primary neon-glow"
                          : "bg-gradient-secondary neon-glow-secondary"
                      }`}
                    >
                      {message.type === "user" ? (
                        <User className="w-5 h-5 text-primary-foreground" />
                      ) : (
                        <Bot className="w-5 h-5 text-secondary-foreground" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-3 rounded-2xl glass ${
                        message.type === "user"
                          ? "bg-chat-user/20 border-chat-user/30"
                          : "bg-chat-bot/20 border-chat-bot/30"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-secondary neon-glow-secondary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl glass bg-chat-bot/20 border-chat-bot/30">
                    <div className="typing-dots">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-b-2xl p-6 border-t border-glass-border/30"
        >
          <div className="flex items-end space-x-4">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="w-full bg-chat-input/50 border border-glass-border/50 rounded-xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 min-h-[48px] max-h-32"
                rows={1}
                disabled={isLoading}
              />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 bottom-2 p-2 rounded-lg glass glass-hover glass-glow transition-all duration-300"
                title="Voice Input"
              >
                <Mic className="w-4 h-4" />
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="p-3 rounded-xl bg-gradient-primary neon-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow"
            >
              <Send className="w-5 h-5 text-primary-foreground" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
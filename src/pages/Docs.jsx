import { motion } from "framer-motion";
import { Code, MessageSquare, Send, HelpCircle } from "lucide-react";

const Docs = () => {
  const codeExample = `// Send a message to GVP Assistant API
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-key'
  },
  body: JSON.stringify({
    message: "Hello, how can you help me today?",
    conversation_id: "unique-conversation-id"
  })
});

const data = await response.json();
console.log(data.response);`;

  const sampleResponse = `{
  "response": "Hello! I'm here to help you with any questions or tasks you have. What can I assist you with today?",
  "conversation_id": "unique-conversation-id",
  "timestamp": "2024-08-23T10:30:00Z",
  "tokens_used": 45
}`;

  const faqs = [
    {
      question: "How do I get started with the API?",
      answer: "Sign up for an API key through our dashboard, then use the /api/chat endpoint to send messages."
    },
    {
      question: "What's the rate limit for API calls?",
      answer: "Free tier allows 100 requests per hour. Pro tier increases this to 1000 requests per hour."
    },
    {
      question: "Can I use this in production?",
      answer: "Yes! Our API is production-ready with 99.9% uptime SLA and enterprise security features."
    },
    {
      question: "How much does the API cost?",
      answer: "Free tier includes 1000 messages per month. Pro plans start at $10/month for 10,000 messages."
    }
  ];

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
              Documentation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to integrate GVP Assistant into your applications
          </p>
        </motion.div>

        {/* Quick Start */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass glass-glow p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-primary neon-glow mr-4">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Quick Start</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>Get started with GVP Assistant API in just a few steps:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Sign up for an API key at our developer portal</li>
                <li>Make your first API call to the /api/chat endpoint</li>
                <li>Handle the response and display it to your users</li>
                <li>Implement conversation threading for context</li>
              </ol>
            </div>
          </div>
        </motion.section>

        {/* API Reference */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="glass glass-glow p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-secondary neon-glow-secondary mr-4">
                <Code className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">API Reference</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Send className="w-5 h-5 mr-2 text-primary" />
                  POST /api/chat
                </h3>
                <p className="text-muted-foreground mb-4">
                  Send a message to the AI assistant and receive a response.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Request Example:</h4>
                <div className="bg-background-secondary/50 border border-glass-border/30 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Response Example:</h4>
                <div className="bg-background-secondary/50 border border-glass-border/30 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm">
                    <code>{sampleResponse}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="glass glass-glow p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 neon-glow-accent mr-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="border border-glass-border/30 rounded-lg p-4 glass-hover"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <div className="glass glass-glow p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Need more help?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our support team or check out our community forums for additional assistance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold neon-glow hover:shadow-glow transition-all duration-300"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Docs;
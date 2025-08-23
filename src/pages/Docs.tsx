import { motion } from "framer-motion";
import { Code, MessageSquare, Book, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";

const Docs = () => {
  const sections = [
    {
      icon: MessageSquare,
      title: "Getting Started",
      content: `Welcome to GVP Assistant! Simply start typing your questions or requests in the chat interface. 
      The AI will respond with helpful information, code examples, and guidance tailored to your needs.`
    },
    {
      icon: Code,
      title: "API Usage",
      content: `Currently, GVP Assistant uses a chat-based interface. Future API endpoints will be available for developers.`
    },
    {
      icon: Book,
      title: "Best Practices",
      content: `For optimal results, be specific in your questions. Include context about your project, 
      programming language, and what you're trying to achieve.`
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      content: `Common questions and answers about using GVP Assistant effectively.`
    }
  ];

  const codeExample = `// Example chat API request (Future implementation)
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: "How do I implement authentication in React?",
    context: "building a web application"
  })
});

const data = await response.json();
console.log(data.reply);`;

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <FloatingParticles />
      <Navbar />
      
      <div className="pt-32 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Documentation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to make the most of GVP Assistant for your development projects.
            </p>
          </motion.div>

          {/* Quick Start */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="glass glass-border">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Quick Start Guide</CardTitle>
                <CardDescription>Get up and running in minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full text-xs flex items-center justify-center text-primary-foreground font-bold">1</span>
                    <p>Navigate to the chat interface on the homepage</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full text-xs flex items-center justify-center text-secondary-foreground font-bold">2</span>
                    <p>Type your question or describe what you need help with</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent rounded-full text-xs flex items-center justify-center text-accent-foreground font-bold">3</span>
                    <p>Press Enter or click Send to get your AI-powered response</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full text-xs flex items-center justify-center text-primary-foreground font-bold">4</span>
                    <p>Continue the conversation to refine and expand on the assistance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="glass glass-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Code Example */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <Card className="glass glass-border">
              <CardHeader>
                <CardTitle className="text-xl">API Example (Coming Soon)</CardTitle>
                <CardDescription>Future API integration example</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted/20 p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-foreground">{codeExample}</code>
                </pre>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <Card className="glass glass-border">
              <CardHeader>
                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">What can GVP Assistant help me with?</h3>
                  <p className="text-muted-foreground">GVP Assistant can help with coding problems, learning new technologies, project planning, debugging, and general development guidance.</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Is my chat history saved?</h3>
                  <p className="text-muted-foreground">Yes, your chat history is saved locally in your browser. You can clear it anytime using the "Clear" button in the chat interface.</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2 text-primary">How accurate are the responses?</h3>
                  <p className="text-muted-foreground">GVP Assistant strives to provide accurate and helpful information, but always verify important technical details with official documentation.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
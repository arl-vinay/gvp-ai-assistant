import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Features from "./pages/Features";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FloatingParticles from "./components/FloatingParticles";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/features" element={<Features />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster 
        position="top-right" 
        theme="dark"
        toastOptions={{
          style: {
            background: 'hsl(var(--glass) / 0.9)',
            border: '1px solid hsl(var(--glass-border) / 0.5)',
            backdropFilter: 'blur(20px)',
            color: 'hsl(var(--foreground))',
          }
        }}
      />
    </div>
  </BrowserRouter>
);

export default App;
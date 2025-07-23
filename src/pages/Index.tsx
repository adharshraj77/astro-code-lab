import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  // Smooth scroll behavior enhancement
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.5;
      
      // Parallax effect for background elements
      const heroElements = document.querySelectorAll('.hero-bg');
      heroElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.transform = `translateY(${rate}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-hidden">
      {/* Relaxing Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 bg-primary/10 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-secondary/10 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Gentle Geometric Shapes */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-1 h-20 bg-accent/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-16 h-1 bg-primary/20 rounded-full"
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section - Core Feature */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 border-t border-card-border bg-background-secondary/50"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-2xl font-orbitron font-bold text-gradient mb-2">
                Adharsh Raj Kavala
              </div>
              <div className="text-muted-foreground">
                Data Scientist • AI Developer • ML Engineer
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-muted-foreground text-sm">
                © 2024 Adharsh Raj Kavala. All rights reserved.
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                Built with React, Tailwind CSS & Framer Motion
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="mt-8 h-px bg-gradient-neon opacity-30"></div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
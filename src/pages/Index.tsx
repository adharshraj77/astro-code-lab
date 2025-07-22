import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
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
    <div className="min-h-screen bg-gradient-primary">
      {/* Navigation */}
      <Navigation />
      
      {/* Page Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section - Core Feature */}
        <Projects />
        
        {/* Certifications Section */}
        <Certifications />
        
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
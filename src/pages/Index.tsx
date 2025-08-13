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
      {/* Epic Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Morphing Gradient Orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-accent/20 via-primary/15 to-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.8, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 100, -50, 80, 0],
            y: [0, -80, 40, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-primary/25 via-accent/20 to-secondary/15 rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.2, 1, 1.4, 0.8],
            rotate: [360, 270, 180, 90, 0],
            x: [0, -120, 60, -90, 0],
            y: [0, 100, -70, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-secondary/20 via-accent/15 to-primary/25 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.3, 1, 1.1],
            rotate: [0, -90, -180, -270, -360],
            x: [0, 150, -80, 120, 0],
            y: [0, -60, 90, -40, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-4 h-20 bg-gradient-to-b from-accent/40 to-transparent rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 0.5, 1.2, 1],
            x: [0, 200, -100, 150, 0],
            y: [0, -150, 80, -200, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-4 bg-gradient-to-r from-primary/40 to-transparent rounded-full"
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1.4, 0.9, 1],
            x: [0, -180, 120, -220, 0],
            y: [0, 100, -160, 140, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Pulsing Energy Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 border border-accent/20 rounded-full"
          style={{ translateX: '-50%', translateY: '-50%' }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.8, 0, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 border border-primary/15 rounded-full"
          style={{ translateX: '-50%', translateY: '-50%' }}
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.6, 0, 0.6],
            rotate: [360, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
        />

        {/* Floating Data Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-accent/60' : i % 3 === 1 ? 'bg-primary/60' : 'bg-secondary/60'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -300, 0],
              x: [0, Math.random() * 200 - 100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Spiraling Data Streams */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-40 bg-gradient-to-b from-transparent via-accent/30 to-transparent rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${i * 120}deg)`,
              }}
              animate={{
                scaleY: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.3,
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section - Core Feature */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
        

        
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

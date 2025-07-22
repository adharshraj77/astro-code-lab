import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Database, Brain, BarChart3 } from 'lucide-react';

const Hero = () => {
  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle Data Science Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Data Science Icons */}
        <motion.div
          className="absolute top-1/4 left-1/6 text-primary/30"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Database size={32} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/5 text-secondary/30"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Brain size={28} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-1/5 text-accent/30"
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <BarChart3 size={30} />
        </motion.div>
        
        {/* Subtle dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name with Animated Entrance */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-inter font-bold mb-4"
          >
            <span className="text-gradient">Adharsh Raj Kavala</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-inter font-medium mb-6"
          >
            <span className="text-muted-foreground">Portfolio & Projects</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Explore my collection of{" "}
            <span className="text-primary font-semibold">machine learning</span>,{" "}
            <span className="text-secondary font-semibold">data analysis</span>, and{" "}
            <span className="text-accent font-semibold">AI projects</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={handleViewWork}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-200 hover:bg-primary/90"
            >
              Explore Projects
            </motion.button>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:border-primary/50 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:border-secondary/50 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:adharsh@example.com"
                className="p-3 border border-border rounded-lg hover:border-accent/50 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="text-muted-foreground text-sm mb-2">View portfolio below</div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} className="text-primary/70" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
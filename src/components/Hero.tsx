import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Database, Brain, BarChart3, Code2, TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 120,
        delay: 1.5
      }
    }
  };

  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Data Science Background */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0 0', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Enhanced Floating Data Science Icons */}
        <motion.div
          className="absolute top-1/4 left-1/6 text-primary/40"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            y: [0, -15, 0],
            rotateZ: [0, 10, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 1.5 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 1.5 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Database size={36} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/5 text-secondary/40"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            y: [0, -20, 0],
            rotateZ: [0, -15, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 2 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 2 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          <Brain size={32} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-1/5 text-accent/40"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            y: [0, -18, 0],
            rotateZ: [0, 8, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 2.5 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 2.5 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
            rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        >
          <BarChart3 size={34} />
        </motion.div>

        {/* Additional floating icons */}
        <motion.div
          className="absolute top-1/2 right-1/6 text-primary/30"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            y: [0, -12, 0],
            rotateZ: [0, -8, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 3 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 3 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 },
            rotateZ: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }
          }}
        >
          <Code2 size={28} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 text-secondary/30"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            y: [0, -14, 0],
            rotateZ: [0, 12, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 3.5 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 3.5 },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 },
            rotateZ: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }
          }}
        >
          <TrendingUp size={30} />
        </motion.div>

        <motion.div
          className="absolute top-3/4 left-1/3 text-accent/30"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            y: [0, -16, 0],
            rotateZ: [0, -10, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 4 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 4 },
            y: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 },
            rotateZ: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 }
          }}
        >
          <Zap size={26} />
        </motion.div>
        
        {/* Enhanced particle system */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 2, 0.5],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {/* Enhanced Name with Gradient Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-inter font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="text-gradient"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Adharsh Raj Kavala
            </motion.span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl font-inter font-medium mb-6"
          >
            <motion.span 
              className="text-muted-foreground"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Portfolio & Projects
            </motion.span>
          </motion.div>

          {/* Enhanced Tagline with Staggered Animation */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Explore my collection of{" "}
            <motion.span 
              className="text-primary font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              machine learning
            </motion.span>,{" "}
            <motion.span 
              className="text-secondary font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              data analysis
            </motion.span>, and{" "}
            <motion.span 
              className="text-accent font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AI projects
            </motion.span>.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={handleViewWork}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90 relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Explore Projects</span>
            </motion.button>
            
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
            >
              {[
                { icon: Github, href: "https://github.com", color: "primary" },
                { icon: Linkedin, href: "https://linkedin.com", color: "secondary" },
                { icon: Mail, href: "mailto:adharsh@example.com", color: "accent" }
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : "_blank"}
                  rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className={`p-3 border border-border rounded-lg hover:border-${color}/50 transition-all duration-300 group`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={20} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.div 
              className="text-muted-foreground text-sm mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              View portfolio below
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 12, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.2 }}
            >
              <ArrowDown size={18} className="text-primary/70" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
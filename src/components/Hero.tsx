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
      {/* Epic Enhanced Data Science Background */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {/* Multi-layered Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08), transparent 70%)
            `,
            backgroundSize: '50px 50px, 50px 50px, 300px 300px'
          }}
          animate={{
            backgroundPosition: ['0 0, 0 0, 0 0', '50px 50px, -50px -50px, 100px 100px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/6 left-1/12 w-12 h-12 border-2 border-primary/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 0.8, 1],
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/5 right-1/8 w-8 h-16 bg-gradient-to-b from-secondary/40 to-transparent rounded-full"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.5, 0.7, 1.2, 1],
            x: [0, -60, 40, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute bottom-1/6 left-1/4 w-10 h-10 bg-accent/30 rounded-full"
          animate={{
            scale: [0.5, 2, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [0, 80, -40, 0],
            y: [0, -60, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Enhanced Floating Data Science Icons with More Motion */}
        <motion.div
          className="absolute top-1/4 left-1/6 text-primary/50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: [1, 1.3, 0.9, 1.1, 1],
            rotate: [0, 45, -30, 15, 0],
            y: [0, -25, 10, -15, 0],
            x: [0, 15, -10, 20, 0],
            rotateZ: [0, 15, -10, 8, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 1.5 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 1.5 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotateZ: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Database size={42} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/5 text-secondary/50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: [1, 0.8, 1.4, 1],
            rotate: [0, -60, 30, 0],
            y: [0, -30, 15, -20, 0],
            x: [0, -20, 25, -15, 0],
            rotateZ: [0, -20, 12, -8, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 2 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 2 },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 },
            x: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 },
            rotateZ: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          <Brain size={38} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-1/5 text-accent/50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: [1, 1.2, 0.9, 1.3, 1],
            rotate: [0, 90, -45, 60, 0],
            y: [0, -25, 20, -18, 0],
            x: [0, 30, -15, 25, 0],
            rotateZ: [0, 12, -15, 10, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 2.5 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 2.5 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 },
            x: { duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 },
            rotateZ: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        >
          <BarChart3 size={40} />
        </motion.div>

        {/* More floating icons with complex animations */}
        <motion.div
          className="absolute top-1/2 right-1/6 text-primary/40"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: [1, 1.4, 0.8, 1.2, 1],
            rotate: [0, -120, 60, -30, 0],
            y: [0, -20, 25, -12, 0],
            x: [0, -25, 35, -20, 0],
            rotateZ: [0, -12, 18, -8, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 3 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 3 },
            y: { duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 },
            x: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 },
            rotateZ: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }
          }}
        >
          <Code2 size={34} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 text-secondary/40"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: [1, 0.9, 1.5, 1],
            rotate: [0, 75, -90, 45, 0],
            y: [0, -22, 18, -14, 0],
            x: [0, 40, -25, 30, 0],
            rotateZ: [0, 15, -20, 12, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 3.5 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 3.5 },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 },
            rotateZ: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }
          }}
        >
          <TrendingUp size={36} />
        </motion.div>

        <motion.div
          className="absolute top-3/4 left-1/3 text-accent/40"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: [1, 1.3, 0.7, 1.1, 1],
            rotate: [0, -150, 80, -60, 0],
            y: [0, -28, 22, -16, 0],
            x: [0, -35, 45, -25, 0],
            rotateZ: [0, -18, 25, -10, 0]
          }}
          transition={{ 
            scale: { type: "spring", damping: 15, stiffness: 120, delay: 4 },
            rotate: { type: "spring", damping: 15, stiffness: 120, delay: 4 },
            y: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 },
            x: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 },
            rotateZ: { duration: 17, repeat: Infinity, ease: "easeInOut", delay: 5 }
          }}
        >
          <Zap size={32} />
        </motion.div>

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/8 right-1/3 text-primary/35"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.6, 0.8],
            y: [0, -40, 20, 0],
            x: [0, 30, -20, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        >
          <motion.div className="w-6 h-6 border-2 border-current rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/8 left-1/8 text-secondary/35"
          animate={{
            rotate: [0, -360],
            scale: [1.2, 0.6, 1.8, 1.2],
            y: [0, 35, -25, 0],
            x: [0, -40, 30, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        >
          <motion.div className="w-4 h-8 bg-current rounded-lg" />
        </motion.div>
        
        {/* Dramatically Enhanced particle system */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-2 h-2 bg-primary/70' : 
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-secondary/60' :
              i % 4 === 2 ? 'w-1 h-1 bg-accent/80' :
              'w-3 h-3 bg-gradient-to-r from-primary/50 to-secondary/50'
            }`}
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              opacity: [0.1, 1, 0.3, 0.8, 0.1],
              scale: [0.3, 3, 1, 2.5, 0.3],
              y: [0, -80 - Math.random() * 40, 40, -60, 0],
              x: [0, Math.random() * 100 - 50, -Math.random() * 60, Math.random() * 80 - 40, 0],
              rotate: [0, 180, -90, 270, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          />
        ))}

        {/* Orbiting Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96"
          style={{ translateX: '-50%', translateY: '-50%' }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div
            className="absolute top-0 left-1/2 w-3 h-3 bg-primary/60 rounded-full"
            style={{ translateX: '-50%' }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 w-2 h-2 bg-secondary/60 rounded-full"
            style={{ translateX: '-50%' }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </motion.div>

        {/* Epic Meteorites */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`meteorite-${i}`}
            className="absolute w-2 h-8 bg-gradient-to-b from-orange-400/80 via-yellow-300/60 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 120 - 10}%`,
              top: `${Math.random() * 120 - 10}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [0, -300 - Math.random() * 200],
              y: [0, 200 + Math.random() * 150],
              opacity: [0, 1, 0.8, 0],
              scale: [0.5, 1.5, 1, 0.3],
              rotate: [0, 45 + Math.random() * 90],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 8,
            }}
          />
        ))}

        {/* Meteorite Trails */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute w-1 h-20 bg-gradient-to-b from-orange-300/50 via-yellow-200/30 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 110}%`,
              top: `${Math.random() * 110}%`,
              rotate: -45,
            }}
            animate={{
              x: [50, -400],
              y: [0, 300],
              opacity: [0, 0.8, 0.4, 0],
              scaleY: [0.5, 2, 1.5, 0.2],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 6,
            }}
          />
        ))}

        {/* Epic Spaceships */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`spaceship-${i}`}
            className="absolute flex items-center"
            style={{
              left: `${-10 + Math.random() * 10}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              x: [0, window.innerWidth + 100],
              y: [0, (Math.random() - 0.5) * 100],
              rotate: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          >
            {/* Spaceship Body */}
            <motion.div
              className="w-8 h-3 bg-gradient-to-r from-blue-400/70 to-blue-600/70 rounded-full relative"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Spaceship Glow */}
              <motion.div
                className="absolute inset-0 bg-blue-400/30 rounded-full blur-sm scale-150"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1.2, 1.8, 1.2],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Engine Trail */}
              <motion.div
                className="absolute right-full top-1/2 w-6 h-1 bg-gradient-to-l from-cyan-400/80 to-transparent rounded-full"
                style={{ translateY: '-50%' }}
                animate={{
                  scaleX: [0.8, 1.5, 0.8],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* UFO Spaceships */}
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={`ufo-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 40}%`,
            }}
            animate={{
              x: [0, -50, 50, 0],
              y: [0, -20, 20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            {/* UFO Body */}
            <motion.div
              className="w-6 h-3 bg-gradient-to-b from-purple-400/60 to-purple-600/60 rounded-full relative"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* UFO Dome */}
              <motion.div
                className="absolute -top-1 left-1/2 w-3 h-2 bg-gradient-to-b from-purple-300/70 to-transparent rounded-full"
                style={{ translateX: '-50%' }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* UFO Beam */}
              <motion.div
                className="absolute top-full left-1/2 w-1 h-12 bg-gradient-to-b from-purple-400/60 to-transparent"
                style={{ translateX: '-50%' }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scaleY: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 2,
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Pulsing Energy Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border border-accent/25 rounded-full"
          style={{ translateX: '-50%', translateY: '-50%' }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0, 0.8],
            rotate: [0, 180],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 border border-primary/20 rounded-full"
          style={{ translateX: '-50%', translateY: '-50%' }}
          animate={{
            scale: [1, 4, 1],
            opacity: [0.6, 0, 0.6],
            rotate: [360, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-secondary/15 rounded-full"
          style={{ translateX: '-50%', translateY: '-50%' }}
          animate={{
            scale: [1, 5, 1],
            opacity: [0.4, 0, 0.4],
            rotate: [0, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeOut",
            delay: 4,
          }}
        />
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

            <motion.button
              onClick={() => window.open('/portfolio', '_blank')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-semibold rounded-lg transition-all duration-300 hover:opacity-90 relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">View Portfolio</span>
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
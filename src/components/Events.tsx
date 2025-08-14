import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, Zap, Brain, Code, Award } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "AI/ML Hackathon 2024",
      date: "March 15-17, 2024",
      location: "Tech Hub, Bangalore",
      description: "Built an AI-powered healthcare diagnosis system using deep learning",
      achievement: "1st Place Winner",
      type: "hackathon",
      tags: ["AI", "Healthcare", "Deep Learning"],
      image: "/project-images/fraud.jpg", // Placeholder - you can replace with actual event images
      icon: Trophy
    },
    {
      id: 2,
      title: "Data Science Conference 2024",
      date: "February 8-9, 2024",
      location: "Convention Center, Delhi",
      description: "Presented research on advanced ML algorithms for financial fraud detection",
      achievement: "Best Paper Award",
      type: "conference",
      tags: ["Machine Learning", "Finance", "Research"],
      image: "/project-images/sentiment.jpg",
      icon: Award
    },
    {
      id: 3,
      title: "Tech Innovation Summit",
      date: "January 20, 2024",
      location: "IIT Mumbai",
      description: "Showcased computer vision project for autonomous vehicle navigation",
      achievement: "Innovation Excellence",
      type: "summit",
      tags: ["Computer Vision", "Autonomous Systems"],
      image: "/project-images/yolo.jpg",
      icon: Zap
    },
    {
      id: 4,
      title: "AI Ethics Workshop",
      date: "December 12, 2023",
      location: "Virtual Event",
      description: "Participated in discussions on responsible AI development and bias mitigation",
      achievement: "Certified Participant",
      type: "workshop",
      tags: ["AI Ethics", "Bias Mitigation", "Responsible AI"],
      image: "/project-images/recommender.jpg",
      icon: Brain
    },
    {
      id: 5,
      title: "Open Source Contribution Day",
      date: "November 25, 2023",
      location: "GitHub Campus, San Francisco",
      description: "Contributed to major ML libraries and collaborated with global developers",
      achievement: "Top Contributor",
      type: "contribution",
      tags: ["Open Source", "Collaboration", "ML Libraries"],
      image: "/project-images/stock.jpg",
      icon: Code
    },
    {
      id: 6,
      title: "Student Developer Meet",
      date: "October 14, 2023",
      location: "NIT Warangal",
      description: "Mentored junior students in AI/ML and shared industry insights",
      achievement: "Mentor Recognition",
      type: "meetup",
      tags: ["Mentoring", "Community", "Knowledge Sharing"],
      image: "/project-images/fifa.jpg",
      icon: Users
    }
  ];

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      rotateY: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="events" className="py-20 bg-background-secondary/30 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-primary/20' : i % 3 === 1 ? 'bg-secondary/20' : 'bg-accent/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-orbitron font-bold mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-gradient">Events & Achievements</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hackathons, conferences, and community events where I've contributed to the AI/ML ecosystem
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={event.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                animate="float"
                className="group relative"
                style={{
                  perspective: '1000px'
                }}
              >
                <motion.div
                  variants={floatingVariants}
                  className="bg-card border border-card-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Floating Icon */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent size={20} />
                    </motion.div>

                    {/* Achievement Badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-accent-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {event.achievement}
                    </motion.div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {event.title}
                    </motion.h3>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </motion.div>
                    </div>
                    
                    <motion.p 
                      className="text-muted-foreground text-sm mb-4 line-clamp-3"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {event.description}
                    </motion.p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-md border border-secondary/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.1 + tagIndex * 0.05 + 0.7,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "hsl(var(--secondary) / 0.3)"
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Glowing border effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-muted-foreground mb-6"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Want to collaborate or invite me to your next event?
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.span
              className="relative z-10"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Get In Touch
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
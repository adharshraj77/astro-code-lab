import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface Certification {
  id: string;
  title: string;
  platform: string;
  date: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
  image?: string;
}

const Certifications = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const certifications: Certification[] = [
    {
      id: "ml-specialization",
      title: "Machine Learning Specialization",
      platform: "Coursera - Stanford University",
      date: "March 2024",
      description: "Comprehensive machine learning course covering supervised learning, unsupervised learning, and reinforcement learning. Implemented algorithms from scratch and worked on real-world projects.",
      skills: ["Machine Learning", "Python", "Neural Networks", "Deep Learning", "TensorFlow"],
      certificateUrl: "https://coursera.org/certificate/example"
    },
    {
      id: "dl-specialization", 
      title: "Deep Learning Specialization",
      platform: "Coursera - deeplearning.ai",
      date: "January 2024",
      description: "In-depth study of deep learning architectures including CNNs, RNNs, and Transformers. Built and deployed deep learning models for computer vision and NLP tasks.",
      skills: ["Deep Learning", "CNN", "RNN", "Transformers", "Keras", "PyTorch"],
      certificateUrl: "https://coursera.org/certificate/example"
    },
    {
      id: "aws-ml",
      title: "AWS Machine Learning Specialty",
      platform: "Amazon Web Services",
      date: "December 2023",
      description: "Cloud-based machine learning certification covering AWS ML services, model deployment, and MLOps practices. Hands-on experience with SageMaker, Lambda, and other AWS services.",
      skills: ["AWS", "SageMaker", "MLOps", "Cloud Computing", "Model Deployment"],
      certificateUrl: "https://aws.amazon.com/certificate/example"
    },
    {
      id: "data-science",
      title: "Professional Data Science Certificate",
      platform: "IBM - Coursera",
      date: "October 2023",
      description: "Complete data science program covering data analysis, visualization, machine learning, and statistical modeling. Worked with real datasets and industry-standard tools.",
      skills: ["Data Science", "Python", "R", "SQL", "Jupyter", "Statistical Analysis"],
      certificateUrl: "https://coursera.org/certificate/example"
    },
    {
      id: "tensorflow",
      title: "TensorFlow Developer Certificate",
      platform: "Google",
      date: "September 2023",
      description: "Demonstrated proficiency in building and training neural networks using TensorFlow. Covered computer vision, natural language processing, and time series forecasting.",
      skills: ["TensorFlow", "Neural Networks", "Computer Vision", "NLP", "Model Optimization"],
      certificateUrl: "https://tensorflow.org/certificate/example"
    }
  ];

  const toggleExpand = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="certifications" className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient">Certifications & Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        {/* Certifications List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover:glow-primary transition-all duration-300"
            >
              {/* Card Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(cert.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 bg-primary/20 rounded-lg glow-primary group-hover:pulse-glow">
                      <Award size={24} className="text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-orbitron font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <span className="text-secondary font-medium">
                          {cert.platform}
                        </span>
                        <span className="hidden sm:block text-muted-foreground">•</span>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          {cert.date}
                        </div>
                      </div>
                      
                      {/* Skills Preview */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-3 py-1 text-xs bg-muted/20 text-muted-foreground rounded-full">
                            +{cert.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {cert.certificateUrl && (
                      <motion.a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass-card rounded-lg hover:glow-secondary transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 glass-card rounded-lg hover:glow-primary transition-all duration-300"
                    >
                      {expandedCard === cert.id ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedCard === cert.id ? 'auto' : 0,
                  opacity: expandedCard === cert.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-card-border">
                  <div className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {cert.description}
                    </p>
                    
                    {/* All Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-3">Skills & Technologies Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full glow-accent hover:bg-accent/30 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate Link */}
                    {cert.certificateUrl && (
                      <motion.a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-neon text-background font-semibold rounded-lg glow-primary hover:shadow-xl transition-all duration-300"
                      >
                        <Award size={18} />
                        View Certificate
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
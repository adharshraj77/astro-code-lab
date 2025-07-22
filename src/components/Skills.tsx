import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Brain, 
  Eye, 
  MessageSquare, 
  Cloud, 
  Rocket, 
  BarChart3,
  Settings,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      icon: <Code size={24} />,
      color: "primary",
      skills: ["Python", "R", "SQL", "Excel", "Git", "Linux"]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={24} />,
      color: "secondary", 
      skills: ["Scikit-learn", "XGBoost", "Random Forest", "SVM", "Clustering"]
    },
    {
      title: "Deep Learning",
      icon: <Zap size={24} />,
      color: "accent",
      skills: ["TensorFlow", "Keras", "PyTorch", "CNN", "RNN", "Transformers"]
    },
    {
      title: "Computer Vision",
      icon: <Eye size={24} />,
      color: "primary",
      skills: ["OpenCV", "YOLOv5", "Image Processing", "Object Detection"]
    },
    {
      title: "NLP",
      icon: <MessageSquare size={24} />,
      color: "secondary",
      skills: ["NLTK", "HuggingFace", "spaCy", "Sentiment Analysis", "LLMs"]
    },
    {
      title: "Data & Visualization",
      icon: <BarChart3 size={24} />,
      color: "accent",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau"]
    },
    {
      title: "Cloud & Big Data",
      icon: <Cloud size={24} />,
      color: "primary",
      skills: ["AWS", "Google Colab", "Docker", "Spark", "Hadoop"]
    },
    {
      title: "Deployment",
      icon: <Rocket size={24} />,
      color: "secondary",
      skills: ["Flask", "Streamlit", "Gradio", "Vercel", "Netlify", "Heroku"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-background-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions across the data science spectrum
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-card p-6 rounded-xl group hover:scale-105 transition-all duration-300"
            >
              <div className={`mb-4 p-3 rounded-lg inline-block glow-${category.color} group-hover:pulse-glow`}>
                <div className={`text-${category.color}`}>
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-orbitron font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
                  >
                    • {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "10+", label: "Technologies Mastered" },
            { number: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card p-8 rounded-xl">
              <div className="text-4xl font-orbitron font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
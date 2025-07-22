import { motion } from 'framer-motion';
import { X, Github, ExternalLink, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentNotebook, setCurrentNotebook] = useState(0);

  const getTagColor = (tag: string) => {
    const colors = {
      "ML": "primary",
      "DL": "secondary", 
      "NLP": "accent",
      "CV": "primary",
      "Notebook": "secondary",
      "Deployed": "accent",
      "Classification": "primary",
      "Clustering": "secondary",
      "Time Series": "accent",
      "Recommendation": "primary"
    };
    return colors[tag as keyof typeof colors] || "primary";
  };

  const handleNextNotebook = () => {
    if (project.notebooks && currentNotebook < project.notebooks.length - 1) {
      setCurrentNotebook(currentNotebook + 1);
    }
  };

  const handlePrevNotebook = () => {
    if (currentNotebook > 0) {
      setCurrentNotebook(currentNotebook - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="w-full max-w-6xl max-h-[90vh] glass-card rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-card-border">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-gradient mb-2">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-sm font-medium rounded-full bg-${getTagColor(tag)}/20 text-${getTagColor(tag)} glow-${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 glass-card rounded-lg hover:glow-primary transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-8">
              {/* Project Description */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-muted/20 text-muted-foreground rounded-lg border border-muted/30 hover:glow-secondary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Jupyter Notebooks */}
              {project.notebooks && project.notebooks.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-accent">
                      Interactive Notebooks ({currentNotebook + 1} of {project.notebooks.length})
                    </h3>
                    {project.notebooks.length > 1 && (
                      <div className="flex gap-2">
                        <button
                          onClick={handlePrevNotebook}
                          disabled={currentNotebook === 0}
                          className="p-2 glass-card rounded-lg hover:glow-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={handleNextNotebook}
                          disabled={currentNotebook === project.notebooks.length - 1}
                          className="p-2 glass-card rounded-lg hover:glow-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <iframe
                      src={project.notebooks[currentNotebook]}
                      width="100%"
                      height="600"
                      className="w-full rounded-xl border border-card-border glass-card"
                      title={`${project.title} - Notebook ${currentNotebook + 1}`}
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl border border-accent/30 glow-accent opacity-50" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2">
                    View the complete analysis and code implementation. 
                    <a 
                      href={project.notebooks[currentNotebook]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:glow-accent transition-all duration-300 ml-1"
                    >
                      Open in new tab →
                    </a>
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-card-border">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg hover:glow-primary transition-all duration-300"
                  >
                    <Github size={20} />
                    View Source Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg hover:glow-secondary transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    View Live Project
                  </motion.a>
                )}
                {project.notebooks && project.notebooks.length > 0 && (
                  <motion.a
                    href={project.notebooks[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg hover:glow-accent transition-all duration-300"
                  >
                    <FileText size={20} />
                    View Full Notebook
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
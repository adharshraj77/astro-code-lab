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
          <div className="flex flex-col md:flex-row h-[calc(100vh-160px)] overflow-hidden">
            {/* Notebook Section */}
            {project.notebooks && project.notebooks.length > 0 && (
              <div className="md:w-2/3 w-full h-full p-4 overflow-y-auto bg-card border-r border-card-border relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-accent">
                    Notebook ({currentNotebook + 1} of {project.notebooks.length})
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
                <iframe
                  src={project.notebooks[currentNotebook]}
                  width="100%"
                  height="100%"
                  className="w-full h-[80vh] md:h-[calc(100vh-220px)] rounded-xl border border-card-border glass-card"
                  title={`${project.title} - Notebook ${currentNotebook + 1}`}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  View in tab:
                  <a
                    href={project.notebooks[currentNotebook]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:glow-accent ml-1"
                  >
                    Open in new tab →
                  </a>
                </p>
              </div>
            )}

            {/* Info Section */}
            <div className="md:w-1/3 w-full h-full p-6 space-y-6 overflow-y-auto bg-background">
              <div>
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

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Overview</h3>
                <p className="text-muted-foreground">{project.longDescription}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
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

              <div className="flex flex-col gap-4 pt-4 border-t border-card-border">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-3 glass-card rounded-lg hover:glow-primary transition-all duration-300"
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
                    className="flex items-center gap-2 px-4 py-3 glass-card rounded-lg hover:glow-secondary transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    View Live Project
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
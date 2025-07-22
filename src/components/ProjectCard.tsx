import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
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

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 rounded-xl cursor-pointer group relative overflow-hidden"
      onClick={() => onClick(project)}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
      
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full glow-accent">
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="mb-6 aspect-video rounded-lg relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-orbitron font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 text-xs font-medium rounded-full bg-${getTagColor(tag)}/20 text-${getTagColor(tag)} glow-${getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded border border-muted/30"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded border border-muted/30">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 glass-card rounded-lg hover:glow-primary transition-all duration-300"
          >
            <Github size={18} />
          </motion.a>
        )}
        {project.live && (
          <motion.a
            href={project.live}
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
        {project.notebooks && project.notebooks.length > 0 && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 glass-card rounded-lg hover:glow-accent transition-all duration-300"
          >
            <FileText size={18} />
          </motion.div>
        )}
      </div>

      {/* Hover Glow Border */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 group-hover:glow-primary transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
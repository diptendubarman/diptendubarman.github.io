import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Filter } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { projects } from "~/data";
import type { Project } from "~/types/portfolio";

const categories = [
  "All",
  "Platform",
  "Security",
  "HR Tech",
  "Enterprise",
  "E-Commerce",
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const techList = project.technologies || [];
  const metricsList = project.metrics || [];

  return (
    <motion.div
      layout
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        layout: { type: "spring", stiffness: 300, damping: 30 },
      }}
      className="group bg-background rounded-xl border border-border overflow-hidden hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-medium text-cyan-500 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
          </div>
          {project.featured && (
            <Badge
              variant="secondary"
              className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-0 flex-shrink-0"
            >
              Featured
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {metricsList.map((metric, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-muted rounded-md text-foreground"
            >
              <ChevronRight className="w-3 h-3 text-cyan-500" />
              {metric}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {techList.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-accent text-muted-foreground rounded-md hover:text-foreground transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 border-t border-border bg-muted/30 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {techList.length} technologies
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-xs gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-xs gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const getFilteredProjects = () => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === activeCategory);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of scalable solutions built with modern technologies
          </p>
        </motion.div>

        {/* Filter Tabs with smooth indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <Filter className="w-4 h-4 text-muted-foreground mr-2" />
          <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-muted/50 rounded-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-cyan-500 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeCategory === category
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with smooth layout animations */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty state */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

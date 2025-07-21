import { motion } from "framer-motion";
import { type Project } from "../types";
interface ProjectCardProps {
  project: Project;
  index: number;
}
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card flex-1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      style={{ minHeight: "370px", display: "flex", flexDirection: "column" }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-purple-600/80 flex items-center justify-center">
          <span className="text-white text-lg font-semibold"> {project.title} </span>
        </div>
      </div>
      <div className="p-6 flex flex-col h-full">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-indigo-400 text-white text-sm rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Indicateur pour voir plus */}
        <div className="mt-auto text-center">
          <span className="text-indigo-600 font-medium text-sm">Cliquez pour voir les détails →</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

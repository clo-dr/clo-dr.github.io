import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { type Project } from "../types";
import projetsData from "../projets.json";

const Projects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { key: "all", label: "Tous", count: 0 },
    { key: "html", label: "HTML/CSS", count: 0 },
    { key: "wp", label: "WordPress", count: 0 },
    { key: "php", label: "PHP", count: 0 },
    { key: "js", label: "JavaScript", count: 0 },
    { key: "react", label: "React", count: 0 },
  ];

  useEffect(() => {
    // Transformer les données JSON en format Project
    const transformedProjects: Project[] = [];

    Object.entries(projetsData).forEach(([category, projects]) => {
      projects.forEach((project, index: number) => {
        transformedProjects.push({
          id: `${category}-${index}`,
          title: project.nameProject,
          description: project.description,
          technologies: project.techno,
          image: project.imageProject,
          link: project.gitLink !== "pas de git disponible" ? project.gitLink : undefined,
          category,
          details: {
            onDemand: project.onDemand,
            allImages: project.allImagesProjects,
          },
        });
      });
    });

    setAllProjects(transformedProjects);
    setFilteredProjects(transformedProjects);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter((project) => project.category === activeFilter));
    }
  }, [activeFilter, allProjects]);

  const getFilterCounts = () => {
    return filters.map((filter) => ({
      ...filter,
      count: filter.key === "all" ? allProjects.length : allProjects.filter((p) => p.category === filter.key).length,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mes Projets</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations récentes. Chaque projet reflète ma passion pour l'innovation et la qualité.
        </p>
      </motion.div>

      {/* Filtres */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {getFilterCounts().map((filter) => (
          <motion.button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === filter.key
                ? "gradient-button text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-indigo-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label} ({filter.count})
          </motion.button>
        ))}
      </motion.div>

      {/* Grille de projets */}
      <motion.div layout className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <Link className="project-link flex" key={project.id} to={`/project/${project.id}`}>
            <ProjectCard project={project} index={index} />
          </Link>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-gray-500 text-lg">Aucun projet trouvé pour cette catégorie.</p>
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-12">
        <p className="text-gray-600 text-lg">
          Vous avez un projet en tête ? <span className="text-indigo-600 font-semibold">Parlons-en ensemble !</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { type Project } from "../types";
import projetsData from "../projets.json";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!id) return;

    // Trouver le projet correspondant
    let foundProject: Project | null = null;

    Object.entries(projetsData).forEach(([category, projects]) => {
      projects.forEach((proj, index: number) => {
        if (`${category}-${index}` === id) {
          foundProject = {
            id: `${category}-${index}`,
            title: proj.nameProject,
            description: proj.description,
            technologies: proj.techno,
            image: proj.imageProject,
            link: proj.gitLink !== "pas de git disponible" ? proj.gitLink : undefined,
            category,
            details: {
              onDemand: proj.onDemand,
              allImages: proj.allImagesProjects,
            },
          };
        }
      });
    });

    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projet non trouvé</h1>
          <Link to="/projects" className="gradient-button inline-flex items-center space-x-2 text-white px-6 py-3 rounded-lg font-semibold">
            <ArrowLeft size={20} />
            <span>Retour aux projets</span>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = project.details?.allImages || [project.image];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Bouton retour */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-8">
        <Link to="/projects" className="inline-flex items-center space-x-2 text-indigo-600 hover:text-violet-700 transition-colors duration-200">
          <ArrowLeft size={20} />
          <span className="font-medium">Retour aux projets</span>
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Images à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-full flex flex-col"
        >
          {/* Image principale - 80% de la hauteur */}
          <div className="flex-1 mb-6 relative bg-white rounded-xl shadow-lg overflow-hidden" style={{ minHeight: "50vh", maxHeight: "60vh" }}>
            <img
              src={allImages[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-project.jpg";
              }}
            />
          </div>

          {/* Miniatures - 20% de l'espace avec marge en bas */}
          {allImages.length > 1 && (
            <div className="flex space-x-4 overflow-x-auto pb-6">
              {allImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === index ? "border-indigo-500 scale-105" : "border-gray-200 hover:border-indigo-300"
                    }`}
                  whileHover={{ scale: currentImageIndex === index ? 1.05 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={image} alt={`${project.title} ${index + 1}`} className="w-full h-full object-contain" />
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Contenu à droite */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="space-y-8">
          {/* En-tête du projet */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Demande client */}
          {project.details?.onDemand && (
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Demande du client</h3>
              <p className="text-gray-700 leading-relaxed">{project.details.onDemand}</p>
            </div>
          )}

          {/* Technologies utilisées */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="px-4 py-2 bg-indigo-400 text-white text-sm rounded-full font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Liens du projet */}
          <div className="flex flex-wrap gap-4">
            {project.link && (
              <motion.a
                href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button inline-flex items-center space-x-2 text-white px-6 py-3 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                <span>Voir le code</span>
              </motion.a>
            )}
          </div>
          {project.link !== "https://github.com/clo-dr/clo-dr.github.io" && (
            <span>(private repository: demander accès collaborators)</span>
          )}
          {/* Informations supplémentaires */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Informations</h3>
            <div className="space-y-2">
              <div>
                <span className="text-gray-600 font-medium">Catégorie:</span>
                <span className="ml-2 text-gray-900 capitalize">{project.category}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Status:</span>
                <span className="ml-2 text-green-600 font-semibold">Terminé</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

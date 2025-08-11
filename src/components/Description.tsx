import { motion } from "framer-motion";
import { Calendar, Code, GraduationCap, User, Briefcase } from "lucide-react";

const Description = () => {
  const personalInfo = {
    titre: "Développeuse Front-End",
    description: `Faisant suite à une reconversion professionnelle et passionnée par l'informatique en soif d'apprentissage et de curiosité. 
    Récemment diplômée, je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences.`,
  };

  const competences = {
    languages: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "C++"],
    paradigmes: ["Programmation Orientée Objet (POO)"],

    frameworksCSS: ["Bootstrap", "Tailwind"],
    frameworksJS: ["React", "React Native"],
    libraries: ["Redux", "Redux Persist", "React Router", "RTK Query", "Material UI", "Framer Motion", "React Bootstrap"],

    frontend: ["Vite", "Create React App", "Webpack", "Babel"],
    backend: ["Node.js", "Express"],

    api: ["REST API", "Axios", "JSON Web Token (JWT)"],

    baseDeDonnees: ["MongoDB", "SQL Server", "SQLite"],
    outilsBDD: ["phpMyAdmin", "Sequelize"],

    tests: ["Postman", "Jest", "Lighthouse"],
    gestionProjet: ["Trello", "Notion"],

    tools: ["Visual Studio Code"],
    gestionPaquets: ["npm", "dotenv"],

    webDesign: ["Figma", "Canvas"],
    schema: ["UML Diagrams", "Excalidraw"],

    systeme: ["Linux", "Windows", "MacOS"],
    outilsSysteme: ["Terminal Bash", "PowerShell"],
    virtualisation: ["VirtualBox", "Docker"],

    technologiesWeb: ["Web Components", "Custom Elements", "Shadow DOM"],
  };

  const diplomes = [
    {
      titre: "Développeur Wordpress",
      ecole: "Openclassrooms",
      annee: "2023",
      certification_france_competences: "Développeur intégrateur web / bac+2",
    },
    {
      titre: "Développeur Javascript react",
      ecole: "Openclassrooms",
      annee: "2025",
      certification_france_competences: "Concepteur logiciel / bac+4",
    }
  ];

  const technologies = [
    { name: "React", level: 65 },
    { name: "Angular", level: 20 },
    { name: "HTML, CSS", level: 70 },
    { name: "Javascript, TypeScript", level: 40 },
    { name: "TailwindCSS, Bootstrap", level: 65 },
    { name: "Node, Express", level: 30 },
    { name: "MongoDB, SQLite, JsonServer", level: 45 },
    { name: "TailwindCSS, CSS", level: 65 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">À Propos de Moi</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez mon parcours, mes compétences et ma passion pour le développement web</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Informations personnelles */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-violet-400 rounded-lg flex items-center justify-center mr-4">
              <User className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Profil</h2>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-gray-600 font-medium">Titre:</span>
              <p className="blurImg text-lg font-bold">{personalInfo.titre}</p>
            </div>

            <div>
              <span className="text-gray-600 font-medium">Description:</span>
              <p className="text-gray-700 leading-relaxed mt-2">{personalInfo.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Compétences techniques */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-indigo-400 rounded-lg flex items-center justify-center mr-4">
              <Code className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Compétences</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Niveaux de maîtrise</h3>
              <div className="space-y-4">
                {technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{tech.name}</span>
                      <span className="text-gray-600">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="progress-bar h-2 rounded-full"
                        style={{ width: `${tech.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        {/* Carte 1 : Languages, Paradigmes, Frameworks CSS/JS, Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-violet-400 rounded-lg flex items-center justify-center mr-4">
              <Code className="text-white" size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Languages & Frameworks</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Languages:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.languages.map((item) => (
                  <span key={item} className="px-3 py-1 bg-indigo-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Paradigmes:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.paradigmes.map((item) => (
                  <span key={item} className="px-3 py-1 bg-violet-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Frameworks CSS:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.frameworksCSS.map((item) => (
                  <span key={item} className="px-3 py-1 bg-purple-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Frameworks JS:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.frameworksJS.map((item) => (
                  <span key={item} className="px-3 py-1 bg-pink-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Libraries:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.libraries.map((item) => (
                  <span key={item} className="px-3 py-1 bg-rose-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carte 2 : Frontend, Backend, API, BDD, Outils BDD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-indigo-400 rounded-lg flex items-center justify-center mr-4">
              <Briefcase className="text-white" size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Backend & API</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Frontend Tools:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.frontend.map((item) => (
                  <span key={item} className="px-3 py-1 bg-blue-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Backend:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.backend.map((item) => (
                  <span key={item} className="px-3 py-1 bg-orange-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">API:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.api.map((item) => (
                  <span key={item} className="px-3 py-1 bg-cyan-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Base de données:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.baseDeDonnees.map((item) => (
                  <span key={item} className="px-3 py-1 bg-green-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Outils BDD:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.outilsBDD.map((item) => (
                  <span key={item} className="px-3 py-1 bg-emerald-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carte 3 : Outils, Design, Système, Technologies Web */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mr-4">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Outils & Système</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Dev Tools & Tests:</h3>
              <div className="flex flex-wrap gap-2">
                {[...competences.tools, ...competences.tests, ...competences.gestionPaquets].map((item) => (
                  <span key={item} className="px-3 py-1 bg-gray-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Design & Gestion:</h3>
              <div className="flex flex-wrap gap-2">
                {[...competences.webDesign, ...competences.gestionProjet, ...competences.schema].map((item) => (
                  <span key={item} className="px-3 py-1 bg-rose-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Système:</h3>
              <div className="flex flex-wrap gap-2">
                {[...competences.systeme, ...competences.outilsSysteme, ...competences.virtualisation].map((item) => (
                  <span key={item} className="px-3 py-1 bg-slate-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Technologies Web:</h3>
              <div className="flex flex-wrap gap-2">
                {competences.technologiesWeb.map((item) => (
                  <span key={item} className="px-3 py-1 bg-indigo-400 text-white text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Formation - Section en dessous */}
      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-indigo-400 rounded-lg flex items-center justify-center mr-4">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Formation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {diplomes.map((diplome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                className="border-l-4 border-gradient-to-b from-indigo-400 to-violet-400 pl-4 py-2"
                style={{ borderImage: "linear-gradient(to bottom, #6366f1, #a855f7) 1" }}
              >
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="text-indigo-600 mr-2" />
                  <span className="text-indigo-600 font-semibold text-sm">{diplome.annee}</span>
                </div>
                <p className="text-gray-500 text-sm">{diplome.ecole} :</p>
                <h3 className="text-lg font-semibold text-gray-700">{diplome.titre}</h3>
                <p className="text-gray-500 text-sm">Certification france compétences : </p>
                <p className="text-lg font-semibold text-gray-700">{diplome.certification_france_competences}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;

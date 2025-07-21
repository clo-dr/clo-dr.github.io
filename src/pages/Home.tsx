import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Home = () => {
  const skills = [
    { icon: Code, title: "Développement", description: "Applications web modernes" },
    { icon: Palette, title: "Design", description: "Interfaces utilisateur élégantes" },
    { icon: Rocket, title: "Performance", description: "Solutions optimisées" },
  ];

  return (
    <div className=" max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Développeuse
          <span className="blurImg block font-extrabold">Front-end</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Passionnée par la création d'expériences web exceptionnelles. Je transforme vos idées en solutions digitales innovantes.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/projects" className="gradient-button inline-flex items-center space-x-2 text-white px-8 py-3 rounded-lg font-semibold">
            <span>Voir mes projets</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-violet-400 rounded-lg flex items-center justify-center mb-4">
              <skill.icon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">À propos de moi</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Développeuse passionnée avec une expertise en technologies modernes. J'aime créer des solutions élégantes qui allient performance et design.
          Toujours en quête d'apprentissage et d'innovation.
        </p>
         <motion.a
              href="/description"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-violet-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
            </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirection vers mailto avec les informations du formulaire
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = `Contact Portfolio - ${name}`;
    const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:clocdr17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "clocdr17@gmail.com",
      link: "mailto:clocdr17@gmail.com",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Toulouse, France",
      link: "#",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contactez-moi</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une idée de projet ? Une question ? N'hésitez pas à me contacter. Je serais ravi d'échanger avec vous !
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-indigo-400 rounded-lg flex items-center justify-center">
                  <info.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 p-6 bg-indigo-50 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Disponibilité</h3>
            <p className="text-gray-600">Je suis actuellement disponible pour de nouveaux projets. Temps de réponse habituel : 24-48 heures.</p>
          </motion.div>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Décrivez votre projet ou votre message..."
                />
              </div>

              <motion.button
                type="submit"
                className="gradient-button w-full text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span>Envoyer le message</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

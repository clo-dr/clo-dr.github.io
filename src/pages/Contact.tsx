import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contactez-moi</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une idée de projet ? Une question ? N'hésitez pas à me contacter. Je serais ravi d'échanger avec vous !
        </p>
      </motion.div>

      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
        >
          <Mail className="text-indigo-500 mb-4" size={32} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Email</h2>
          <a href="mailto:clocdr17@gmail.com" className="text-indigo-600 text-lg font-semibold hover:underline mb-2">
            clocdr17@gmail.com
          </a>
          <div className="mt-4 text-gray-600">Toulouse, France</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

import { Link } from 'react-router-dom';
import { HomeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      
      {/* Animación del Icono */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        <ExclamationTriangleIcon className="h-32 w-32 text-blue-500 mb-6" />
      </motion.div>

      {/* Título Grande */}
      <motion.h1 
        className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        404
      </motion.h1>

      {/* Subtítulo */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-gray-700 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        ¡Ups! Página no encontrada
      </motion.h2>

      {/* Descripción */}
      <motion.p 
        className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Parece que la página que buscas se ha movido, eliminado o nunca existió. No te preocupes, puedes volver a navegar desde el inicio.
      </motion.p>

      {/* Botón de Regreso */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/inicio"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <HomeIcon className="w-6 h-6 mr-2" />
          Volver al Inicio
        </Link>
      </motion.div>

    </div>
  );
}
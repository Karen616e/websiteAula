import { useEffect, useState } from 'react';
import type { Clase } from '../data/clasesData';
import { XMarkIcon, DocumentTextIcon, LinkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

type ClaseModalProps = {
  clase: Clase;
  onClose: () => void;
};

const ClaseModal = ({ clase, onClose }: ClaseModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    // === BACKDROP ===
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* --- BOTÓN DE CERRAR (X) --- */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-white/80 rounded-full p-2 hover:bg-gray-100 transition-colors z-10 backdrop-blur-md"
          aria-label="Cerrar"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* --- CABECERA --- */}
        <div className="h-56 w-full relative">
            <img
                src={clase.imageUrl}
                alt={clase.title}
                className="w-full h-full object-cover rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-t-xl"></div>
            <h3 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white drop-shadow-lg leading-tight pr-16">
                {clase.title.toUpperCase()}
            </h3>
        </div>

        {/* --- CONTENIDO --- */}
        <div className="p-6 md:p-8">
          <h4 className="text-xl font-bold text-blue-700 mb-8 pb-4 border-b border-gray-200">
            {clase.fullTitle}
          </h4>

          <div className="space-y-8">
            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">🎯</span> Objetivo
              </h5>
              <p className="text-gray-700 leading-relaxed bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 text-md">
                {clase.objetivo}
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">📝</span> Resumen
              </h5>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-md px-2">
                {clase.resumen}
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">⏰</span> Horario
              </h5>
              <p className="text-gray-700 font-medium flex items-center bg-gray-100 p-4 rounded-md inline-block text-md">
                {clase.schedule}
              </p>
            </div>

            {/* === SECCIÓN DE BOTONES === */}
            {(clase.planUrl || clase.temarioPdfUrl || clase.websiteUrl) && (
              <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center md:justify-start">
                
                {clase.temarioPdfUrl && (
                  <a
                    href={clase.temarioPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2" />
                    Temario del Curso (PDF)
                  </a>
                )}

                {clase.planUrl && (
                  <a
                    href={clase.planUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    {clase.planUrl.toLowerCase().endsWith('.pdf') ? (
                        <DocumentTextIcon className="h-5 w-5 mr-2" />
                    ) : (
                        <LinkIcon className="h-5 w-5 mr-2" />
                    )}
                    Plan de la materia
                  </a>
                )}

                {clase.websiteUrl && (
                  <a
                    href={clase.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    <GlobeAltIcon className="h-5 w-5 mr-2" />
                    Página Web
                  </a>
                )}

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaseModal;
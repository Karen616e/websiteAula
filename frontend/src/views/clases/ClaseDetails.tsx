// src/views/clases/ClaseDetails.tsx
import { useNavigate, useParams } from "react-router-dom";
// 1. Importamos los datos de las clases
import clases from "../../data/clasesData"; 

// 2. (Opcional) Importa un icono para el temario
import { DocumentArrowDownIcon } from '@heroicons/react/20/solid';

const ClaseDetails = () => {
  const { slug } = useParams(); 
  const navigate = useNavigate();
  const foundClass = clases.find((cls) => cls.slug === slug);

  if (!foundClass) {
    return (
      <div className="text-center p-10">
        <h3 className="text-2xl font-semibold">Clase no encontrada</h3>
        <button 
          type="button" 
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Volver a Clases
        </button>
      </div>
    );
  } else {
    // 3. Mostramos la información en el nuevo formato
    return (
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Título completo */}
          <div className="mx-auto max-w-3xl text-left">
            <p className="mt-2 text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
              {foundClass.fullTitle}
            </p>
          </div>

          {/* Contenido de la clase */}
          <div className="mx-auto mt-10 max-w-3xl text-left text-lg text-gray-700">
            
            {/* Objetivo */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10">Objetivo</h2>
            <p className="mt-4 leading-relaxed">
              {foundClass.objetivo}
            </p>

            {/* Resumen */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10">Resumen</h2>
            <p className="mt-4 leading-relaxed whitespace-pre-line">
              {foundClass.resumen}
            </p>

            {/* Horario */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10">Horario</h2>
            <p className="mt-4 leading-relaxed">
              {foundClass.schedule}
            </p>

            {/* Temario (Opcional) */}
            {foundClass.temarioPdfUrl && (
              <div className="mt-12 text-center">
                <a 
                  href={foundClass.temarioPdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <DocumentArrowDownIcon className="h-24 w-24" />
                  <span className="text-lg font-semibold mt-2">
                    Temario del curso
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Botón de Volver */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate(-1)}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              type="button"
            >
              Volver a Clases
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ClaseDetails;
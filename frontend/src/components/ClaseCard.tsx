// src/components/ClaseCard.tsx
import type { Clase } from '../data/clasesData';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type ClaseCardProps = {
  clase: Clase;
  // Nueva prop: función que se ejecutará al hacer clic en la tarjeta
  onCardClick: () => void;
};

const ClaseCard = ({ clase, onCardClick }: ClaseCardProps) => {
  
  // Límite de caracteres para la descripción corta
  const shortDescription = clase.objetivo.length > 120
    ? clase.objetivo.substring(0, 120) + "..."
    : clase.objetivo;

  return (
    <div
      onClick={onCardClick} // Al hacer clic, ejecuta la función del padre
      className="group block rounded-xl shadow-md hover:shadow-xl overflow-hidden bg-white transition-all duration-300 cursor-pointer h-full flex flex-col transform hover:-translate-y-1"
    >
      {/* Sección Superior (Imagen con efecto zoom al hover) */}
      <div className="relative overflow-hidden h-56">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={clase.imageUrl}
          alt={clase.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"></div>
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-md">
             {clase.title.toUpperCase()}
        </h3>
      </div>

      {/* Sección Inferior (Contenido) */}
      <div className="p-6 text-left w-full flex flex-col flex-grow">
        
        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4 line-clamp-3">
          {shortDescription}
        </p>

        {/* Botón decorativo "Ver detalles" */}
        <div className="mt-auto text-right">
          <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
            Ver detalles
            <ArrowRightIcon className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClaseCard;
import { useState } from 'react';
import flyers from '../../data/intersemestralesData';
import FlyerModal from '../../components/FlyerModal';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

export default function Intersemestrales() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  //enlace de Google Forms
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf8wbU4AxyiOvwYdzRsFMIRwv1rTEmLWJvEooEvMk_tqk4Iiw/viewform?usp=sharing&ouid=108535944392267535103";

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Título y Descripción */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Oferta Académica</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Cursos Intersemestrales
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explora nuestra oferta de cursos intensivos diseñados para potenciar tus habilidades en periodos vacacionales. Haz clic en un cartel para ver los detalles.
          </p>

          {/* Botón de registro*/}
          <div className="mt-8 flex items-center justify-center">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all transform hover:scale-105"
            >
              <span>¡Inscríbete o solicita informes aquí!</span>
              <ArrowTopRightOnSquareIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* Grid de Flyers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flyers.map((flyer) => (
            <div 
              key={flyer.id}
              onClick={() => setSelectedImage(flyer.imageUrl)}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={flyer.imageUrl}
                alt={flyer.title}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay sutil al hacer hover con icono de "Ver" */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                 <span className="text-white opacity-0 group-hover:opacity-100 font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition-opacity">
                    Ver Detalles
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <FlyerModal 
            imageUrl={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}

      </div>
    </div>
  );
}
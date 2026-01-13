import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn'; // Asegúrate de que este archivo exista en la misma carpeta

interface MissionTextProps {
  title: string;
  content: string;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
  buttonText: string;
  buttonLink?: string;
  buttonClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  containerClassName?: string;
}

const MissionText: React.FC<MissionTextProps> = ({
  title,
  content,
  imageUrl,
  imagePosition = 'right',
  buttonText,
  buttonLink = "#",
  buttonClassName = "",
  titleClassName = "",
  contentClassName = "",
  containerClassName = ""
}) => {
  // Lógica para determinar el orden y los márgenes según la posición de la imagen
  const textContainerClasses = imagePosition === 'left' 
    ? 'lg:pr-10 lg:ml-0' 
    : 'lg:pl-10 lg:-mr-0';
  
  const imageContainerClasses = imagePosition === 'left' 
    ? 'lg:left-20' 
    : 'lg:right-20';
  
  const flexDirection = imagePosition === 'left' 
    ? 'lg:flex-row-reverse' 
    : 'lg:flex-row';

  return (
    <section className={`max-w-6xl mx-auto my-16 px-5 ${containerClassName}`}>
      <div className={`flex flex-col ${flexDirection} items-center justify-between relative`}>
        
        {/* --- ANIMACIÓN DEL TEXTO --- */}
        {/* Si la imagen va a la derecha, el texto entra desde la izquierda (y viceversa) */}
        <FadeIn 
          className={`w-full lg:w-1/2 z-10 ${textContainerClasses} order-2 lg:order-1`}
          direction={imagePosition === 'right' ? 'left' : 'right'}
          delay={0.2}
        >
          <div className="bg-gray-100 p-10 pl-30 pr-30 rounded-lg shadow-lg h-full">
            {title && (
              <h2 className={`text-2xl md:text-3xl font-semibold mb-5 text-blue-500 ${titleClassName}`}>
                {title}
              </h2>
            )}
            
            <p className={`text-base mb-6 ${contentClassName}`}>
              {content}
            </p>
            
            {buttonText && (
              <Link 
                to={buttonLink}
                className={`inline-block px-6 py-3 text-white font-medium rounded transition-colors ${buttonClassName || 'bg-blue-400 hover:bg-blue-500'}`}
              >
                {buttonText}
              </Link>
            )}
          </div>
        </FadeIn>
        
        {/* --- ANIMACIÓN DE LA IMAGEN --- */}
        {/* La imagen entra desde el lado opuesto al texto */}
        <FadeIn 
            className={`w-full lg:w-1/2 ${imageContainerClasses} order-1 mb-6 lg:mb-0 relative z-10`}
            direction={imagePosition === 'right' ? 'right' : 'left'}
            delay={0.4} // Un poco de retraso extra para efecto cascada
        >
            {/* Contenedor de la imagen: Fondo gris igual al texto, centrado flex */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 flex justify-center items-center h-full min-h-[300px]">
              <img 
                  src={imageUrl} 
                  alt="Illustration" 
                  // Tamaño controlado: altura fija, ancho automático para no deformar
                  className="h-56 lg:h-72 w-auto" 
              />
            </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default MissionText;
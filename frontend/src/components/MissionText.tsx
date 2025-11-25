import React from 'react';
import { Link } from 'react-router-dom';

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
        
        {/* Contenedor de texto (bg-gray-100) */}
        <div className={`w-full lg:w-1/2 bg-gray-100 p-10 pl-30 pr-30 rounded-lg shadow-lg z-10 
          ${textContainerClasses} order-2 lg:order-1`}>
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
        
        {/* Contenedor de imagen */}
        {/* CAMBIO AQUÍ: Se cambió bg-white por bg-gray-100 */}
        <div className={`w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg bg-gray-100 flex justify-center items-center
          ${imageContainerClasses} order-1 mb-6 lg:mb-0 relative z-10`}>
          <img 
            src={imageUrl} 
            alt="Illustration" 
            className="h-56 lg:h-72 w-auto" 
          />
        </div>
      </div>
    </section>
  );
};

export default MissionText;
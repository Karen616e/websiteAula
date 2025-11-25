import { CalendarIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon, BeakerIcon, WifiIcon } from '@heroicons/react/24/outline';

export default function Inauguracion() {
  // Array de imágenes para la galería (Reemplaza con las rutas reales)
  const galleryImages = [
    "/events/inauguracion/inc2.jpeg",
    "/events/inauguracion/inc3.png",
    "/events/inauguracion/inc4.jpeg",
  ];

  return (
    // Fondo gris claro
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      
      {/* Contenedor principal blanco */}
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden">
        
        <div className="p-8 md:p-12 text-center">
          
          {/* Título pequeño azul */}
          <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Evento Destacado
          </h3>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Inauguración del Aula Híbrida
          </h1>
          
          {/* Descripción */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            El Aula Cisco es la primera en su tipo dentro de la UNAM, marcando un hito en la educación híbrida.
          </p>

          {/* Información clave (Fecha, Lugar, Asistentes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200 py-8 mb-10">
            
            {/* Fecha */}
            <div className="flex flex-col items-center">
              <CalendarIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Fecha</h4>
              <p className="text-gray-600">8 de Junio de 2022</p>
            </div>

            {/* Lugar */}
            <div className="flex flex-col items-center md:border-l md:border-r border-gray-200">
              <MapPinIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Lugar</h4>
              <p className="text-gray-600">Anexo de la Facultad de Ingeniería</p>
            </div>

            {/* Asistentes (Usamos un icono de grupo) */}
            <div className="flex flex-col items-center">
              <UserGroupIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Asistentes</h4>
              <p className="text-gray-600">Autoridades de la UNAM y Cisco</p>
            </div>
          </div>

          {/* Imagen Principal del Evento (Corte de listón) */}
          {/* IMPORTANTE: Reemplaza la ruta por la de tu imagen principal */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-md">
            <img 
              src="/events/inauguracion/inc1.jpeg" 
              alt="Corte de listón en la inauguración del Aula Híbrida" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Sección "Lo que puedes esperar" */}
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Lo que puedes esperar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
            
            {/* Columna 1: Educación Híbrida Pionera */}
            <div className="flex flex-col items-start">
              <div className="bg-blue-500 p-3 rounded-lg mb-4 text-white">
                <AcademicCapIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Educación Híbrida Pionera</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                La UNAM, a través de su Facultad de Ingeniería, inaugura el Aula Cisco, un espacio pionero para la Educación Híbrida, desarrollando nuevos recursos pedagógicos y tecnológicos.
              </p>
            </div>

            {/* Columna 2: Laboratorio de Innovación */}
            <div className="flex flex-col items-start">
              <div className="bg-blue-500 p-3 rounded-lg mb-4 text-white">
                <BeakerIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratorio de Innovación</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Además de su uso para clases, el aula funcionará como un laboratorio potente para que estudiantes y profesores aprendan sobre programación e interactúen directamente con tecnología de punta.
              </p>
            </div>

            {/* Columna 3: Tecnología de Vanguardia */}
            <div className="flex flex-col items-start">
              <div className="bg-blue-500 p-3 rounded-lg mb-4 text-white">
                <WifiIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tecnología de Vanguardia</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Equipada con soluciones de colaboración, ciberseguridad y conectividad de Cisco, gracias al apoyo del programa de aceleración digital para el país, Cisco CDA.
              </p>
            </div>
          </div>

          {/* Sección "Galería del Evento" */}
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Galería del Evento
          </h2>

          {/* Grid de Imágenes de la Galería */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((imgSrc, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src={imgSrc} 
                  alt={`Galería del evento ${index + 1}`} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
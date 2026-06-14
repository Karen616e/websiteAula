import { CalendarIcon, ClockIcon, MapPinIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function AlgoRand() {
  return (
    // Fondo gris claro
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      
      {/* Contenedor principal blanco (tipo tarjeta) */}
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl overflow-hidden">
        
        <div className="p-8 md:p-12 text-center">
          
          {/* Título pequeño azul */}
          <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Workshop Introductorio
          </h3>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blockchain con Algorand
          </h1>
          
          {/* Descripción */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Un evento diseñado para que aprendas todo sobre la tecnología blockchain y las criptomonedas de la mano de expertos en Algorand. ¡No necesitas experiencia previa!
          </p>

          {/* Información clave (Fecha, Horario, Lugar) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200 py-8 mb-10">
            
            {/* Fecha */}
            <div className="flex flex-col items-center">
              <CalendarIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Fecha</h4>
              <p className="text-gray-600">4 de Junio</p>
            </div>

            {/* Horario */}
            <div className="flex flex-col items-center md:border-l md:border-r border-gray-200">
              <ClockIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Horario</h4>
              <p className="text-gray-600">16:00 a 18:00 horas</p>
            </div>

            {/* Lugar */}
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Lugar</h4>
              {/* 'whitespace-pre-line' para respetar el salto de línea si es necesario */}
              <p className="text-gray-600 whitespace-pre-line">Laboratorio Microsoft de IA, UNAM</p>
            </div>
          </div>

          {/* Imagen del Banner */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-md">
            <img 
              src="/events/algorand/algoRand.png" 
              alt="Banner del Workshop de Algorand" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Sección "Lo que puedes esperar" */}
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Lo que puedes esperar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            
            {/* Columna 1 */}
            <div className="flex items-start">
              <div className="bg-blue-500 p-3 rounded-lg mr-4 text-white shrink-0">
                {/* Icono de línea de comandos/código */}
                <CommandLineIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inmersión en Blockchain</h3>
                <p className="text-gray-600 leading-relaxed">
                  Este workshop te brindará la oportunidad de sumergirte en el fascinante mundo de la tecnología blockchain, las criptomonedas y, en particular, Algorand. Aprenderás los conceptos fundamentales y cómo esta tecnología está revolucionando diversos sectores.
                </p>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="flex items-start">
              <div className="bg-blue-500 p-3 rounded-lg mr-4 text-white shrink-0">
                {/* Icono de cohete */}
                <RocketLaunchIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Explora el Futuro Tecnológico</h3>
                <p className="text-gray-600 leading-relaxed">
                  ¡No te pierdas esta increíble oportunidad! Descubre el potencial de la tecnología blockchain con Algorand. Regístrate ahora y asegura tu lugar en este evento imprescindible para quienes buscan explorar el futuro de la tecnología.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
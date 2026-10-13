import { CalendarIcon, ClockIcon, MapPinIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function AlgoDay() {
  return (
    // Fondo gris claro de la página
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      
      {/* Contenedor principal blanco (tipo tarjeta) */}
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl overflow-hidden">
        
        <div className="p-8 md:p-12 text-center">
          
          {/* Título pequeño azul */}
          <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Aprende desarrollo de software moderno
          </h3>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Curso JavaScript y TypeScript 
          </h1>
          
          {/* Descripción */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            ¿Te interesa aprender a programar o mejorar tus habilidades como desarrollador? Este curso està deseñado para que aprendas JavaScript y TypeScript construyendo cosas reales, desde el navegador hasta servidores.
          </p>

          {/* Información clave (Fecha, Horario, Lugar) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200 py-8 mb-10">
            
            {/* Fecha */}
            <div className="flex flex-col items-center">
              <CalendarIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Fecha</h4>
              <p className="text-gray-600">28 de Agosto de 2026 a 20 de Noviembre de 2026</p>
            </div>

            {/* Horario */}
            <div className="flex flex-col items-center md:border-l md:border-r border-gray-200">
              <ClockIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Horario</h4>
              <p className="text-gray-600">15:00 a 17:00</p>
            </div>

            {/* Lugar */}
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Lugar</h4>
              <p className="text-gray-600">UNAM - Aula Cisco</p>
            </div>
          </div>

          {/* Imagen del Banner */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-md">
            <img 
              src="/events/JavaScript/Java.png" 
              alt="Banner del evento AlgoDay" 
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
                <CodeBracketIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">De Cero a Desarrollador</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un camino estructurado y progresivo. Sin importar tu nivel inicial, terminarás con las habilidades necesarias para crear software moderno.
                </p>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="flex items-start">
              <div className="bg-blue-500 p-3 rounded-lg mr-4 text-white shrink-0">
                <AcademicCapIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Resolución de Problemas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Desarrollarás el pensamiento lógico y las técnicas de depuración necesarias para enfrentar y resolver desafíos técnicos del mundo real.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
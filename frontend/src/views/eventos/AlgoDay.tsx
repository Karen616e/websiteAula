import { CalendarIcon, ClockIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function AlgoDay() {
  return (
    // Fondo gris claro de la página
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      
      {/* Contenedor principal blanco (tipo tarjeta) */}
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl overflow-hidden">
        
        <div className="p-8 md:p-12 text-center">
          
          {/* Título pequeño azul */}
          <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            ciclo de innovación y tecnología
          </h3>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AlgoDay
          </h1>
          
          {/* Descripción */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Un espacio de aprendizaje diseñado para ofrecer una experiencia educativa de alta calidad, combinando lo mejor de la enseñanza presencial y en línea para explorar el futuro de la tecnología blockchain.
          </p>

          {/* Información clave (Fecha, Horario, Lugar) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200 py-8 mb-10">
            
            {/* Fecha */}
            <div className="flex flex-col items-center">
              <CalendarIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Fecha</h4>
              <p className="text-gray-600">16 de Agosto</p>
            </div>

            {/* Horario */}
            <div className="flex flex-col items-center md:border-l md:border-r border-gray-200">
              <ClockIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Horario</h4>
              <p className="text-gray-600">09:00 a 18:00</p>
            </div>

            {/* Lugar */}
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Lugar</h4>
              <p className="text-gray-600">UNAM - Aula Magna</p>
            </div>
          </div>

          {/* Imagen del Banner */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-md">
            <img 
              src="/events/algoday/algoDay.jpeg" 
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
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Charlas y Paneles de Alto Impacto</h3>
                <p className="text-gray-600 leading-relaxed">
                  Disfruta de presentaciones tipo TEDx y paneles de discusión que te proporcionarán una visión completa de los desafíos, aprendizajes y experiencias en este apasionante campo.
                </p>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="flex items-start">
              <div className="bg-blue-500 p-3 rounded-lg mr-4 text-white shrink-0">
                <UserGroupIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Networking con Expertos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tendrás la oportunidad de interactuar de primera mano con líderes destacados en la industria, quienes compartirán su visión sobre el futuro de Algorand y la revolución blockchain.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
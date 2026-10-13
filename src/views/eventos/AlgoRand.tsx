import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

export default function AlgoRand() {
  return (
    // Fondo gris claro
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      
      {/* Contenedor principal blanco (tipo tarjeta) */}
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl overflow-hidden relative">
        
        {/* 👇 Etiqueta "Evento Privado" en la esquina superior derecha */}
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-bl-lg flex items-center gap-1.5 shadow-md">
            <LockClosedIcon className="h-4 w-4" />
            Evento Privado
          </div>
        </div>
        
        <div className="p-8 md:p-12 text-center">
          
          {/* Título pequeño azul */}
          <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            MCyRA 2026
          </h3>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mexican Conference on Cybersecurity Research and Applications
          </h1>
          
          {/* Descripción */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            MCyRA 2026 es el punto de encuentro para expertos, académicos y estudiantes interesados en la ciberseguridad. En un mundo donde las amenazas digitales son cada vez más complejas, este evento ofrece un espacio para compartir conocimientos, generar nuevas ideas y construir juntos un panorama digital más seguro para América Latina y el mundo.
          </p>

          {/* Información clave (Fecha, Horario, Lugar) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200 py-8 mb-10">
            
            {/* Fecha */}
            <div className="flex flex-col items-center">
              <CalendarIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Fecha</h4>
              <p className="text-gray-600">10 al 13 de Noviembre de 2026</p>
            </div>

            {/* Horario */}
            <div className="flex flex-col items-center md:border-l md:border-r border-gray-200">
              <ClockIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Horario</h4>
              <p className="text-gray-600">09:00 a 18:00 horas</p>
            </div>

            {/* Lugar */}
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 text-blue-500 mb-2" />
              <h4 className="font-bold text-gray-900">Lugar</h4>
              <p className="text-gray-600 whitespace-pre-line">
                Auditorio Raúl J. Marsal (Edificio T), UNAM
              </p>
            </div>
          </div>

          {/* Imagen del Banner */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-md">
            <img 
              src="/events/mcyra/mcyra.png" 
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
                <ShieldCheckIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Investigación de Vanguardia
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sumérgete en las últimas investigaciones sobre criptografía, seguridad de redes, inteligencia de amenazas y privacidad. Descubre cómo la academia y la industria están abordando los desafíos actuales en ciberseguridad.
                </p>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="flex items-start">
              <div className="bg-blue-500 p-3 rounded-lg mr-4 text-white shrink-0">
                <LockClosedIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Colaboración Internacional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Conecta con expertos de América Latina y el mundo. MCyRA 2026 es el espacio ideal para compartir ideas, establecer colaboraciones y contribuir al fortalecimiento del panorama de la ciberseguridad en la región.
                </p>
              </div>
            </div>
          </div>

          {/* 👇 Botón al sitio oficial */}
          <div className="mt-14">
            <a
              href="https://mcyra2026.unam.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            >
              Ir al sitio oficial
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}
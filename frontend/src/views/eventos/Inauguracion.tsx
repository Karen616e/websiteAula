import { AcademicCapIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/20/solid';

// Datos de los puntos clave (sin cambios)
const features = [
  {
    name: 'Educación Híbrida Pionera',
    description: 'La UNAM, a través de su Facultad de Ingeniería, inauguró el Aula Cisco, un espacio pionero para la Educación Híbrida, desarrollando nuevos recursos pedagógicos y tecnológicos.',
    icon: SparklesIcon,
  },
  {
    name: 'Laboratorio de Innovación',
    description: 'Además de su uso para clases, el aula funciona como un laboratorio práctico para que estudiantes y profesores aprendan sobre programabilidad e interactúen directamente con tecnología de punta.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Tecnología de Vanguardia',
    description: 'Equipada con soluciones de colaboración, ciberseguridad y conectividad de Cisco, gracias al apoyo del programa de aceleramiento digital para el país, Cisco CDA.',
    icon: MapPinIcon,
  },
];

export default function Inauguracion() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* === SECCIÓN DE TÍTULO === */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Evento Destacado</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Inauguración del Aula Híbrida
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            El Aula Cisco es la primera en su tipo dentro de la UNAM, marcando un hito en la educación híbrida.
          </p>
        </div>

        {/* === INFORMACIÓN DEL EVENTO === */}
        <div className="mt-10 flex justify-center gap-x-6 sm:gap-x-12 text-center text-sm font-semibold leading-6 text-gray-700">
            <span><strong>Fecha:</strong> 8 de Junio de 2022</span>
            <span><strong>Lugar:</strong> Anexo de la Facultad de Ingeniería</span>
        </div>

        {/* === IMAGEN PRINCIPAL (NUEVA SECCIÓN) === */}
        <div className="mx-auto mt-16 max-w-4xl">
          <img
            src="/events/inauguracion/inc1.jpeg"
            alt="Inauguración del Aula Híbrida Cisco"
            // Clases para hacerla impactante: ratio 16:9, esquinas redondeadas y sombra
            className="w-full aspect-[16/9] rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* === SECCIÓN "LO QUE PUEDES ESPERAR" === */}
        {/* (Añadí un poco más de margen superior para separar de la nueva imagen) */}
        <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12 sm:text-3xl">
            Lo que puedes esperar
          </h3>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* === SECCIÓN DE GALERÍA (MODIFICADA) === */}
        <div className="mx-auto mt-16 max-w-10xl sm:mt-20 lg:mt-24">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12 sm:text-3xl">
                Galería del Evento
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Ahora la galería empieza desde la imagen 2 */}
                <img 
                  src="/events/inauguracion/inc2.jpeg" 
                  alt="Galería Inauguración 2" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="/events/inauguracion/inc3.png" 
                  alt="Galería Inauguración 3" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="/events/inauguracion/inc4.jpeg" 
                  alt="Galería Inauguración 4" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
            </div>
        </div>

      </div>
    </div>
  );
}
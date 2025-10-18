import { CubeTransparentIcon, RocketLaunchIcon, CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/20/solid';

// Datos para la sección "Lo que puedes esperar"
const features = [
  {
    name: 'Inmersión en Blockchain',
    description: 'Este workshop te brindará la oportunidad de sumergirte en el fascinante mundo de la tecnología blockchain, las criptomonedas y, en particular, Algorand. Aprenderás los conceptos fundamentales y cómo esta tecnología está revolucionando diversos sectores.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Explora el Futuro Tecnológico',
    description: '¡No te pierdas esta increíble oportunidad! Descubre el potencial de la tecnología blockchain con Algorand. Regístrate ahora y asegura tu lugar en este evento imprescindible para quienes buscan explorar el futuro de la tecnología.',
    icon: RocketLaunchIcon,
  },
];

export default function AlgoRand() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* === SECCIÓN DE TÍTULO === */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Workshop Introductorio</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blockchain con Algorand
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Un evento diseñado para que aprendas todo sobre la tecnología blockchain y las criptomonedas de la mano de expertos en Algorand. ¡No necesitas experiencia previa!
          </p>
        </div>

        {/* === INFORMACIÓN DEL EVENTO === */}
        <div className="mt-10 mx-auto max-w-4xl border-t border-gray-200 pt-10">
            <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
                <div className="flex flex-col items-center">
                    <dt className="flex items-center gap-x-2 text-sm font-semibold text-gray-700">
                        <CalendarDaysIcon className="h-5 w-5 text-blue-600" />
                        Fecha
                    </dt>
                    <dd className="mt-1 text-base text-gray-600">1 de Junio</dd>
                </div>
                <div className="flex flex-col items-center">
                    <dt className="flex items-center gap-x-2 text-sm font-semibold text-gray-700">
                        <ClockIcon className="h-5 w-5 text-blue-600" />
                        Horario
                    </dt>
                    <dd className="mt-1 text-base text-gray-600">16:00 a 18:00 horas</dd>
                </div>
                <div className="flex flex-col items-center">
                    <dt className="flex items-center gap-x-2 text-sm font-semibold text-gray-700">
                        <MapPinIcon className="h-5 w-5 text-blue-600" />
                        Lugar
                    </dt>
                    <dd className="mt-1 text-base text-gray-600">Laboratorio Microsoft de IA, UNAM</dd>
                </div>
            </dl>
        </div>
        
        {/* === IMAGEN PRINCIPAL (MODIFICADA) === */}
        <div className="mx-auto mt-16 max-w-4xl">
            {/* Reemplazamos el div con la etiqueta <img> */}
            <img
              src="/events/algorand/algoRand.png" 
              alt="Flyer del evento Algorand"
              className="w-full aspect-[16/9] rounded-2xl shadow-xl object-cover"
            />
        </div>

        {/* === SECCIÓN "LO QUE PUEDES ESPERAR" === */}
        <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12 sm:text-3xl">
            Lo que puedes esperar
          </h3>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <dt className="flex flex-col items-center gap-y-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </div>
  );
}
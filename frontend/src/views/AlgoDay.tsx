import { PresentationChartBarIcon, UsersIcon, CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/20/solid';

// Datos para la sección "Lo que puedes esperar"
const features = [
  {
    name: 'Charlas y Paneles de Alto Impacto',
    description: 'Disfrutarás de presentaciones tipo TEDx y paneles de discusión que te proporcionarán una visión completa de los desafíos, aprendizajes y experiencias en este apasionante campo.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Networking con Expertos',
    description: 'Tendrás la oportunidad de interactuar de primera mano con líderes destacados en la industria, quienes compartirán su visión sobre el futuro de Algorand y la revolución blockchain.',
    icon: UsersIcon,
  },
];

export default function AlgoDay() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* === SECCIÓN DE TÍTULO === */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Día de Innovación y Tecnología</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            AlgoDay
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Un espacio de aprendizaje diseñado para ofrecer una experiencia educativa de alta calidad, combinando lo mejor de la enseñanza presencial y en línea para explorar el futuro de la tecnología blockchain.
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
                    <dd className="mt-1 text-base text-gray-600">16 de Agosto</dd>
                </div>
                <div className="flex flex-col items-center">
                    <dt className="flex items-center gap-x-2 text-sm font-semibold text-gray-700">
                        <ClockIcon className="h-5 w-5 text-blue-600" />
                        Horario
                    </dt>
                    <dd className="mt-1 text-base text-gray-600">09:00 a 18:00</dd>
                </div>
                <div className="flex flex-col items-center">
                    <dt className="flex items-center gap-x-2 text-sm font-semibold text-gray-700">
                        <MapPinIcon className="h-5 w-5 text-blue-600" />
                        Lugar
                    </dt>
                    <dd className="mt-1 text-base text-gray-600">UTN.BA – Aula Magna</dd>
                </div>
            </dl>
        </div>
        
        {/* === IMAGEN PRINCIPAL === */}
        <div className="mx-auto mt-16 max-w-4xl">
            <div className="aspect-[16/9] w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                {/* Reemplaza este div con tu etiqueta <img> */}
                <span className="text-gray-500">Aquí va una imagen del evento</span>
            </div>
        </div>

        {/* === SECCIÓN "LO QUE PUEDES ESPERAR" === */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
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
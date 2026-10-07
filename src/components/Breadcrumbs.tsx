import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

// Diccionario para que las rutas tengan nombres bonitos y capitalizados
const routeNames: Record<string, string> = {
  'inicio': 'Inicio',
  'clases': 'Clases',
  'plantilla': 'Plantilla Educativa',
  'coordinacion': 'Coordinación',
  'profesores': 'Profesores',
  'eventos': 'Eventos',
  'intersemestrales': 'Intersemestrales',
  'algoday': 'AlgoDay',
  'algorand': 'AlgoRand',
  'inauguracion': 'Inauguración',
  'ubicacion': 'Ubicación',
};

export default function Breadcrumbs() {
  const location = useLocation();
  // Dividimos la ruta en segmentos (ej: /eventos/algorand -> ['eventos', 'algorand'])
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Ocultar breadcrumbs si estamos en la raíz o solo en Inicio
  if (pathnames.length === 0 || (pathnames.length === 1 && pathnames[0] === 'inicio')) {
    return null;
  }

  return (
    <nav className="flex mb-4 md:px-8" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        {/* Enlace al Inicio (Icono de casa) */}
        <li>
          <div>
            <Link to="/inicio" className="text-gray-400 hover:text-blue-500 transition-colors">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Inicio</span>
            </Link>
          </div>
        </li>

        {/* Generar los enlaces dinámicamente */}
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const name = routeNames[value] || value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                {last ? (
                  // El último elemento es texto (página actual), no enlace
                  <span className="ml-2 text-sm font-medium text-blue-600" aria-current="page">
                    {name}
                  </span>
                ) : (
                  // Los elementos intermedios son enlaces
                  <Link
                    to={to}
                    className="ml-2 text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    {name}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
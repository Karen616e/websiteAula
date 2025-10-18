import {
  HomeIcon,
  AcademicCapIcon,
  PencilIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  MapPinIcon,
  CalendarDaysIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";

// Mantenemos la misma estructura de datos
const tabs = [
  { name: "Inicio", href: "/inicio", icon: HomeIcon },
  { name: "Clases", href: "/clases", icon: AcademicCapIcon },
  {
    name: "Plantilla Educativa",
    icon: BriefcaseIcon,
    children: [
      { name: "Coordinación", href: "/plantilla/coordinacion", icon: BuildingLibraryIcon },
      { name: "Profesores", href: "/plantilla/profesores", icon: PencilIcon },
    ],
  },
  {
    name: "Eventos",
    icon: CalendarDaysIcon,
    children: [
      { name: "Inauguración", href: "/eventos/inauguracion", icon: SparklesIcon },
      { name: "AlgoRand", href: "/eventos/algorand", icon: SparklesIcon },
      { name: "AlgoDay", href: "/eventos/algoday", icon: SparklesIcon },
    ],
  },
  { name: "Ubicación", href: "/ubicacion", icon: MapPinIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationForMain() {
  const location = useLocation();

  // Esta es solo la versión de escritorio de tu navegación,
  // pero sin el 'bg-white' y con colores de texto para un fondo oscuro.
  return (
    <nav className="hidden sm:flex justify-center" aria-label="Tabs">
      {tabs.map((tab) =>
        tab.children ? (
          (() => {
            const isChildOpen = tab.children.some(
              (child) => location.pathname === child.href
            );
            return (
              <div
                key={tab.name}
                className={classNames(
                  isChildOpen
                    ? "text-white" // Texto blanco para activo
                    : "text-gray-300 hover:text-white", // Texto gris/blanco para inactivo
                  "relative group inline-flex items-center py-2 px-4 text-sm font-medium" // Reducido a text-sm para caber mejor
                )}
              >
                <tab.icon
                  className={classNames(
                    isChildOpen
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-300",
                    "-ml-0.5 mr-2 h-5 w-5" // Iconos un poco más grandes
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
                {/* Menú desplegable */}
                <div className="absolute left-0 top-full hidden group-hover:block bg-white border-0 rounded shadow-lg z-10 min-w-[10rem]">
                  {tab.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      // Estilos para el desplegable (texto oscuro sobre fondo blanco)
                      className="group inline-flex items-center py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 w-full"
                    >
                      <child.icon
                        className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>{child.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()
        ) : (
          <Link
            key={tab.name}
            to={tab.href}
            className={classNames(
              location.pathname === tab.href
                ? "text-white" // Texto blanco para activo
                : "text-gray-300 hover:text-white", // Texto gris/blanco para inactivo
              "group inline-flex items-center py-2 px-4 text-sm font-medium"
            )}
          >
            <tab.icon
              className={classNames(
                location.pathname === tab.href
                  ? "text-white"
                  : "text-gray-400 group-hover:text-gray-300",
                "-ml-0.5 mr-2 h-5 w-5"
              )}
              aria-hidden="true"
            />
            <span>{tab.name}</span>
          </Link>
        )
      )}
    </nav>
  );
}
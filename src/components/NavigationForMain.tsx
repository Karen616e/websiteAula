import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  AcademicCapIcon,
  PencilIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  MapPinIcon,
  CalendarDaysIcon,
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

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
      { name: "Intersemestrales", href: "/eventos/intersemestrales", icon: AcademicCapIcon },
    ],
  },
  { name: "Ubicación", href: "/ubicacion", icon: MapPinIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationForMain() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  }, [location.pathname]);

  return (
    <nav className="" aria-label="Tabs">
      
      {/* --- BOTÓN HAMBURGUESA (Móvil/Tablet) --- */}
      {/* CAMBIO 1: Usamos 'lg:hidden' en lugar de 'sm:hidden' para que aparezca hasta los 1024px */}
      <div className="flex lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none transition-transform active:scale-95"
        >
          <span className="sr-only">Abrir menú</span>
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* --- MENÚ ESCRITORIO (Visible solo en pantallas grandes) --- */}
      {/* CAMBIO 2: 'hidden lg:flex' en lugar de 'hidden sm:flex' */}
      <div className="hidden lg:flex justify-center space-x-4">
        {tabs.map((tab) =>
          tab.children ? (
            // CAMBIO 3: Aumentamos texto a 'text-lg'
            <div key={tab.name} className="relative group inline-flex items-center py-2 px-3 text-lg font-medium cursor-pointer text-gray-300 hover:text-white">
              {/* CAMBIO 4: Aumentamos iconos a 'h-7 w-7' */}
              <tab.icon className="text-gray-400 group-hover:text-gray-300 -ml-0.5 mr-2 h-7 w-7" aria-hidden="true" />
              <span>{tab.name}</span>
              
              {/* Dropdown Desktop */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-gray-900 border border-gray-700 rounded shadow-xl z-50 min-w-[14rem] mt-1">
                {tab.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.href}
                    // Mantenemos text-sm en submenús para que no se vean gigantes
                    className="group flex items-center py-3 px-4 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white w-full transition-colors"
                  >
                    <child.icon className="text-gray-500 group-hover:text-white mr-3 h-5 w-5" aria-hidden="true" />
                    <span>{child.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={tab.name}
              to={tab.href}
              // CAMBIO 5: Aumentamos texto a 'text-lg'
              className={classNames(
                location.pathname === tab.href ? "text-white bg-white/10 rounded-md" : "text-gray-300 hover:text-white",
                "group inline-flex items-center py-2 px-3 text-lg font-medium transition-colors"
              )}
            >
              {/* CAMBIO 6: Aumentamos iconos a 'h-7 w-7' */}
              <tab.icon className={classNames(location.pathname === tab.href ? "text-white" : "text-gray-400 group-hover:text-gray-300", "-ml-0.5 mr-2 h-7 w-7")} aria-hidden="true" />
              <span>{tab.name}</span>
            </Link>
          )
        )}
      </div>

      {/* --- MENÚ MÓVIL/TABLET (Estilo Dark & Fixed) --- */}
      {isMobileMenuOpen && (
        // CAMBIO 7: 'lg:hidden' aquí también para asegurar consistencia
        <div className="lg:hidden fixed top-[7rem] left-0 w-full h-[calc(100vh-7rem)] bg-gray-900/95 backdrop-blur-md border-t border-gray-700 overflow-y-auto z-40 animate-fadeIn">
          <div className="flex flex-col p-4 space-y-2">
            {tabs.map((tab) => {
              const isActive = tab.href === location.pathname;
              const hasChildren = !!tab.children;

              if (hasChildren) {
                const isSubmenuOpen = activeMobileSubmenu === tab.name;
                return (
                  <div key={tab.name} className="flex flex-col border-b border-gray-800 last:border-0">
                    <button
                      onClick={() => setActiveMobileSubmenu(isSubmenuOpen ? null : tab.name)}
                      // Texto en móvil
                      className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-gray-200 hover:bg-gray-800/50 rounded-md transition-colors"
                    >
                      <div className="flex items-center">
                        <tab.icon className="text-blue-500 mr-4 h-7 w-7" />
                        <span>{tab.name}</span>
                      </div>
                      <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Submenú Móvil */}
                    <div className={`overflow-hidden transition-all duration-300 ${isSubmenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-gray-800/50 pl-4 rounded-md mb-2">
                        {tab.children!.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center py-3 px-4 text-base font-medium text-gray-400 hover:text-white transition-colors"
                          >
                            <child.icon className="mr-3 h-5 w-5 text-gray-500" />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={tab.name}
                  to={tab.href!}
                  className={classNames(
                    isActive ? "bg-blue-600/20 text-blue-400" : "text-gray-200 hover:bg-gray-800/50",
                    "group flex items-center py-4 px-4 text-lg font-medium rounded-md border-b border-gray-800 last:border-0 transition-colors"
                  )}
                >
                  <tab.icon className={classNames(isActive ? "text-blue-400" : "text-blue-500", "mr-4 h-7 w-7")} aria-hidden="true" />
                  <span>{tab.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
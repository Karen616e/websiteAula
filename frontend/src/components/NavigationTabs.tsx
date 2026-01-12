import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  ChevronDownIcon,
  UserGroupIcon,
  UsersIcon,
  SparklesIcon,
  Bars3Icon, // Icono hamburguesa (abrir)
  XMarkIcon, // Icono cerrar
} from '@heroicons/react/24/solid';

type NavItem = {
  name: string;
  path?: string;
  basePath?: string;
  icon: any;
  children?: { name: string; path: string; icon: any }[];
};

const NavigationTabs = () => {
  const location = useLocation();
  
  // Estado para el menú móvil (Abierto/Cerrado)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para los dropdowns (Móvil y Desktop)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const timeoutRef = useRef<number | null>(null);

  // Cierra el menú móvil automáticamente cuando cambia la ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Limpieza del timer
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // --- LÓGICA DESKTOP (Hover) ---
  const handleMouseEnter = (name: string) => {
    // Solo activar hover en pantallas grandes
    if (window.innerWidth >= 1024) { 
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setActiveDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      timeoutRef.current = window.setTimeout(() => {
        setActiveDropdown(null);
        timeoutRef.current = null;
      }, 300);
    }
  };

  // --- LÓGICA MÓVIL (Click) ---
  const toggleMobileDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null); // Cerrar si ya está abierto
    } else {
      setActiveDropdown(name); // Abrir
    }
  };

  const tabs: NavItem[] = [
    { name: 'Inicio', path: '/inicio', icon: HomeIcon },
    { name: 'Clases', path: '/clases', icon: AcademicCapIcon },
    { 
      name: 'Plantilla Educativa', 
      basePath: '/plantilla',
      icon: BriefcaseIcon,
      children: [
        { name: 'Coordinación', path: '/plantilla/coordinacion', icon: UserGroupIcon },
        { name: 'Profesores', path: '/plantilla/profesores', icon: UsersIcon },
      ]
    },
    { 
      name: 'Eventos', 
      basePath: '/eventos',
      icon: CalendarIcon,
      children: [
        { name: 'Intersemestrales', path: '/eventos/intersemestrales', icon: SparklesIcon },
        { name: 'AlgoDay', path: '/eventos/algoday', icon: SparklesIcon },
        { name: 'AlgoRand', path: '/eventos/algorand', icon: SparklesIcon },
        { name: 'Inauguración', path: '/eventos/inauguracion', icon: SparklesIcon },
      ]
    },
    { name: 'Ubicación', path: '/ubicacion', icon: MapPinIcon },
  ];

  // Clases comunes
  const baseClasses = "group inline-flex items-center px-3 py-2 text-lg font-medium rounded-md transition-colors duration-200 cursor-pointer";
  const activeClasses = "text-cyan-500 bg-cyan-50";
  const inactiveClasses = "text-gray-600 hover:text-gray-900 hover:bg-gray-100";

  return (
    <nav className="w-full" aria-label="Tabs">
      
      {/* 1. BOTÓN HAMBURGUESA (Solo visible en Móvil lg:hidden) */}
      <div className="lg:hidden flex justify-between items-center w-full px-2">
        <span className="text-gray-500 text-sm font-medium">Menú</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-600 hover:text-cyan-500 hover:bg-gray-100 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* 2. MENÚ DESKTOP (Horizontal - hidden lg:flex) */}
      <div className="hidden lg:flex space-x-6 lg:space-x-10 h-full items-center justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          let isActive = false;
          if (tab.path) isActive = location.pathname.startsWith(tab.path);
          else if (tab.basePath) isActive = location.pathname.startsWith(tab.basePath);

          if (tab.children) {
            return (
              <div 
                key={tab.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(tab.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
                  <Icon className={`-ml-0.5 mr-2 h-7 w-7 ${isActive ? 'text-cyan-500' : 'text-gray-400 group-hover:text-gray-500'}`} aria-hidden="true" />
                  <span>{tab.name}</span>
                  <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === tab.name ? 'rotate-180' : ''} ${isActive ? 'text-cyan-500' : 'text-gray-400'}`} />
                </div>

                {activeDropdown === tab.name && (
                  <div className="absolute left-0 top-full mt-1 pt-1 w-64 z-50">
                    <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                      <div className="py-1">
                        {tab.children.map((child) => {
                          const ChildIcon = child.icon;
                          const isChildActive = location.pathname === child.path;
                          return (
                            <Link
                              key={child.name}
                              to={child.path}
                              className={`group flex items-center px-4 py-3 text-sm font-medium ${isChildActive ? 'bg-cyan-50 text-cyan-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                            >
                              <ChildIcon className={`mr-3 h-5 w-5 ${isChildActive ? 'text-cyan-500' : 'text-gray-400 group-hover:text-gray-500'}`} aria-hidden="true" />
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={tab.name}
              to={tab.path!}
              className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            >
              <Icon className={`-ml-0.5 mr-2 h-7 w-7 ${isActive ? 'text-cyan-500' : 'text-gray-400 group-hover:text-gray-500'}`} aria-hidden="true" />
              <span>{tab.name}</span>
            </Link>
          );
        })}
      </div>

      {/* 3. MENÚ MÓVIL (Vertical - lg:hidden) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-2 mt-2 pb-4 border-t border-gray-100 pt-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            let isActive = false;
            if (tab.path) isActive = location.pathname.startsWith(tab.path);
            else if (tab.basePath) isActive = location.pathname.startsWith(tab.basePath);

            // Opción con submenú en móvil
            if (tab.children) {
              return (
                <div key={tab.name} className="flex flex-col">
                  <button
                    onClick={() => toggleMobileDropdown(tab.name)}
                    className={`w-full text-left ${baseClasses} ${isActive ? activeClasses : inactiveClasses} justify-between`}
                  >
                    <div className="flex items-center">
                      <Icon className={`-ml-0.5 mr-2 h-7 w-7 ${isActive ? 'text-cyan-500' : 'text-gray-400'}`} aria-hidden="true" />
                      <span>{tab.name}</span>
                    </div>
                    <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === tab.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Submenú móvil (Acordeón) */}
                  {activeDropdown === tab.name && (
                    <div className="pl-8 flex flex-col space-y-1 mt-1 bg-gray-50 rounded-md py-2">
                      {tab.children.map((child) => {
                         const ChildIcon = child.icon;
                         const isChildActive = location.pathname === child.path;
                         return (
                           <Link
                             key={child.name}
                             to={child.path}
                             className={`group flex items-center px-4 py-3 text-base font-medium rounded-md ${isChildActive ? 'text-cyan-600' : 'text-gray-600'}`}
                           >
                             <ChildIcon className={`mr-3 h-5 w-5 ${isChildActive ? 'text-cyan-500' : 'text-gray-400'}`} aria-hidden="true" />
                             {child.name}
                           </Link>
                         );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Opción normal en móvil
            return (
              <Link
                key={tab.name}
                to={tab.path!}
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                <Icon className={`-ml-0.5 mr-2 h-7 w-7 ${isActive ? 'text-cyan-500' : 'text-gray-400'}`} aria-hidden="true" />
                <span>{tab.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default NavigationTabs;
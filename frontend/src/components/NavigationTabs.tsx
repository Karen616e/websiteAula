// src/components/NavigationTabs.tsx
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, 300);
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

  // CAMBIO 1: Aumentar tamaño de texto base principal (de text-base a text-lg)
  const baseClasses = "group inline-flex items-center px-3 py-2 text-lg font-medium rounded-md transition-colors duration-200 cursor-pointer";
  const activeClasses = "text-cyan-500 bg-cyan-50";
  const inactiveClasses = "text-gray-600 hover:text-gray-900 hover:bg-gray-100";

  return (
    <nav className="flex space-x-6 lg:space-x-10 h-full items-center" aria-label="Tabs relative z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        
        let isActive = false;
        if (tab.path) {
          isActive = location.pathname.startsWith(tab.path);
        } else if (tab.basePath) {
          isActive = location.pathname.startsWith(tab.basePath);
        }

        if (tab.children) {
          return (
            <div 
              key={tab.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(tab.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
                {/* Aumentamos ligeramente el icono principal también */}
                <Icon className={`-ml-0.5 mr-2 h-7 w-7 ${isActive ? 'text-cyan-500' : 'text-gray-400 group-hover:text-gray-500'}`} aria-hidden="true" />
                <span>{tab.name}</span>
                <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === tab.name ? 'rotate-180' : ''} ${isActive ? 'text-cyan-500' : 'text-gray-400'}`} />
              </div>

              {activeDropdown === tab.name && (
                <div className="absolute left-0 mt-1 pt-1 w-64 z-50">
                  <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                    <div className="py-1">
                      {tab.children.map((child) => {
                        const ChildIcon = child.icon;
                        const isChildActive = location.pathname === child.path;
                        return (
                          <Link
                            key={child.name}
                            to={child.path}
                            // CAMBIO 2: Mantener texto de submenú más pequeño (text-sm)
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
            aria-current={isActive ? 'page' : undefined}
          >
            {/* Aumentamos ligeramente el icono principal también */}
            <Icon
              className={`
                -ml-0.5 mr-2 h-7 w-7
                ${isActive ? 'text-cyan-500' : 'text-gray-400 group-hover:text-gray-500'}
              `}
              aria-hidden="true"
            />
            <span>{tab.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationTabs;
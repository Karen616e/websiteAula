import {
  HomeIcon,
  AcademicCapIcon,
  PencilIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { name: "Inicio", href: "/inicio", icon: HomeIcon },
  { name: "Clases", href: "/clases", icon: AcademicCapIcon },
  {
    name: "Plantilla Educativa",
    icon: BriefcaseIcon,
    children: [
      {
        name: "Coordinación",
        href: "/coordinacion",
        icon: BuildingLibraryIcon,
      },
      { name: "Profesores", href: "/profesores", icon: PencilIcon },
    ],
  },
<<<<<<< Updated upstream
=======
  {
    name: "Eventos",
    icon: CalendarDaysIcon, // Icono principal del menú
    children: [
      { name: "Inauguración", href: "/eventos/inauguracion", icon: SparklesIcon },
      { name: "AlgoRand", href: "/eventos/algorand", icon: SparklesIcon },
      { name: "AlgoDay", href: "/eventos/algoday", icon: SparklesIcon },
      { name: "Intersemestrales", href: "/eventos/intersemestrales", icon: AcademicCapIcon },
    ],
  },
  // -------------------------
  { name: "Ubicación", href: "/ubicacion", icon: MapPinIcon },
>>>>>>> Stashed changes
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationTabs() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(e.target.value);
  };
  return (
    <>
      <div className=" bg-[66ccff] mb-0.5"></div>
      <div className="mb-1">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            onChange={handleChange}
          >
            {tabs.map((tab) =>
              tab.children ? (
                <optgroup label={tab.name} key={tab.name}>
                  {tab.children.map((child) => (
                    <option value={child.href} key={child.name}>
                      {child.name}
                    </option>
                  ))}
                </optgroup>
              ) : (
                <option value={tab.href} key={tab.name}>
                  {tab.name}
                </option>
              )
            )}
          </select>
        </div>

        <div className="hidden sm:block pb-0.5">
          <nav className="flex justify-center" aria-label="Tabs">
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
                          ? "border-[#66ccff] text-[#66ccff]"
                          : "border-transparent text-gray-500 hover:text-gray-700",
                        "relative group inline-flex items-center py-2 px-4 text-xl font-medium"
                      )}
                    >
                      <tab.icon
                        className={classNames(
                          isChildOpen
                            ? "text-[#66ccff]"
                            : "text-gray-400 group-hover:text-gray-500",
                          "-ml-0.5 mr-2 h-4 w-4"
                        )}
                        aria-hidden="true"
                      />
                      <span>{tab.name}</span>

                      <div className="absolute left-0 top-full hidden group-hover:block bg-white border-0 rounded shadow z-10 min-w-[10rem]">
                        {tab.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={classNames(
                              location.pathname === child.href
                                ? "border-[#66ccff] text-[#66ccff]"
                                : "border-transparent text-gray-500 hover:text-gray-700",
                              "group inline-flex items-center py-2 px-4 text-xl font-medium"
                            )}
                          >
                            <child.icon
                              className={classNames(
                                location.pathname === child.href
                                  ? "text-[#66ccff]"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "-ml-0.5 mr-2 h-4 w-4"
                              )}
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
                      ? "border-[#66ccff] text-[#66ccff]"
                      : "border-transparent text-gray-500 hover:text-gray-700",
                    "group inline-flex items-center py-2 px-4 text-xl font-medium"
                  )}
                >
                  <tab.icon
                    className={classNames(
                      location.pathname === tab.href
                        ? "text-[#66ccff]"
                        : "text-gray-400 group-hover:text-gray-500",
                      "-ml-0.5 mr-2 h-4 w-4"
                    )}
                    aria-hidden="true"
                  />
                  <span>{tab.name}</span>
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

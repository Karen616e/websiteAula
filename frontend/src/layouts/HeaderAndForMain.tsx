import { useEffect, useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Outlet } from "react-router";
import NavigationForMain from "../components/NavigationForMain"; 

export default function HeaderAndForMain() {
  // Lógica para el efecto parallax (sigue en Inicio.tsx, pero el header la necesita)
  const [offsetY, setOffsetY] = useState(0); // Esta lógica en realidad ya no es necesaria aquí si se mudó a Inicio.tsx
  const handleScroll = () => setOffsetY(window.pageYOffset); // Podríamos limpiar esto, pero no hace daño

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lógica para cambiar el fondo del header al hacer scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    checkScroll(); // Revisa el scroll al cargar
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Arrays de datos para el footer (sin cambios)
  const interestSites = [
    { name: "ANFEI", link: "https://www.anfei.mx" },
    { name: "CACEI", link: "https://cacei.com.mx" },
    { name: "Alianza FIDEM", link: "http://www.alianzafiidem.org" },
    { name: "INGENET", link: "https://ingenet.com.mx" },
  ];

  const socialMedia = [
    { name: "Facebook", icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=100071458831772" },
    { name: "X", icon: FaXTwitter, link: "https://x.com/FIUNAM_MX" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/fiunam_mx/" },
    { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/user/TVIngenieria" },
  ];

  return (
    <div className="w-full isolate">
      
      {/* 2. HEADER STICKY (Con dimensiones actualizadas) */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-gray-900 bg-opacity-90" : "bg-black bg-opacity-30"
        } py-2`}
        style={{ height: "7rem" }}
      >
        {/* --- CAMBIOS EN ESTA LÍNEA --- */}
        {/* 1. Cambiado 'max-w-7xl' a 'max-w-5xl' */}
        {/* 2. Eliminado padding 'px-4 sm:px-6 lg:px-8' */}
        <div className="mx-auto max-w-5xl flex items-center justify-between h-full">
          {/* 3. Cambiado 'space-x-7' a 'space-x-4' y 'h-24' a 'h-23' */}
          <div className="hidden md:flex space-x-4 items-center">
            <img src="/EscudoUNAMBlanco.png" alt="UNAM" className="h-23 w-auto"/>
            <img src="/EscudoFIBlanco.png" alt="Facultad de Ingeniería" className="h-23 w-auto"/>
          </div>
          <div>
            <NavigationForMain />
          </div>
          <img src="/logo_CISCO.svg" alt="Aula Híbrida Cisco" className="h-12 w-auto md:h-20"/>
        </div>
      </header>
      
      {/* 3. CONTENIDO PRINCIPAL (Outlet) (sin cambios) */}
      <div className="relative z-10">
        <main>
          <Outlet />
        </main>
      </div>

      {/* 4. FOOTER (sin cambios, ya era consistente) */}
      <footer className="relative z-10 w-full px-4 py-4 bg-gray-800 flex flex-col gap-4 text-white font-serif md:px-8">
        <section className="flex flex-col gap-4 text-sm md:grid md:grid-cols-[1fr_2fr_1fr] md:gap-4">
          <div className="flex justify-center items-center">
            <img src="/logofooter.png" alt="Facultad de Ingeniería" className="max-w-xs md:max-w-35"/>
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold mb-1 mt-1">Universidad Nacional Autónoma de México</p>
            <address className="not-italic">
              Facultad de Ingeniería, Av. Universidad 3000, Ciudad Universitaria, Coyoacán, México D.F., CP. 04510
            </address>
            <p className="mt-2"><span className="font-bold">Teléfono: </span><span>56 22 08 66</span></p>
            <p><span className="font-bold">Fax: </span><span>56 16 28 90</span></p>
          </div>
          <div className="hidden md:block">
            <h4 className="font-bold text-center mb-2 mt-0.5 md:text-left">Sitios de Interés</h4>
            <ul className="flex flex-col gap-1 items-center md:items-start">
              {interestSites.map((site) => (
                <li key={site.name} className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <a href={site.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{site.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="w-full h-px bg-gray-700"></div>
        <section className="flex flex-col items-center gap-4 text-sm text-center md:flex-row md:justify-between md:text-left">
          <div className="md:flex-[0.6]">
            Todos los derechos reservados Copyright © 2025 /
            <a href="https://www.ingenieria.unam.mx/" target="_blank" rel="noopener noreferrer" className="hover:underline"> Facultad de Ingeniería </a>/
            <a href="https://www.unam.mx/" target="_blank" rel="noopener noreferrer" className="hover:underline"> UNAM </a>/
          </div>
          <div className="flex justify-center gap-4 text-xl md:flex-[0.4] md:justify-end">
            {socialMedia.map(({ name, icon: Icon, link }) => (
              <a key={name} href={link} aria-label={name} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </section>
      </footer>
    </div>
  );
}
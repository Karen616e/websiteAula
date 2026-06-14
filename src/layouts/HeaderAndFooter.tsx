import { LinkIcon } from "@heroicons/react/20/solid";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Outlet } from "react-router";
import NavigationTabs from "../components/NavigationTabs";
import Breadcrumbs from "../components/Breadcrumbs";     // <--- Breadcrumbs
import ScrollToTopButton from "../components/ScrollToTopButton"; // <--- Botón Volver Arriba

export default function HeaderAndFooter() {
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
    <div className="w-full font-sans">
      
      {/* --- HEADER SUPERIOR --- */}
      <header className="bg-gray-200 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Flex-wrap para que en móvil se acomoden en dos filas si es necesario */}
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap gap-y-4">
            
            {/* 1. LOGOS IZQUIERDA (UNAM + FI) */}
            <div className="flex space-x-2 md:space-x-4 items-center order-1">
              <img
                src="/Escudo-UNAM.png"
                alt="Universidad Nacional Autónoma de México"
                className="h-14 md:h-24 w-auto"
              />
              <img
                src="/escudofi.png"
                alt="Facultad de Ingeniería"
                className="h-14 md:h-24 w-auto"
              />
            </div>

            {/* 2. LOGO CISCO (DERECHA) */}
            <div className="order-2 md:order-3">
              <img
                src="/logo_CISCO.svg"
                alt="Aula Híbrida Cisco"
                className="h-10 md:h-20 w-auto"
              />
            </div>

            {/* 3. TEXTO CENTRAL */}
            <div className="text-center order-3 md:order-2 w-full md:w-auto md:flex-grow px-2 md:px-4">
              <h1 className="text-lg md:text-3xl font-bold text-blue-600 leading-tight">
                Facultad de Ingeniería
              </h1>
            </div>

          </div>
        </div>
      </header>

      {/* --- NAVEGACIÓN STICKY --- */}
      <div className="sticky top-0 z-40 bg-white py-2 border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <NavigationTabs />
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="bg-gray-50 min-h-screen py-8">
        <main className="mx-auto max-w-7xl p-4 md:p-0">
          
          {/* Breadcrumbs para navegación interna */}
          <Breadcrumbs />
          
          <Outlet />
        </main>
      </div>

      {/* --- FOOTER --- */}
      <footer className="w-full px-4 py-8 bg-gray-800 flex flex-col gap-8 text-white font-serif md:px-8">
        <section className="flex flex-col gap-4 text-sm md:grid md:grid-cols-[1fr_2fr_1fr] md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logofooter.png" alt="Facultad de Ingeniería" className="max-w-xs mb-4"/>
            <div className="text-center md:text-left">
              <p className="font-bold">Universidad Nacional Autónoma de México</p>
              <address className="not-italic mb-2">
                Facultad de Ingeniería, Av. Universidad 3000, C.U., Coyoacán, CDMX, CP. 04510
              </address>
              <p><span className="font-bold">Tel:</span> 56 22 08 66 | <span className="font-bold">Fax:</span> 56 16 28 90</p>
            </div>
          </div>
          <div className="hidden md:block">
            <h4 className="font-bold mb-4 text-lg">Sitios de Interés</h4>
            <ul className="space-y-2">
              {interestSites.map((site) => (
                <li key={site.name} className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-blue-400" />
                  <a href={site.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300 transition">{site.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex flex-col items-end">
             <h4 className="font-bold mb-4 text-lg">Síguenos</h4>
             <div className="flex gap-4 text-2xl">
              {socialMedia.map(({ name, icon: Icon, link }) => (
                <a key={name} href={link} aria-label={name} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Icon /></a>
              ))}
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-gray-700"></div>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            © 2025 <a href="https://www.ingenieria.unam.mx/" className="hover:underline">Facultad de Ingeniería</a> / <a href="https://www.unam.mx/" className="hover:underline">UNAM</a>. Todos los derechos reservados.
          </div>
          <div className="flex md:hidden gap-6 text-2xl">
            {socialMedia.map(({ name, icon: Icon, link }) => (
              <a key={name} href={link} aria-label={name} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Icon /></a>
            ))}
          </div>
        </section>
      </footer>

      {/* --- BOTÓN VOLVER ARRIBA --- */}
      <ScrollToTopButton />

    </div>
  );
}
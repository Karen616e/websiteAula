import { LinkIcon } from "@heroicons/react/20/solid";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Outlet } from "react-router";
import NavigationTabs from "../components/NavigationTabs";

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
    <>
<<<<<<< Updated upstream
      <header className=" bg-gray-200 py-2">
        <div className=" mx-auto max-w-5xl flex items-center md:justify-between">
          <div className=" hidden md:flex space-x-4">
            <img
              src="/Escudo-UNAM.png"
              alt="Universidad Nacional Autónoma de México"
              className="h-23 w-auto"
            />

            <img
              src="/escudofi.png"
              alt="Facultad de Ingeniería"
              className="h-23 w-auto"
            />
          </div>

          <img
            src="/logo_CISCO.svg"
            alt="Aula Híbrida Cisco"
            className="h-12 w-auto md:h-20"
          />
        </div>
      </header>
      <NavigationTabs />
      <div className="bg-gray-100  min-h-screen py-10">
        <main className="mx-auto max-w-5xl p-10 md:p-0">
          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="flex-1 ">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      <footer className="w-full px-4 py-4 bg-gray-800 flex flex-col gap-4 text-white font-serif md:px-8">
        {/* Faculty Information */}
        <section className="flex flex-col gap-4 text-sm md:grid md:grid-cols-[1fr_2fr_1fr] md:gap-4">
          <div className="flex justify-center items-center">
            <img
              src="/public/logofooter.png"
              alt="Facultad de Ingeniería"
              className="max-w-xs md:max-w-35"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold mb-1 mt-1">
              Universidad Nacional Autónoma de México
            </p>
            <address className="not-italic">
              Facultad de Ingeniería, Av. Universidad 3000, Ciudad
              Universitaria, Coyoacán, México D.F., CP. 04510
            </address>
            <p className="mt-2">
              <span className="font-bold">Teléfono: </span>
              <span>56 22 08 66</span>
            </p>
            <p>
              <span className="font-bold">Fax: </span>
              <span>56 16 28 90</span>
            </p>
          </div>

          {/* Interested Sites */}
          <div className="hidden md:block">
            <h4 className="font-bold text-center mb-2 mt-0.5 md:text-left">
              Sitios de Interés
            </h4>
            <ul className="flex flex-col gap-1 items-center md:items-start">
              {interestSites.map((site) => (
                <li key={site.name} className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <a
                    href={site.link}
                    target="_blank"
                    className="hover:underline"
                  >
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="w-full h-px bg-gray-700"></div>

        {/* Copyrights & Social Media */}
        <section className="flex flex-col items-center gap-4 text-sm text-center md:flex-row md:justify-between md:text-left">
          {/* Contenedor del Copyright */}
          <div className="md:flex-[0.6]">
            Todos los derechos reservados Copyright © 2025 /
            <a
              href="https://www.ingenieria.unam.mx/"
              target="_blank"
              rel="noopener"
              className="hover:underline"
            >
              {" "}
              Facultad de Ingeniería{" "}
            </a>
            /
            <a
              href="https://www.unam.mx/"
              target="_blank"
              rel="noopener"
              className="hover:underline"
            >
              {" "}
              UNAM{" "}
            </a>
            /
          </div>

          <div className="flex justify-center gap-4 text-xl md:flex-[0.4] md:justify-end">
            {socialMedia.map(({ name, icon: Icon, link }) => (
              <a
                key={name}
                href={link}
                aria-label={name}
                target="_blank"
                className="hover:text-blue-400 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </section>
      </footer>
=======
    <header className=" bg-gray-200 py-2">
      {/* Añadimos 'relative' para que el texto absoluto se centre respecto a este contenedor */}
      <div className="relative mx-auto max-w-5xl flex items-center justify-between">
        
        {/* --- 1. GRUPO IZQUIERDA (SOLO LOGOS) --- */}
        <div className="hidden md:flex items-center space-x-4">
          <img
            src="/Escudo-UNAM.png"
            alt="Universidad Nacional Autónoma de México"
            className="h-24 w-auto"
          />
          <img
            src="/escudofi.png"
            alt="Facultad de Ingeniería"
            className="h-24 w-auto"
          />
        </div>

        {/* --- 2. TEXTO CENTRADO (NUEVA POSICIÓN) --- */}
        {/* - absolute left-1/2 -translate-x-1/2: Lo centra perfectamente.
            - text-2xl: Más grande.
            - whitespace-nowrap: Evita que se rompa en dos líneas si el espacio es justo.
        */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <p className="text-2xl font-bold text-blue-600 whitespace-nowrap">
            Facultad de Ingeniería
          </p>
        </div>

        {/* --- 3. GRUPO DERECHA (LOGO CISCO) --- */}
        <img
          src="/logo_CISCO.svg"
          alt="Aula Híbrida Cisco"
          className="h-12 w-auto md:h-20"
        />
      </div>
    </header>
    
    <NavigationTabs />
    
    <div className="bg-gray-100  min-h-screen py-10">
      <main className="mx-auto max-w-5xl p-10 md:p-0">
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex-1 ">
            <Outlet />
          </div>
        </div>
      </main>
    </div>

    <footer className="w-full px-4 py-4 bg-gray-800 flex flex-col gap-4 text-white font-serif md:px-8">
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
                <a href={site.link} target="_blank" className="hover:underline" rel="noopener noreferrer">{site.name}</a>
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
            <a key={name} href={link} aria-label={name} target="_blank" className="hover:text-blue-400 transition-colors" rel="noopener noreferrer">
              <Icon />
            </a>
          ))}
        </div>
      </section>
    </footer>
>>>>>>> Stashed changes
    </>
  );
}
import { LinkIcon } from "@heroicons/react/16/solid";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Outlet } from "react-router";
import NavigationTabs from "../components/NavigationTabs";

export default function HeaderAndFooter() {
  const interestSites = [
    {
      name: "ANFEI",
      link: "https://www.anfei.mx",
    },
    {
      name: "CACEI",
      link: "https://cacei.com.mx",
    },
    {
      name: "Alianza FIDEM",
      link: "http://www.alianzafiidem.org",
    },
    {
      name: "INGENET",
      link: "https://ingenet.com.mx",
    },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/profile.php?id=100071458831772",
    },
    {
      name: "X",
      icon: FaXTwitter,
      link: "https://x.com/FIUNAM_MX",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/fiunam_mx/",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      link: "https://www.youtube.com/user/TVIngenieria",
    },
  ];

  return (
    <>
      <header className=" bg-gray-200 py-2">
        <div className=" mx-auto max-w-5xl flex items-center md:justify-between">
          <div className=" hidden md:flex space-x-4">
            <img src="/Escudo-UNAM.png" className="h-23 w-auto" />

            <img src="/escudofi.png" className="h-23 w-auto" />
          </div>

          <img src="/logo_CISCO.svg" className="h-12 w-auto md:h-20" />
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

      <footer className="w-full h-45 px-2 py-4 bg-gray-800 flex flex-col gap-6 text-white font-serif">
        {/* Faculty Information */}
        <section className="flex-[0.7] grid grid-cols-[1fr_2fr_1fr] gap-2 text-[14px]">
          <div className="flex items-center justify-center">
            <img src="/public/logofooter.png" alt="Facultad de Ingeniería" className="max-w-35"/>
          </div>

          <div className="">
            <p className="font-bold pt-1">Universidad Nacional Autónoma de México</p>
            <address>
              Facultad de Ingeniería, Av. Universidad 3000, Ciudad Universitaria, 
              Coyoacán, México D.F., CP. 04510
            </address>
            <p>
              <span className="font-bold">Teléfono: </span>
              <span>56 22 08 66</span>
            </p>
            <p className="pb-1">
              <span className="font-bold">Fax: </span>
              <span>56 16 28 90</span>
            </p>
          </div>

          <div className="pt-1 px-6">
            <h4>Sitios de Interés</h4>
            <ul>
              {
                interestSites.map((site) => (
                  <li key={site.name} className="flex items-center gap-0.5">
                    <LinkIcon className="w-4 h-4"/>
                    <a href={site.link} target="_blank" className="hover:underline">
                      {site.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>

        {/* Copyrights & social media*/}
        <section className="flex-[0.3] grid grid-cols-[6fr_4fr] gap-2">
          <div className="text-[14px]">
            Todos los derechos reservados Copyright © 2025 / 
            <a href="https://www.ingenieria.unam.mx/" target="_blank" rel="noopener"> Facultad de Ingeniería </a>
            /
            <a href="https://www.unam.mx/" target="_blank" rel="noopener"> UNAM </a>
            /
          </div>

          <div className="flex justify-evenly">
            {socialMedia.map(({
              name,
              icon: Icon,
              link,
            }) => (
              <a key={name} href={link} aria-label={name} target="_blank" className="hover:text-blue-400">
                <Icon />
              </a>
            ))}
          </div>
        </section>
      </footer>
    </>
  );
}

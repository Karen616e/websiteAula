import { Outlet } from "react-router";

export default function HeaderAndFooter() {
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
        <Outlet/>
        <div>Footer</div>
    </>
  )
}

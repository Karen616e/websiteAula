import { Outlet } from "react-router";
import NavigationTabs from "../components/NavigationTabs";

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
            <footer className=" bg-gray-800 py-20">

            </footer>
        </>
    )
}

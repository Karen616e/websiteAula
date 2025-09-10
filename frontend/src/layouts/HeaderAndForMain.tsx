import { Outlet } from "react-router";
import NavigationTabs from "../components/NavigationTabs";

export default function HeaderAndForMain() {
    return (
        <>
            {/* Parallax background in the header */}
            <header
                className="relative z-10 bg-transparent py-2"
                style={{
                    height: "100vh", 
                    backgroundImage: "url('/main-page/cisco-main.jpg')", 
                    backgroundSize: "cover",  
                    backgroundPosition: "center",  
                    backgroundAttachment: "fixed",  
                }}
            >
                <div className="absolute inset-0 bg-black opacity-0"></div> 
                <div className="mx-auto max-w-9/12 flex items-center md:justify-between relative z-20">
                    <div className="hidden md:flex space-x-7">
                        <img src="/EscudoUNAMBlanco.png" className="h-26 w-auto" />
                        <img src="/EscudoFIBlanco.png" className="h-26 w-auto" />
                    </div>
                    <div className="relative z-30">
                        <NavigationTabs />
                    </div>
                    <img src="/logo_CISCO.svg" className="h-12 w-auto md:h-20" />
                </div>
                
            </header>
           
            <div className="bg-gray-100  min-h-screen py-2">
                <main className="mx-auto max-w p-10 md:p-0">
                    
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

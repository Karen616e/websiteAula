import { useEffect, useState, useRef } from "react"

// 1. CORRECCIÓN DE RUTAS:
// Las rutas a archivos en 'public' deben ser absolutas desde la raíz (/)
// No deben incluir la palabra 'public'.
const images = [
    "/carousel/CiscoPlaca.jpeg",
    "/carousel/CiscoInicio1.png",
    "/carousel/CiscoInicio2.jpeg",
    "/carousel/CiscoInicio3.png",
    "/carousel/CiscoInicio4.png",
    "/carousel/CiscoInicio5.png",
    "/carousel/CiscoInicio6.png"
]

export default function Carousel(){
    const [current, setCurrent] = useState(0)
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const prev = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + images.length) % images.length);
        resetInterval();
    }
    const next = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
        resetInterval();
    }

    const resetInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
        }, 10000);
    };

    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return(
        <div className="flex flex-col items-center mt-20">
            <div
                // 2. CAMBIOS DE TAMAÑO:
                // - Cambiamos 'max-w-xl' a 'max-w-5xl' (más ancho)
                // - Reemplazamos 'h-64' con 'aspect-video' (relación 16:9)
                className="w-full max-w-5xl aspect-video flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} 
            >
                <img 
                    src={images[current]} 
                    alt={`Imagen ${current + 1}`} 
                    // 3. CAMBIO DE CLASES DE IMAGEN:
                    // 'object-contain' para evitar que se corte
                    // 'w-full h-full' para que llene el contenedor
                    className="object-contain w-full h-full" 
                />

                {isHovered && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-0 top-0 h-full w-[60px] flex items-center justify-center z-10"
                            style={{
                                background: "linear-gradient(to right, rgba(30,41,59,0.1) 70%, rgba(30,41,59,0.0) 100%)"
                            }}
                        >
                            <span className="text-gray-100 text-3xl drop-shadow-lg">&#10094;</span>
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-0 h-full w-[60px] flex items-center justify-center z-10"
                            style={{
                                background: "linear-gradient(to left, rgba(30,41,59,0.1) 70%, rgba(30,41,59,0.0) 100%)"
                            }}
                        >
                            <span className="text-gray-100 text-3xl drop-shadow-lg">&#10095;</span>
                        </button>
                    </>
                )}
            </div>

            <div className="flex mt-2 space-x-2">
                {images.map((_, index) => (
                    <span 
                        key={index}
                        className={`h-3 w-3 rounded-full cursor-pointer ${
                            current === index ? 'bg-gray-500' : 'bg-gray-300'
                        }`}
                        onClick={() => {
                            setCurrent(index);
                            resetInterval();
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
import { useEffect, useState, useRef } from "react"
// 1. Importamos Link
import { Link } from "react-router-dom";

// Definimos una interfaz para que TypeScript sepa qué forma tienen nuestros objetos (opcional pero recomendado)
interface CarouselItem {
    src: string;
    alt: string;
    linkTo?: string; // La interrogación (?) significa que esta propiedad es opcional
}

// 2. Cambiamos el arreglo de strings por un arreglo de objetos
const carouselItems: CarouselItem[] = [
    { 
        src: "/carousel/Intersemestrales.png", 
        alt: "Cursos Intersemestrales",
        // ¡SOLO ESTE OBJETO TIENE EL LINK!
        linkTo: "/eventos/intersemestrales" 
    },
    { src: "/carousel/CiscoPlaca.jpeg", alt: "Placa Cisco" },
    { src: "/carousel/CiscoInicio1.png", alt: "Imagen del centro 1" },
    { src: "/carousel/CiscoInicio2.jpeg", alt: "Imagen del centro 2" },
    { src: "/carousel/CiscoInicio3.png", alt: "Imagen del centro 3" },
    { src: "/carousel/CiscoInicio4.png", alt: "Imagen del centro 4" },
    { src: "/carousel/CiscoInicio5.png", alt: "Imagen del centro 5" },
    { src: "/carousel/CiscoInicio6.png", alt: "Imagen del centro 6" }
]

export default function Carousel(){
    const [current, setCurrent] = useState(0)
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Obtenemos el ítem actual para usarlo más fácilmente en el renderizado
    const currentItem = carouselItems[current];

    const prev = () => {
        // Actualizamos la referencia de images a carouselItems
        setCurrent((prevCurrent) => (prevCurrent - 1 + carouselItems.length) % carouselItems.length);
        resetInterval();
    }
    const next = () => {
        // Actualizamos la referencia de images a carouselItems
        setCurrent((prevCurrent) => (prevCurrent + 1) % carouselItems.length);
        resetInterval();
    }

    const resetInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            // Actualizamos la referencia de images a carouselItems
            setCurrent((prevCurrent) => (prevCurrent + 1) % carouselItems.length);
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
                className="w-full max-w-5xl aspect-video flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} 
            >
                {/* 3. Renderizado Condicional: Verificamos si el ítem actual tiene link */}
                {currentItem.linkTo ? (
                    // SI TIENE LINK: Envolvemos la imagen en un componente Link
                    <Link to={currentItem.linkTo} className="w-full h-full">
                        <img 
                            src={currentItem.src} 
                            alt={currentItem.alt} 
                            // Añadimos cursor-pointer para indicar que es clickable
                            className="object-contain w-full h-full cursor-pointer" 
                        />
                    </Link>
                ) : (
                    // NO TIENE LINK: Renderizamos la imagen normal como antes
                    <img 
                        src={currentItem.src} 
                        alt={currentItem.alt} 
                        className="object-contain w-full h-full" 
                    />
                )}

                {isHovered && (
                    <>
                        <button
                            onClick={prev}
                            // (Tus estilos de botones siguen igual...)
                            className="absolute left-0 top-0 h-full w-[60px] flex items-center justify-center z-10"
                            style={{ background: "linear-gradient(to right, rgba(30,41,59,0.1) 70%, rgba(30,41,59,0.0) 100%)" }}
                        >
                            <span className="text-gray-100 text-3xl drop-shadow-lg">&#10094;</span>
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-0 h-full w-[60px] flex items-center justify-center z-10"
                            style={{ background: "linear-gradient(to left, rgba(30,41,59,0.1) 70%, rgba(30,41,59,0.0) 100%)" }}
                        >
                            <span className="text-gray-100 text-3xl drop-shadow-lg">&#10095;</span>
                        </button>
                    </>
                )}
            </div>

            <div className="flex mt-2 space-x-2">
                {/* Actualizamos la referencia a carouselItems */}
                {carouselItems.map((_, index) => (
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
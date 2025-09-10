import { useEffect, useState, useRef } from "react"

const images = [
    "/public/carousel/CiscoPlaca.jpeg",
    "/public/carousel/ebsite.png"
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
                className="w-full max-w-xl h-64 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} 
            >
                <img src={images[current]} alt={`Imagen ${current + 1}`} className="object-contain h-fit w-fit" />

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
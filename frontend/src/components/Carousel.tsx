import { useState } from "react"

const images = [
    "/public/carousel/CiscoPlaca.jpeg",
    "/public/carousel/ebsite.png"
]

export default function Carousel(){
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((current - 1 + images.length) % images.length)
    const next = () => setCurrent((current + 1 ) % images.length)

    return(
        <div className="flex fleex-col items-center mt-8">
            <div className="w-full max-w-xl h-64 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <img src={images[current]} alt={`Imagen ${current + 1}`} className="object-contain h-full w-full" />
            </div>
            <div className="flex mt-4 space-x-4">
                <button onClick={prev} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Anterior</button>
                <button onClick={next} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Siguiente</button>
            </div>
        </div>
    )
}
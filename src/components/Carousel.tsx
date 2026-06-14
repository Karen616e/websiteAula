import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi
} from "@/components/ui/carousel"

interface CarouselItem {
    type: 'image' | 'video';
    src: string;
    alt: string;
    linkTo?: string;
}

const carouselItems: CarouselItem[] = [
    {
        type: 'image',
        src: "/carousel/Intersemestrales.png",
        alt: "Cursos Intersemestrales",
        linkTo: "/eventos/intersemestrales"
    },
    { type: 'image', src: "/carousel/CiscoPlaca.jpeg", alt: "Placa Cisco" },
    { type: 'image', src: "/carousel/CiscoInicio1.png", alt: "Imagen del centro 1" },
    { type: 'image', src: "/carousel/CiscoInicio2.jpeg", alt: "Imagen del centro 2" },
    { type: 'image', src: "/carousel/CiscoInicio3.png", alt: "Imagen del centro 3" },
    { type: 'image', src: "/carousel/CiscoInicio4.png", alt: "Imagen del centro 4" },
    { type: 'image', src: "/carousel/CiscoInicio5.png", alt: "Imagen del centro 5" },
    { type: 'image', src: "/carousel/CiscoInicio6.png", alt: "Imagen del centro 6" },
    { type: 'video', src: "/carousel/ClasesAulaCisco.mp4", alt: "Video Info. clases impartidas" },
    { type: 'video', src: "/carousel/InfoAulaCisco.MOV", alt: "Video Info. relaciones AulaCisco" },
    { type: 'video', src: "/carousel/EquipamientoAulaCisco.MOV", alt: "Video Info. equipamiento del AulaCisco" },
    { type: 'video', src: "/carousel/SiteAulaCisco.MOV", alt: "Video sobre Site AulaCisco" },
    { type: 'video', src: "/carousel/ServicioAulaCisco.MOV", alt: "Video sobre Servicio Social AulaCisco" }
]

function VideoPlayer({ src, title, isActive }: { src: string, title: string, isActive: boolean }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [started, setStarted] = useState(false)
    const [paused, setPaused] = useState(false)
    const [muted, setMuted] = useState(false)
    const [progress, setProgress] = useState(0)

    // Al volverse activo, enfoca el contenedor para que spacebar funcione sin click previo
    useEffect(() => {
        if (isActive && started) {
            containerRef.current?.focus()
        }
    }, [isActive, started])

    // Cuando cambia el slide, resetea el video
    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        if (!isActive) {
            video.pause()
            video.currentTime = 0
            video.muted = false
            setStarted(false)
            setPaused(false)
            setMuted(false)
            setProgress(0)
        }
    }, [isActive])

    // Play inicial con sonido
    const handleStart = () => {
        const video = videoRef.current
        if (!video) return
        video.muted = false
        video.play()
        setStarted(true)
        setPaused(false)
        setMuted(false)
        containerRef.current?.focus()
    }

    // Click en el video una vez iniciado → pausa/reanuda
    const handleVideoClick = () => {
        const video = videoRef.current
        if (!video || !started) return
        if (video.paused) {
            video.play()
            setPaused(false)
        } else {
            video.pause()
            setPaused(true)
        }
    }

    const handleTimeUpdate = () => {
        const video = videoRef.current
        if (!video) return
        const percent = (video.currentTime / video.duration) * 100
        setProgress(percent)
    }

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current
        if (!video) return
        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const percent = clickX / rect.width
        video.currentTime = percent * video.duration
    }

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation() // evita que el click llegue al video
        const video = videoRef.current
        if (!video) return
        video.muted = !video.muted
        setMuted(video.muted)
    }

    const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation() // evita que el click llegue al video
        handleSeek(e)
    }

    // Spacebar pausa/reanuda sin propagar al carrusel
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.code === 'Space') {
            e.preventDefault()
            e.stopPropagation()
            const video = videoRef.current
            if (!video || !started) return
            if (video.paused) {
                video.play()
                setPaused(false)
            } else {
                video.pause()
                setPaused(true)
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full outline-none"
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-contain"
                loop
                playsInline
                title={title}
                onTimeUpdate={handleTimeUpdate}
                onClick={handleVideoClick}
                style={{ cursor: started ? 'pointer' : 'default' }}
            />

            {/* Botón de play central — antes de iniciar */}
            {!started && (
                <button
                    onClick={handleStart}
                    className="absolute inset-0 flex items-center justify-center"
                    title="Reproducir con sonido"
                >
                    <div className="bg-black/40 hover:bg-black/60 transition-colors rounded-full p-5 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </button>
            )}

            {/* Ícono de pausa/play al centro cuando está pausado */}
            {started && paused && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/40 rounded-full p-5 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Controles overlay en la parte inferior */}
            {started && (
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/40 to-transparent flex items-center gap-3">
                    <button
                        onClick={toggleMute}
                        className="text-white hover:text-gray-200 transition-colors flex-shrink-0"
                        title={muted ? "Activar sonido" : "Silenciar"}
                    >
                        {muted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13 3.586L7.707 8.879A1 1 0 017 9H4a1 1 0 00-1 1v4a1 1 0 001 1h3a1 1 0 01.707.293L13 20.414V3.586zM11 1.172a2 2 0 012.414-.39A2 2 0 0114 2.586v18.828a2 2 0 01-3.414 1.414L5.172 17H4a3 3 0 01-3-3v-4a3 3 0 013-3h1.172L10.586 1.586A2 2 0 0111 1.172zM18.364 5.636a1 1 0 011.414 0A9.956 9.956 0 0122 12a9.956 9.956 0 01-2.222 6.364 1 1 0 01-1.414-1.414A7.956 7.956 0 0020 12a7.956 7.956 0 00-1.636-4.95 1 1 0 010-1.414zM2 2L22 22" />
                                <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13 3.586L7.707 8.879A1 1 0 017 9H4a1 1 0 00-1 1v4a1 1 0 001 1h3a1 1 0 01.707.293L13 20.414V3.586zM11 1.172a2 2 0 012.414-.39A2 2 0 0114 2.586v18.828a2 2 0 01-3.414 1.414L5.172 17H4a3 3 0 01-3-3v-4a3 3 0 013-3h1.172L10.586 1.586A2 2 0 0111 1.172zM15.536 8.464a1 1 0 011.414 0A5 5 0 0118.5 12a5 5 0 01-1.55 3.536 1 1 0 01-1.414-1.414A3 3 0 0016.5 12a3 3 0 00-.964-2.122 1 1 0 010-1.414z" />
                            </svg>
                        )}
                    </button>

                    <div
                        className="flex-1 h-1.5 bg-white/40 rounded-full cursor-pointer relative"
                        onClick={handleBarClick}
                    >
                        <div
                            className="h-1.5 bg-white rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default function MyCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) return
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const renderMedia = (item: CarouselItem, index: number) => {
        const className = `object-contain w-full h-full ${item.linkTo ? 'cursor-pointer' : ''}`;

        if (item.type === 'video') {
            return <VideoPlayer src={item.src} title={item.alt} isActive={current === index} />
        }

        return (
            <img
                src={item.src}
                alt={item.alt}
                className={className}
            />
        );
    };

    return (
        <div className="flex flex-col items-center mt-20 w-full">
            <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                className="w-full max-w-5xl"
            >
                <CarouselContent>
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mx-4">
                                {item.linkTo ? (
                                    <Link to={item.linkTo} className="w-full h-full block">
                                        {renderMedia(item, index)}
                                    </Link>
                                ) : (
                                    renderMedia(item, index)
                                )}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="flex mt-3 space-x-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full transition-colors ${
                            current === index ? 'bg-gray-500' : 'bg-gray-300'
                        }`}
                        onClick={() => api?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}

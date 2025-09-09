import Carousel from "../components/Carousel";

export default function Inicio() {
  return (
    <div className="relative max-h-max w-full overflow-hidden p-28">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50 z-2" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-black px-4">
        <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-center mb-6">
          Aula Híbrida Cisco
        </h1>
        <p className="font-sans text-lg md:text-4xl text-center max-w-6xl font-extralight">
          Nuestra Aula Híbrida es un espacio de aprendizaje innovador diseñado para brindar
          una experiencia educativa de altacalidad que combina lo mejor de la enseñanza presencial
          como a distancia. Esta modalidad de enseñanza busca adaptarse a las necesidades
          cambiantes de los estudiantes y profesores, ofreciendo flexibilidad y accesibilidad
          sin comprometer la calidad educativa.
        </p>
        <Carousel />
      </div>
    </div>
    
    
  )
}

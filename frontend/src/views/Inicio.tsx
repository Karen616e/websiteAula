import Carousel from "../components/Carousel";
import MissionText from "../components/MissionText";

export default function Inicio() {
  return (
    <div className="w-full">
      
      {/* --- PARTE 1: HERO CON IMAGEN PARALLAX --- */}
      <div 
        className="relative flex items-center justify-center h-screen bg-cover bg-fixed bg-center"
        // Usamos linear-gradient para el overlay oscuro + la imagen desde la carpeta public
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('/main-page/cisco-main.jpg')
          `
        }}
      >
        
        {/* Contenido del Hero (Texto blanco) */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-white mb-6">
            Aula Híbrida Cisco
          </h1>
          <p className="font-sans text-lg md:text-2xl max-w-6xl font-extralight text-gray-200">
            Nuestra Aula Híbrida es un espacio de aprendizaje innovador diseñado para brindar
            una experiencia educativa de alta calidad que combina lo mejor de la enseñanza presencial
            como a distancia. Esta modalidad de enseñanza busca adaptarse a las necesidades
            cambiantes de los estudiantes y profesores, ofreciendo flexibilidad y accesibilidad
            sin comprometer la calidad educativa.
          </p>
        </div>
      </div>

      {/* --- PARTE 2: CONTENIDO PRINCIPAL (Fondo Blanco) --- */}
      {/* Este z-index (20) es mayor que el del hero (10) para que pase por encima al hacer scroll */}
      <div className="relative z-20 bg-white p-4 md:p-28">
        <div className="flex flex-col items-center justify-center h-full text-black">
          
          <Carousel />
          
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-center mb-3 mt-20">
            Misiones
          </h1>
          
          <MissionText
            title="Enseñanza Híbrida"
            content="Nuestra misión es proporcionar una experiencia educativa de alta calidad que combine lo mejor de la enseñanza presencial y a distancia, adaptándonos a las necesidades cambiantes de los estudiantes y profesores. Buscamos fomentar un entorno de aprendizaje inclusivo, accesible y flexible, utilizando tecnología avanzada para facilitar la interacción y colaboración entre todos los participantes."
            imageUrl="/inicio/examen.png"
            imagePosition="right"
            buttonText="Conocer las clases"
            buttonLink="/clases"
          />

          <MissionText
            title="Flexibilidad y Accesibilidad"
            content="Reconocemos que la vida de los estudiantes puede ser ocupada y a menudo impredecible. La modalidad híbrida permite a nuestros estudiantes asistir a clases en persona o participar en línea según sus necesidades individuales, lo que facilita el equilibrio entre sus responsabilidades académicas y personales."
            imageUrl="/inicio/computacion.png"
            imagePosition="left"
            buttonText="Conocer a los coordinadores"
            buttonLink="/plantilla/coordinacion"
          />

          <MissionText
            title="Colaboración y Comunidad"
            content="Fomentamos la colaboración entre estudiantes, profesores y la industria. Nuestro entorno híbrido promueve la interacción tanto en línea como en el aula, permitiendo a los estudiantes aprender y compartir ideas con sus compañeros y expertos en el campo de la computación."
            imageUrl="/inicio/trabajo-en-equipo.png"
            imagePosition="right"
            buttonText="Conocer la plantilla"
            buttonLink="/plantilla/profesores"
          />
        </div>
      </div>
    </div>
  );
}
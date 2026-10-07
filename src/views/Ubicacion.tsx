// src/views/Ubicacion.tsx
import FadeIn from '../components/FadeIn'; // <-- IMPORTANTE

export default function Ubicacion() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      
      {/* Envolvemos todo el contenido de la tarjeta en FadeIn */}
      <FadeIn direction="up" delay={0.2}>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16 text-center">
          <h3 className="text-blue-600 font-bold text-xl md:text-2xl mb-4">
            ¿Dónde Estamos?
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
            Ubicación
          </h1>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            El Aula Híbrida CISCO se encuentra en el segundo piso del edificio Q (Ing. Luis G. Valdés Vallejo) de la División de Ingeniería Eléctrica, FI, UNAM.
          </p>

          <div className="w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.950647668104!2d-99.18696551493433!3d19.327947735335023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce000453108fe9%3A0xefb9ac808d9135b2!2sEdificio%20Q%20%22Luis%20G.%20Vald%C3%A9s%20Vallejo%22!5e0!3m2!1ses!2smx!4v1768330136021!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Aula CISCO"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

      </FadeIn>
    </div>
  );
}
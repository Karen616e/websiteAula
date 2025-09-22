export default function Ubicacion() {
    return (
        <div className="relative max-h-max w-full overflow-hidden p-28">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50 z-2" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-black px-4">

        <h1 className="text-2xl font-semibold">
         Ubicación
        </h1>

        <p className="font-sans text-lg md:text-2xl text-center max-w-4xl font-extralight mb-10">
        El Aula Híbrida CISCO se encuentra en el segundo piso del edificio Q (Ing. Luis G. Valdés Vallejo) de la División de Ingeniería Eléctrica, FI, UNAM.
        </p>

        {/* Mapa */}
        <div className="w-full max-w-6xl h-[500px] rounded-lg overflow-hidden shadow-lg">
        <iframe
        title="Mapa de ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.950646594221!2d-99.18466952396894!3d19.327947781929208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce000453108fe9%3A0xefb9ac808d9135b2!2sEdificio%20Q%20%22Luis%20G.%20Vald%C3%A9s%20Vallejo%22!5e0!3m2!1ses!2smx!4v1758496304591!5m2!1ses!2smx"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
        </div>

        </div>
        </div>
    );
}

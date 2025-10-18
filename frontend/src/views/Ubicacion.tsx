export default function Ubicacion() {
    return (
        // 1. Contenedor principal con fondo blanco y padding vertical
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* 2. Bloque de título centrado (mismo estilo que las páginas de eventos) */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">¿Dónde Estamos?</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Ubicación
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        El Aula Híbrida CISCO se encuentra en el segundo piso del edificio Q (Ing. Luis G. Valdés Vallejo) de la División de Ingeniería Eléctrica, FI, UNAM.
                    </p>
                </div>

                {/* 3. Contenedor del mapa */}
                {/* Usamos max-w-7xl para que sea ancho, y le damos sombra y bordes redondeados */}
                <div className="mx-auto mt-16 max-w-7xl">
                    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <iframe
                            title="Mapa de ubicación"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.950646594221!2d-99.18466952396894!3d19.327947781929208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce000453108fe9%3A0xefb9ac808d9135b2!2sEdificio%20Q%20%22Luis%20G.%20Vald%C3%A9s%20Vallejo%22!5e0!3m2!1ses!2smx!4v1758496304591!5m2!1ses!2smx" // Nota: Esta URL parece un marcador de posición, asegúrate de que sea la correcta.
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
        </div>
    );
}
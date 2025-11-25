// src/router.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Inicio from "./views/Inicio";

import HeaderAndFooter from "./layouts/HeaderAndFooter";
import Clases from "./views/Clases";
import HeaderAndForMain from "./layouts/HeaderAndForMain";
import Profesores from "./views/plantilla/Profesores";
import Coordinacion from "./views/plantilla/Coordinacion";
import Ubicacion from "./views/Ubicacion";
import AlgoDay from "./views/eventos/AlgoDay";
import AlgoRand from "./views/eventos/AlgoRand";
import Inauguracion from "./views/eventos/Inauguracion";
import Intersemestrales from "./views/eventos/Intersemestrales";

// 1. IMPORTAMOS EL NUEVO COMPONENTE
import ScrollToTop from "./components/ScrollToTop";

export default function Router(){
    return(
    <BrowserRouter>
        {/* 2. LO COLOCAMOS AQUÍ, DENTRO DEL ROUTER PERO FUERA DE ROUTES */}
        {/* Esto asegura que detecte los cambios en cualquier ruta */}
        <ScrollToTop />

        <Routes>
            {/* Redirección automática de la raíz a /inicio */}
            <Route path="/" element={<Navigate to="/inicio" replace />} />

            <Route element={<HeaderAndForMain />}>
                <Route path='/inicio' element={<Inicio />} />
            </Route>

            <Route element={<HeaderAndFooter />}>
                {/* --- SECCIÓN CLASES --- */}
                <Route path='/clases' element={<Clases />} />

                {/* --- SECCIÓN PLANTILLA --- */}
                <Route path='/plantilla/profesores' element={<Profesores />} />
                <Route path='/plantilla/coordinacion' element={<Coordinacion />} />

                {/* --- OTRAS RUTAS --- */}
                <Route path='/ubicacion' element={<Ubicacion />} />

                {/* --- RUTAS DE EVENTOS --- */}
                <Route path='/eventos/algoday' element={<AlgoDay />} />
                <Route path='/eventos/algorand' element={<AlgoRand />} />
                <Route path='/eventos/inauguracion' element={<Inauguracion />} />
                <Route path='/eventos/intersemestrales' element={<Intersemestrales />} />
            </Route>

            {/* Ruta catch-all para errores 404, redirige a inicio */}
            <Route path='*' element={<Navigate to="/inicio" replace />} />

        </Routes>
    </BrowserRouter>
    )
}
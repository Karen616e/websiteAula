<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from "react-router";
=======
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
>>>>>>> Stashed changes
import Inicio from "./views/Inicio";

import HeaderAndFooter from "./layouts/HeaderAndFooter";
import Clases from "./views/Clases";
import HeaderAndForMain from "./layouts/HeaderAndForMain";
<<<<<<< Updated upstream
import Profesores from "./views/Profesores";
import Coordinacion from "./views/Coordinacion";
=======
import Profesores from "./views/plantilla/Profesores";
import Coordinacion from "./views/plantilla/Coordinacion";
import Ubicacion from "./views/Ubicacion";
import AlgoDay from "./views/eventos/AlgoDay";
import AlgoRand from "./views/eventos/AlgoRand";
import Inauguracion from "./views/eventos/Inauguracion";
import Intersemestrales from "./views/eventos/Intersemestrales";   
import ScrollToTop from "./components/ScrollToTop"; 
>>>>>>> Stashed changes

export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            {/* REDIRECCIÓN AUTOMÁTICA:
               CUANDO LA RUTA ES "/" REDIRIGE A "/inicio" */}
            <Route path="/" element={<Navigate to="/inicio" replace />} />

            <Route element={<HeaderAndForMain />}>
                <Route path='/inicio' element={<Inicio />} />
            </Route>

            <Route element={<HeaderAndFooter />}>
                {/* --- SECCIÓN CLASES --- */}
                <Route path='/clases' element={<Clases />} />
<<<<<<< Updated upstream
                <Route path='/profesores' element={<Profesores />} />
                <Route path='/coordinacion' element={<Coordinacion />} />
            </Route> 
=======

                {/* --- SECCIÓN PLANTILLA --- */}
                <Route path='/plantilla/profesores' element={<Profesores />} />
                <Route path='/plantilla/coordinacion' element={<Coordinacion />} />

                {/* --- OTRAS RUTAS --- */}
                <Route path='/ubicacion' element={<Ubicacion />} />
                <Route path='/eventos/algoday' element={<AlgoDay />} />
                <Route path='/eventos/algorand' element={<AlgoRand />} />
                <Route path='/eventos/inauguracion' element={<Inauguracion />} />
                <Route path='/eventos/intersemestrales' element={<Intersemestrales />} />
            </Route>

            {/* Ruta "Catch-all" para errores 404 */}
            <Route path='*' element={<Navigate to="/inicio" replace />} />
>>>>>>> Stashed changes
        </Routes>
    </BrowserRouter>
    )
}
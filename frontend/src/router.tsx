// router.tsx
import { BrowserRouter, Routes, Route } from "react-router";
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
import ScrollToTop from "./components/ScrollToTop"; 

export default function Router(){
    return(
    <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
            <Route element={<HeaderAndForMain />}>
                <Route path='/inicio' element={<Inicio />} />
            </Route>
            <Route element={<HeaderAndFooter />}>
                <Route path='/clases' element={<Clases />} />
                <Route path='/plantilla/profesores' element={<Profesores />} />
                <Route path='/plantilla/coordinacion' element={<Coordinacion />} />
                <Route path='/ubicacion' element={<Ubicacion />} />
                <Route path='/eventos/algoday' element={<AlgoDay />} />
                <Route path='/eventos/algorand' element={<AlgoRand />} />
                <Route path='/eventos/inauguracion' element={<Inauguracion />} />
            </Route>
            <Route path='*' element={<Inicio />}>
            </Route> 
        </Routes>
    </BrowserRouter>
    )
}
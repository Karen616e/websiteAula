// router.tsx
import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./views/Inicio";
import HeaderAndFooter from "./layouts/HeaderAndFooter";
import Clases from "./views/Clases";
import HeaderAndForMain from "./layouts/HeaderAndForMain";
import Profesores from "./views/Profesores";
import Coordinacion from "./views/Coordinacion";
import Ubicacion from "./views/Ubicacion";
import ScrollToTop from "./components/ScrollToTop"; // Importa el componente

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
                <Route path='/profesores' element={<Profesores />} />
                <Route path='/coordinacion' element={<Coordinacion />} />
                <Route path='/ubicacion' element={<Ubicacion />} />
            </Route> 
        </Routes>
    </BrowserRouter>
    )
}
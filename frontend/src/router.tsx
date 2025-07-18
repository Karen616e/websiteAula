import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./views/Inicio";

import HeaderAndFooter from "./layouts/HeaderAndFooter";
import Clases from "./views/Clases";
import Coordinacion from "./views/Coordinacion";
import Profesores from "./views/Profesores";

export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<HeaderAndFooter />}>
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/clases' element={<Clases />} />
                <Route path='/coordinacion' element={<Coordinacion />} />
                <Route path='/profesores' element={<Profesores />} />
            </Route> 
        </Routes>
    </BrowserRouter>
    )
}
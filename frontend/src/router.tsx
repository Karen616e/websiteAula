import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./views/Inicio";

import HeaderAndFooter from "./layouts/HeaderAndFooter";
import Clases from "./views/Clases";

export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<HeaderAndFooter />}>
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/clases' element={<Clases />} />
            </Route> 
        </Routes>
    </BrowserRouter>
    )
}
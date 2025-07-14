import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./views/Inicio";
import HeaderAndFooter from "./layouts/HeaderAndFooter";

export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<HeaderAndFooter />}>
                <Route path='/inicio' element={<Inicio />} />
            </Route> 
        </Routes>
    </BrowserRouter>
    )
}
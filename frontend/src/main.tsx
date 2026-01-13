import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';

// --- LAYOUTS ---
import HeaderAndForMain from './layouts/HeaderAndForMain';   // Layout especial para Inicio
import HeaderAndFooter from './layouts/HeaderAndFooter';     // Layout estándar para páginas internas

// --- COMPONENTES DE UTILIDAD ---
import ScrollToTop from './components/ScrollToTop'; // <--- 1. IMPORTANTE: Importamos el componente de scroll

// --- VISTAS (PÁGINAS) ---
import App from './views/Inicio'; // Página de Inicio
import Clases from './views/Clases';
import Ubicacion from './views/Ubicacion';

// Eventos
import AlgoRand from './views/eventos/AlgoRand';
import Intersemestrales from './views/eventos/Intersemestrales';
import AlgoDay from './views/eventos/AlgoDay';
import Inauguracion from './views/eventos/Inauguracion';

// Plantilla
import Coordinacion from './views/plantilla/Coordinacion';
import Profesores from './views/plantilla/Profesores';

// Errores
import NotFound from './views/NotFound';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      
      {/* 2. IMPORTANTE: Colocamos ScrollToTop aquí, antes de las rutas */}
      {/* Esto asegura que cada vez que cambies de página, la vista empiece desde arriba */}
      <ScrollToTop />

      <Routes>
        
        {/* --- GRUPO 1: PORTADA (Header Transparente/Oscuro) --- */}
        <Route element={<HeaderAndForMain />}>
          {/* Si entran a la raíz "/", redirigir a "/inicio" */}
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="inicio" element={<App />} />
        </Route>

        {/* --- GRUPO 2: PÁGINAS INTERNAS (Header Blanco + Breadcrumbs) --- */}
        <Route element={<HeaderAndFooter />}>
          <Route path="clases" element={<Clases />} />
          <Route path="ubicacion" element={<Ubicacion />} />
          
          {/* Rutas de Eventos */}
          <Route path="eventos/algorand" element={<AlgoRand />} />
          <Route path="eventos/intersemestrales" element={<Intersemestrales />} /> 
          <Route path="eventos/algoday" element={<AlgoDay />} /> 
          <Route path="eventos/inauguracion" element={<Inauguracion />} /> 

          {/* Rutas de Plantilla */}
          <Route path="plantilla/coordinacion" element={<Coordinacion />} /> 
          <Route path="plantilla/profesores" element={<Profesores />} /> 

          {/* --- RUTA DE ERROR 404 --- */}
          {/* El '*' atrapa cualquier ruta que no coincida con las anteriores */}
          {/* IMPORTANTE: Debe ir al final de este grupo */}
          <Route path="*" element={<NotFound />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Este componente no renderiza nada visualmente.
 * Su único trabajo es escuchar los cambios de ruta y
 * hacer scroll hasta arriba de la ventana.
 */
export default function ScrollToTop() {
  // useLocation nos da información sobre la URL actual
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que 'pathname' cambia, ejecutamos esto:
    // window.scrollTo(0, 0) mueve la ventana a la posición x=0, y=0 (arriba a la izquierda)
    window.scrollTo(0, 0);

    // Si prefieres un scroll suave, puedes usar esto en su lugar,
    // aunque para cambios de página suele ser mejor el instantáneo:
    // window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [pathname]); // <-- El array de dependencias [pathname] asegura que esto se ejecute solo cuando cambia la ruta

  return null;
}
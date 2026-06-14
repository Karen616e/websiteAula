// src/views/Clases.tsx
import { useState } from 'react';
import ClaseCard from "../components/ClaseCard";
import clases, { type Clase } from "../data/clasesData";
// Importamos el Modal
import ClaseModal from '../components/ClaseModal';

export default function Clases() {
  // Estado para saber qué clase está seleccionada. Si es null, el modal está cerrado.
  const [selectedClase, setSelectedClase] = useState<Clase | null>(null);

  // Función para abrir el modal con una clase específica
  const handleOpenModal = (clase: Clase) => {
    setSelectedClase(clase);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedClase(null);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Título de la sección (Opcional) */}
       <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Clases</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explora la oferta académica diseñada para potenciar tus habilidades en el área de computación.
        </p>
      </div>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clases.map((clase) => (
          <ClaseCard
            key={clase.slug}
            clase={clase}
            // Pasamos la función que abre el modal con ESTA clase
            onCardClick={() => handleOpenModal(clase)}
          />
        ))}
      </div>

      {/* MODAL (Renderizado condicional) */}
      {/* Solo se muestra si selectedClase NO es null */}
      {selectedClase && (
        <ClaseModal
          clase={selectedClase}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
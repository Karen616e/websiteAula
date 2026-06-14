import { XMarkIcon } from '@heroicons/react/20/solid';

type FlyerModalProps = {
  imageUrl: string;
  onClose: () => void;
};

export default function FlyerModal({ imageUrl, onClose }: FlyerModalProps) {
  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button 
        onClick={onClose}
        className="absolute top-5 right-5 text-white hover:text-gray-300 z-50"
      >
        <XMarkIcon className="h-10 w-10" />
      </button>

      {/* Imagen Grande */}
      <img 
        src={imageUrl} 
        alt="Flyer completo" 
        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()} // Evita cerrar si das clic a la imagen
      />
    </div>
  );
}
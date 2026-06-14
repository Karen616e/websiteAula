
export interface Flyer {
  id: number;
  title: string; // Para el atributo 'alt'
  imageUrl: string;
}

const flyers: Flyer[] = [
  { id: 1, title: 'Introducción a Python', imageUrl: '/events/intersemestrales/1.jpg' },
  { id: 2, title: 'Introducción a las bases de datos', imageUrl: '/events/intersemestrales/2.jpg' },
  { id: 3, title: 'Contenedores', imageUrl: '/events/intersemestrales/3.jpg' },
  { id: 4, title: 'Introducción a la programacion con Lenguaje C', imageUrl: '/events/intersemestrales/4.jpg' },
  { id: 5, title: 'Introducción a React', imageUrl: '/events/intersemestrales/5.jpg' }
];

export default flyers;
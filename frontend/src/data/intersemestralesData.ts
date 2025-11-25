
export interface Flyer {
  id: number;
  title: string; // Para el atributo 'alt'
  imageUrl: string;
}

const flyers: Flyer[] = [
  { id: 1, title: 'Desarrollo web', imageUrl: '/events/intersemestrales/1.png' },
  { id: 2, title: 'Contenedores', imageUrl: '/events/intersemestrales/2.png' },
  { id: 3, title: 'Introducción a las bases de datos', imageUrl: '/events/intersemestrales/3.png' },
  { id: 4, title: 'LaTex', imageUrl: '/events/intersemestrales/4.png' },
  { id: 5, title: 'Introducción a Linux', imageUrl: '/events/intersemestrales/5.png' },
  { id: 6, title: 'Introducción a la nube', imageUrl: '/events/intersemestrales/6.png' },
  { id: 7, title: 'Python Básico', imageUrl: '/events/intersemestrales/7.png' },
  { id: 8, title: 'Python Intermedio', imageUrl: '/events/intersemestrales/8.png' },
  { id: 9, title: 'Python Avanzado', imageUrl: '/events/intersemestrales/9.png' },
  { id: 10, title: 'Introducción al Blockchain', imageUrl: '/events/intersemestrales/10.png' },
];

export default flyers;
// src/data/clasesData.ts

export interface Clase {
  slug: string;
  title: string;
  fullTitle: string;
  objetivo: string;
  resumen: string;
  imageUrl: string;
  schedule: string[];
  planUrl?: string; // URL para el botón "Plan de la materia"
  temarioPdfUrl?: string; // URL para el PDF del "Temario del Curso"
  websiteUrl?: string; // URL para el botón "Sitio web oficial"
}

const clases: Clase[] = [
  {
    slug: 'criptografia',
    title: 'Criptografía',
    fullTitle: 'Criptografía',
    objetivo: 'El alumno conocerá, explicará y aplicará los diferentes algoritmos criptográficos, metodologías y técnicas de cifrado que le permitan analizar, diseñar, desarrollar y/o seleccionar mecanismos y herramientas de seguridad de manera ética y profesional orientados a brindar seguridad informática, cuidando en todo momento que el trabajo realizado se enfoque al bienestar social.',
    resumen: 'A medida que la digitalización de los servicios y el consecuente uso de Internet han ido creciendo hasta convertirse en una parte integral de nuestras vidas, el desarrollo de la criptografía se ha convertido en un requisito esencial sin el cual esta digitalización no puede ser una realidad. La criptografía es parte fundamental de la correcta ejecución de las transacciones en Internet y una herramienta clave para proteger a la población del mal uso de sus datos y recursos. Al mismo tiempo, el gran éxito de esta digitalización, en la mayoría de los sectores industriales y gubernamentales, los ha convertido en un blanco propicio para el abuso por parte de entidades hostiles, que se aprovechan de los fallos técnicos y humanos para comprometer los sistemas y robar información privada y financiera. Por esta razón, el conocimiento de la criptografía, como mecanismo base de la seguridad de la información por parte de los estudiantes universitarios, es un elemento esencial en su formación como ingenieros, ya que les permitirá reconocer los diferentes algoritmos y protocolos criptográficos a través de las distintas metodologías y técnicas criptográficas orientadas a brindar seguridad informática.',
    imageUrl: '/class_material/cripto.jpg',
    schedule: [
      'Martes y Jueves de 13:00 a 15:00 hrs (Dra. Rocio Aldeco Pérez).',
      'Lunes y Viernes de 19:00 a 21:00 hrs (Dra. Melissa Brigitte Hinojosa Cabello).'
    ],
    //planUrl: 'https://www.rocioaldeco.com/home/teaching/criptograf%C3%ADa',
    temarioPdfUrl: '/class_material/criptografia.pdf', 
  },
  {
    slug: 'club-programacion-competitiva',
    title: 'Club de Programación Competitiva',
    fullTitle: 'Club de Programación Competitiva (CPCFI)',
    objetivo: 'El alumno será un programador competitivo con un alto razonamiento lógico-matemático, capaz de resolver problemas en el menor tiempo posible.',
    resumen: 'La misión del club es reunir a entusiastas de la programación capaces de desarrollar soluciones en tiempos reducidos y bajo presión, orientados a participar en competencias nacionales e internacionales. Su visión se centra en formar programadores altamente competentes, con sólidos niveles de abstracción y habilidades técnicas, fomentando la integración de la comunidad interesada en alcanzar el reconocimiento como programadores competitivos, mientras dedican su tiempo a resolver problemas complejos, analizar errores y optimizar sus soluciones.',
    imageUrl: '/class_material/cpcfi.png',
    schedule: ['Lunes a  Jueves de 15:00 a 17:00 hrs. Sábado de 9:00 a 14:00 hrs.'],
    websiteUrl: 'http://www.cpcfi.unam.mx:3000/',

  },
  {
    slug: 'compiladores',
    title: 'Compiladores',
    fullTitle: 'Compiladores',
    objetivo: 'El alumno explicará y usará las herramientas y técnicas que le permitan diseñar  y construir compiladores.',
    resumen: 'En esta materia, los estudiantes exploran el diseño y la construcción de traductores y compiladores, herramientas esenciales para el desarrollo de sistemas de software. El curso abarca el proceso completo de compilación, desde el análisis léxico, sintáctico y semántico, hasta la generación de código intermedio, su optimización y la organización de la memoria en tiempo de ejecución. Se estudian a fondo las gramáticas formales (como LL y LR) y las técnicas de traducción dirigida por sintaxis. Esta asignatura permite al alumno comprender cómo se transforma el código fuente en código máquina, capacitándolo para crear software más eficiente y adecuado al tipo de problema por resolver, siendo fundamental para su formación como ingeniero en computación.',
    imageUrl: '/class_material/compiladores.jpg', 
    schedule: ['Martes y Jueves de 19:00 a 21:00 hrs (Dra. Melissa Brigitte Hinojosa Cabello).'],
    //planUrl: '/class_material/plan_seminariotitulacion.pdf',
    temarioPdfUrl: '/class_material/Compiladores.pdf', 
  },
  {
    slug: 'temas-selectos-3',
    title: 'Temas Selectos de Ingenieria en Computaciòn III',
    fullTitle: 'Realidad Virtual y Realidad Aumentada',
    objetivo: 'El alumno combinará las técnicas de la computación gráfica, para aplicar a los campos de profundización de la realidad virtual y la realidad aumentada. Así también conocer las diferentes aplicaciones que puede tener la implementación de dichas tecnologías.',
    resumen: 'Las diferentes áreas de especialización que forman parte del cómputo gráfico pueden estudiarse y analizarse desde varios puntos de vista de sus aplicaciones; es decir, todas las metodologías y técnicas en las que se basa el cómputo gráfico resultan en aplicaciones de ingeniería que abarcan desde el modelado 3D hasta la visualización de estructuras complejas. En este curso se estudian los diferentes retos que se presentan en el cómputo gráfico y cómo atacarlos usando hardware y software especializados. El curso contiene elementos teóricos y prácticos del uso de realizad virtual y aumentada que apoyan en la resolución de problemas y optimización de recursos para diversas actividades..',
    imageUrl: '/class_material/TSIC.png', 
    schedule: ['Lunes y Miercoles de 13:00 a 15:00 hrs. (Ing. Arturo Pèrez de la Cruz)'],
    //planUrl: '/class_material/plan_seminariotitulacion.pdf',
    temarioPdfUrl: '/class_material/TSIC-III.pdf', 
  },
];

export default clases;
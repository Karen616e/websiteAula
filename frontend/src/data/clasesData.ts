// src/data/clasesData.ts

export interface Clase {
  slug: string;
  title: string;
  fullTitle: string;
  objetivo: string;
  resumen: string;
  imageUrl: string;
  schedule: string;
  planUrl?: string; // URL para el botón "Plan de la materia"
  temarioPdfUrl?: string; // URL para el PDF del "Temario del Curso"
  websiteUrl?: string; // URL para el botón "Sitio web oficial"
}

const clases: Clase[] = [
  {
    slug: 'criptografia',
    title: 'Criptografía',
    fullTitle: 'Criptografía y Seguridad Informática',
    objetivo: 'El objetivo de esta clase de criptografía es capacitar a los estudiantes universitarios para comprender, aplicar y evaluar de manera crítica los principios, algoritmos y protocolos criptográficos utilizados en la protección de datos y sistemas en un entorno digital. Los estudiantes adquirirán un profundo conocimiento de la criptografía como una herramienta esencial para garantizar la confidencialidad, integridad y autenticidad de la información en línea, y estarán preparados para identificar y abordar las amenazas a la seguridad informática mediante la implementación de soluciones criptográficas efectivas. Al finalizar la clase, los estudiantes serán capaces de evaluar y seleccionar apropiadamente las técnicas criptográficas más adecuadas para diferentes contextos y contribuirán al fortalecimiento de la seguridad de la información en la era digital.',
    resumen: 'A medida que la digitalización de los servicios y el consecuente uso de Internet han ido creciendo hasta convertirse en una parte integral de nuestras vidas, el desarrollo de la criptografía se ha convertido en un requisito esencial sin el cual esta digitalización no puede ser una realidad. La criptografía es parte fundamental de la correcta ejecución de las transacciones en Internet y una herramienta clave para proteger a la población del mal uso de sus datos y recursos. Al mismo tiempo, el gran éxito de esta digitalización, en la mayoría de los sectores industriales y gubernamentales, los ha convertido en un blanco propicio para el abuso por parte de entidades hostiles, que se aprovechan de los fallos técnicos y humanos para comprometer los sistemas y robar información privada y financiera. Por esta razón, el conocimiento de la criptografía, como mecanismo base de la seguridad de la información por parte de los estudiantes universitarios, es un elemento esencial en su formación como ingenieros, ya que les permitirá reconocer los diferentes algoritmos y protocolos criptográficos a través de las distintas metodologías y técnicas criptográficas orientadas a brindar seguridad informática.',
    imageUrl: '/public/class_material/criptografia.png',
    schedule: 'Martes a jueves de 13:00 a 15:00 hrs.',
    planUrl: 'https://www.rocioaldeco.com/home/teaching/criptograf%C3%ADa',
    temarioPdfUrl: '/public/class_material/temario_criptografia.pdf', 
  },
  {
    slug: 'club-programacion-competitiva',
    title: 'Club de programación competitiva',
    fullTitle: 'Club de Programación Competitiva (CPCFCI)',
    objetivo: 'El alumno será un programador competitivo con un alto razonamiento lógico-matemático, capaz de resolver problemas en el menor tiempo posible.',
    resumen: 'La misión del club es reunir a entusiastas de la programación capaces de desarrollar soluciones en tiempos reducidos y bajo presión, orientados a participar en competencias nacionales e internacionales. Su visión se centra en formar programadores altamente competentes, con sólidos niveles de abstracción y habilidades técnicas, fomentando la integración de la comunidad interesada en alcanzar el reconocimiento como programadores competitivos, mientras dedican su tiempo a resolver problemas complejos, analizar errores y optimizar sus soluciones.',
    imageUrl: '/public/class_material/cpcfi.png',
    schedule: 'Lunes a jueves de 15:00 a 17:00 hrs. Sábado de 9:00 a 13:00 hrs.',
    websiteUrl: 'http://www.cpcfi.unam.mx:3000/',

  },
  {
    slug: 'seminario-titulacion',
    title: 'Seminario de titulación',
    fullTitle: 'Seminario de titulación para ingenieros en computación',
    objetivo: 'El alumno aplicará en conjunto los conocimientos adquiridos durante los estudios profesionales en la identificación, definición y generación de propuestas de solución de un problema de investigación o de naturaleza práctica, de preferencia original, en el área de ingeniería en computación. El alumno elaborará un reporte detallado que incluya fundamentación, metodología, resultados obtenidos y bibliografía. Este documento servirá como anteproyecto del trabajo de tesis profesional.',
    resumen: 'En esta materia, los estudiantes desarrollan su proyecto de titulación siguiendo un proceso estructurado que les permite identificar un problema, investigar su contexto y plantear una solución viable. El curso comienza con la identificación y definición del problema, donde el estudiante analiza su relevancia, justificación y viabilidad. Posteriormente, realiza una búsqueda bibliográfica para conocer el estado del arte y comprender las soluciones existentes. Con esta información, el alumno plantea un método de solución fundamentado y detalla los procedimientos a seguir. Luego, aplica el método seleccionado y documenta cada etapa, obteniendo resultados preliminares que compara con las expectativas iniciales. Finalmente, se establecen posibles líneas de desarrollo futuro y se elabora un reporte detallado con todos los hallazgos y conclusiones. Este documento servirá como base para la tesis y será fundamental para la evaluación de la materia.',
    imageUrl: '/public/class_material/seminario.png', 
    schedule: 'Viernes de 9:00 a 12:00 hrs.',
    planUrl: '/public/class_material/plan_seminariotitulacion.pdf',
    temarioPdfUrl: '/public/class_material/temario_seminariotitulacion.pdf', 
  },
];

export default clases;
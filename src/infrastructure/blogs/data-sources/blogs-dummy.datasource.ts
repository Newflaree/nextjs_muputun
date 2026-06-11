import type { Blog, BlogListItem } from "@/core";

export const blogsDatabase: Blog[] = [
  {
    id: 'b-001',
    title: 'Flujo de Trabajo con Drones RTK: Ventajas del X5R Plus GNSS con LOCAL NTRIP',
    desc: 'Cómo usar un receptor GNSS X5R como base NTRIP Local para entregar correcciones RTK a drones DJI Enterprise, Autel, Wingtra o eBee y mejorar el flujo topográfico.',
    img: 'https://res.cloudinary.com/newflare/image/upload/v1708466326/demos/muputun/blogs/utquhhd4w1wtsbqrhxvg.png',
    slug: 'ventajas-x5r-plus-gnss-con-local-ntrip'
  },
  {
    id: 'b-002',
    title: 'La Importancia de obtener el Reporte de Calibración del National Geodetic Survey (NGS) del NOAA para un Receptor GNSS',
    desc: 'Por qué la calibración NGS/NOAA, el centro de fase y el formato ANTEX son claves para confiar en una antena GNSS multibanda de uso profesional.',
    img: 'https://res.cloudinary.com/newflare/image/upload/v1705499029/demos/muputun/blogs/bpnzfiznbpfbyssbah7r.png',
    slug: 'la-importancia-de-obtener-el-reporte-de-calibracion-del-ngs',
  },
  {
    id: 'b-003',
    title: '¿Cuantos canales necesita un receptor GNSS? Los 184 canales del X5R son más que suficientes',
    desc: 'Una explicación práctica sobre canales, constelaciones, frecuencias y por qué 184 canales pueden ser suficientes para obtener alta precisión GNSS en RTK, PPK y NTRIP.',
    img: 'https://res.cloudinary.com/newflare/image/upload/v1704678787/demos/muputun/blogs/lsvcnmzioqmkuzemcgud.jpg',
    slug: 'canales-gnss'
  },
];


export const firtListBlogOne: BlogListItem[] = [
  {
    id: 'li-001',
    blog: 'b-001',
    text: 'Error ionosférico: La termosfera o ionosfera es una capa de la atmósfera terrestre que contiene electrones libres que pueden refractar las señales GNSS a medida que atraviesan esta capa. El grado de refracción depende de la frecuencia de las señales. Los receptores GNSS multifrecuencia pueden medir la velocidad de propagación de las señales a través de la ionosfera en diferentes frecuencias y calcular el retraso ionosférico. Al disponer de múltiples frecuencias, es posible estimar con mayor precisión el retraso ionosférico y corregir las mediciones para reducir este error.'
  },
  {
    id: 'li-002',
    blog: 'b-001',
    text: 'Error troposférico: La troposfera es la capa más baja de la atmósfera terrestre y está sujeta a cambios constantes en la presión, temperatura y humedad. Estos cambios afectan la velocidad de propagación de las señales GNSS a través de la troposfera. Al utilizar múltiples frecuencias, los receptores GNSS pueden medir la diferencia en la velocidad de propagación entre las señales de diferentes frecuencias y estimar el retraso troposférico con mayor precisión. Esto permite una corrección más precisa de las mediciones.'
  },
  {
    id: 'li-003',
    blog: 'b-001',
    text: 'Reducción del Efecto Multipath: El Efecto Multipath ocurre cuando las señales GNSS rebotan en objetos cercanos, como edificios o terreno irregular, antes de llegar al receptor. Esto puede introducir errores en las mediciones geodésicas. Los receptores GNSS multifrecuencia pueden utilizar la información de fase de las señales en diferentes frecuencias para mitigar el efecto Multipath y obtener mediciones más precisas.'
  },
  {
    id: 'li-004',
    blog: 'b-001',
    text: 'Mayor disponibilidad de satélites GNSS: Al utilizar múltiples frecuencias, los receptores GNSS pueden rastrear y utilizar señales de más satélites. Esto aumenta la redundancia y la robustez del sistema, ya que, si una señal se ve afectada por la obstrucción o interferencia, el receptor puede utilizar señales de otras frecuencias o satélites para mantener la precisión de las mediciones.'
  }
];

export const firtListBlogTwo: BlogListItem[] = [
  {
    id: 'li-001',
    blog: 'b-002',
    text: 'Estándares Rigurosos de Medición: El NGS aplica estándares internacionales y metodologías de calibración altamente precisas, lo que asegura que las antenas y receptores integrados GNSS cumplan con las especificaciones más exigentes.'
  },
  {
    id: 'li-002',
    blog: 'b-002',
    text: 'Confianza en la Precisión del Dispositivo: Al obtener un reporte de calibración del NGS, los fabricantes de antenas y receptores GNSS pueden demostrar la precisión y confiabilidad de sus productos, lo que es crucial para ganar la confianza de los clientes, inversores y socios estratégicos.'
  },
  {
    id: 'li-003',
    blog: 'b-002',
    text: 'Comparabilidad Internacional: El NGS del NOAA es reconocido a nivel mundial, lo que significa que los informes de calibración emitidos por esta entidad son respetados en la comunidad global de GNSS. Esto facilita la comparación y la interoperabilidad de las antenas y receptores GNSS en diferentes contextos y aplicaciones.'
  }
];

export const secondListBlogTwo: BlogListItem[] = [
  {
    id: 'li-001',
    blog: 'b-002',
    text: 'Ubicar el Centro de Fase promedio de la antena en referencia a las dimensiones físicas del receptor GNSS.'
  },
  {
    id: 'li-002',
    blog: 'b-002',
    text: 'Definir unas correcciones espaciales para ubicar el centro de fase de la antena GNSS.'
  },
];

export const thirtListBlogTwo: BlogListItem[] = [
  {
    id: 'li-001',
    blog: 'b-002',
    text: 'Punto de Referencia que indica el Norte (NRP): ubicado en la pantalla de visualización de indicaciones o Interfaz Hombre-Máquina (MMI), y'
  },
  {
    id: 'li-002',
    blog: 'b-002',
    text: 'Punto de Referencia de la Antena (ARP): ubicado en la base del receptor y centro de la rosca de 5/8´ definida como la Parte Inferior del Soporte de la Antena (BAM).'
  },
];

export const fourthListBlogTwo: BlogListItem[] = [
  {
    id: 'li-001',
    blog: 'b-002',
    text: 'Precisión en Posicionamiento GNSS: Al utilizar archivos ANTEX, los usuarios de receptores GNSS pueden corregir de manera más precisa las señales que se ven afectadas por las características de las antenas y por la ionosfera. Esto contribuye a mejorar la precisión en la determinación de posiciones.'
  },
  {
    id: 'li-002',
    blog: 'b-002',
    text: 'Compatibilidad e Interoperabilidad: Dado que el formato ANTEX es un estándar reconocido internacionalmente, facilita la compatibilidad y la interoperabilidad entre diferentes receptores y sistemas GNSS de diversos fabricantes. Esto garantiza la consistencia y la confiabilidad en las mediciones GNSS a nivel global.'
  },
  {
    id: 'li-003',
    blog: 'b-002',
    text: 'Actualizaciones y Mantenimiento: El NGS puede emitir actualizaciones de los archivos ANTEX para reflejar cambios en las características de las antenas o receptores GNSS integrados. Los usuarios pueden descargar versiones actualizadas para asegurarse de tener la información más reciente y precisa.'
  },
];

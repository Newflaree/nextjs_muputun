export const productsDB = [
  {
    id: 'p-001',
    name: 'X5 Linea para celulares',
    cate: 'gnss-x5',
    desc: 'El receptor de antena GNSS externo de alta precisión que funciona con tu smartphone o tableta Android o iOS. La solución perfecta para usuarios profesionales tanto principiantes como con experiencia en campo. Cuenta con un sistema de corrección NTRIP que recibe datos a través de Internet o Bluetooth. Tiene un indicador láser de punto rojo para facilitar el uso en levantamientos geodésicos.',
    banner: 'https://mettatec.com/wp-content/uploads/2023/09/PPKNTRIP-GNSS-X5Mobile-for-Smartphones-on-field-2.webp',
    mainAdv: [
      {
        advItem: 'Utiliza la misma tecnología GNSS L1/L2/e5 que se encuentra en receptores profesionales con componentes de vanguardia.'
      },
      {
        advItem: 'Recepción simultánea de todas las constelaciones: GPS, GLONASS, GALILEO y BEIDOU.'
      },
      {
        advItem: 'Correcciones NTRIP multibanda con tiempos de convergencia rápidos y rendimiento robusto, ofrece precisión a nivel de centímetros con una solución Fix en segundos.'
      },
      {
        advItem: 'Permite Levantamientos Geodésicos y Fotogrametría con georreferenciación de alta precisión.'
      },
      {
        advItem: 'Incluye su propia antena GNSS helicoidal multibanda.'
      },
      {
        advItem: 'Conexión de transferencia de datos a través de puerto USB y Bluetooth.'
      },
      {
        advItem: 'Compatible con aplicaciones de SIG y Fotogrametría que operan con datos NMEA.'
      },
      {
        advItem: 'Tiene un láser rojo para localizar fácilmente los puntos a georreferenciar en el campo.'
      },
      {
        advItem: 'Compatibilidad con dispositivos Android e iOS.'
      },
      {
        advItem: 'En resumen: Precisión a nivel de centímetros en un módulo pequeño y de muy bajo consumo.'
      },
    ],
    techSpecs: [
      {
        primary: 'Mecánicas',
        secondary: [
          { spec: 'Dimensiones: 85 × 40 × 15 mm (sin antena)' },
          { spec: 'Peso: 70g' },
          { spec: 'Temperatura de operación: -40 a 85 °C' },
        ]
      },
      {
        primary: 'Eléctricas',
        secondary: [
          { spec: 'Voltaje de entrada: 4.75 – 5.5 V' },
          { spec: 'Sesgo de CC de la antena: 3.3 V' },
          { spec: 'Consumo máximo de corriente: 5V @ 250 mA' },
          { spec: 'Consumo promedio de corriente: 5V @ 120 mA' },
          { spec: 'Límite de corriente en el cable USB: 500 mA' },
        ]
      },
      {
        primary: 'Conectividad',
        secondary: [
          { spec: 'Bluetooth V4.2 BR/EDR' },
          { spec: 'USB Serial' },
        ]
      },
      {
        primary: 'GNSS',
        secondary: [
          { spec: 'Recepción concurrente de GPS, GLONASS, Galileo y BeiDou' },
          { spec: 'Recibe bandas L1C/A y L2C' },
          { spec: 'Señales rastreadas GPS/QZSS L1 C/A, L2 GLONASS L1OF, L2 BeiDou B1l, B2l Galileo E1-B/C, E5b' },
          { spec: 'Número de canales 184' },
          { spec: 'Tasa de actualización de navegación: 1 Hz GNSS' },
          { spec: 'Precisión de posición: NTRIP 0.01 m + 1 ppm CEP' },
          { spec: 'Tiempo de convergencia: NTRIP < 10 sec' },
          { spec: 'Tiempo para la Primera Fijación: 25s (frío), 2s (caliente)' },
          { spec: 'Altitud máxima: 50 km (31 millas)' },
          { spec: 'Velocidad máxima: 500 m/s (1118 mph)' },
        ]
      },
      {
        primary: 'Láser',
        secondary: [
          { spec: 'Láser de punto rojo' },
          { spec: 'Precisión: ±10 mm, el indicador rojo varía ligeramente' },
          { spec: 'Longitud de onda del láser: 650 nm' },
          { spec: 'Modo de haz' },
          { spec: 'Dimensiones: 8 * 13.5 mm' },
          { spec: 'Vida útil: ≥5000h' },
          { spec: 'Potencia óptica: 1-100mw' },
          { spec: 'Rango de voltaje: 3V-8V' },
          { spec: 'Corriente de operación: ≤150mA' },
          { spec: 'Rango de temperatura de operación: -25~65 °C' },
          { spec: 'Ángulo de desviación de la luz: ±2°' },
          { spec: 'Tamaño del punto del haz a 10 m: <15 mm' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/PPKNTRIP-GNSS-X5Mobile-for-Smartphones.webp'
      },
      { 
        name: 'img-2',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/PPKNTRIP-GNSS-X5Mobile-for-Smartphones-Components.webp'
      },
      { 
        name: 'img-3',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/PPKNTRIP-GNSS-X5Mobile-for-Smartphones-LASER.webp'
      },
    ],
    price: '$0.000.000',
    slug: 'x5-mobile-series',
    doc: 'X5M.pdf'
  },
  {
    id: 'p-002',
    name: 'X5 Receptor GNSS Multibanda',
    cate: 'gnss-x5',
    desc: 'Estación base y Rover para soluciones fijas PPK, RTK y NTRIP. Con solo unos minutos de configuración, el X5R es uno de los métodos más rápidos para tomar mediciones de grado centimétrico. Funciona con software GIS común, incluyendo SW Maps, SurvPC, Field Genius y muchos otros.',
    banner: 'https://mettatec.com/wp-content/uploads/2023/09/X5R-OCT-2023-TIENDA-01.webp',
    mainAdv: [
      {
        advItem: 'Módulo GNSS independiente'
      },
      {
        advItem: 'Rover y Base de Posicionamiento GNSS para post-procesamiento'
      },
      {
        advItem: 'Posicionamiento GNSS con RTK LoRa (precisión de 10 mm) con un alcance de 10 km en línea de vista'
      },
      {
        advItem: 'Posicionamiento GNSS con NTRIP (precisión de 10 mm) recibe datos de corrección en streaming de un caster NTRIP para aplicar como correcciones en tiempo real a un receptor GNSS'
      },
    ],
    techSpecs: [
      {
        primary: 'Mecánicas',
        secondary: [
          { spec: 'Dimensiones: 138 × 138 × 85 mm' },
          { spec: 'Peso: 650 g' },
          { spec: 'Temperatura de operación: -40 a 85 °C' },
          { spec: 'Diseño cerrado' },
          { spec: 'Carcasa IP67 – Capaz de proteger contra chorros de agua potentes.' },
          { spec: 'El agua proyectada en chorros potentes (boquilla de 12.5 mm) contra la carcasa desde cualquier dirección no deberá tener efectos dañinos.' },
          { spec: 'Duración de la prueba: al menos 3 minutos; Volumen de agua: 100 litros por minuto; Presión: 100 kPa a una distancia de 3 m.' },
        ]
      },
      {
        primary: 'Eléctricas',
        secondary: [
          { spec: 'Voltaje de entrada: 4.75 – 5.5 V' },
          { spec: 'Sesgo de CC de antena interna: 3.3 V' },
          { spec: 'Consumo máximo de corriente: 2500 mA' },
          { spec: 'Consumo promedio de corriente: 500 mA' },
          { spec: 'Límite de corriente en USB OTG: 2000 mA' },
          { spec: 'LiPo 6Ah con carga rápida de 1.5A' },
          { spec: 'Más de 15h de trabajo autónomo en modo base' },
          { spec: 'Más de 20h de trabajo autónomo en modo rover' },
        ]
      },
      {
        primary: 'Conectividad',
        secondary: [
          { spec: 'Wi-Fi 2.4 GHz 802.11b/g/n' },
          { spec: 'Bluetooth V4.2 BR/EDR' },
        ]
      },
      {
        primary: 'Datos',
        secondary: [
          { spec: 'Salida de posición NMEA, RXM (para RINEX 3.0)' },
          { spec: 'Registro de datos en archivo UBX con eventos' },
          { spec: 'Almacenamiento interno de 32 GB' },
        ]
      },
      {
        primary: 'GNSS',
        secondary: [
          { spec: 'Recepción concurrente de GPS, SBAS, Galileo, BeiDou y GLONASS' },
          { spec: 'Recibe bandas L1C/A y L2C' },
          { spec: 'Señales rastreadas GPS/QZSS L1 C/A, L2 GLONASS L1OF, L2 BeiDou B1l, B2l Galileo E1-B/C, E5b' },
          { spec: 'Número de canales 184' },
          { spec: 'Tasa de actualización de hasta 10 Hz GNSS' },
          { spec: 'Tiempo para la Primera Fijación: 25s (frío), 2s (caliente)' },
          { spec: 'Altitud máxima: 50 km (31 millas)' },
          { spec: 'Velocidad máxima: 500 m/s (1118 mph)' },
          { spec: 'Precisión de Posición Horizontal:' },
          { spec: '25 cm sin RTK' },
          { spec: '10 mm con RTK' },
          { spec: '10 mm con NTRIP' },
        ]
      },
      {
        primary: 'Configuración de radio',
        secondary: [
          { spec: 'Banda ISM global sin licencia de 433MHz o 915MHz' },
          { spec: 'Ganancia de antena: 5 dBi' },
          { spec: 'Distancia máxima: 10 km, en área abierta clara y línea de vista' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/X5-Multi-band-GNSS-Receiver-PPK-RTK-NTRIP.webp'
      },
      { 
        name: 'img-2',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/X5-Multi-band-GNSS-Receiver-PPK-RTK-NTRIP-POV-Down.webp'
      },
      { 
        name: 'img-3',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/GNSS-Receiver-X5R-Plus-Compatible-with-the-best-RTK-Drones-of-the-Market.webp'
      },
    ],
    price: '$0.000.000',
    slug: 'x5-receptor',
    doc: 'X5R.pdf'
  },
  {
    id: 'p-003',
    name: 'X5 PPK Phantom 4 Pro',
    cate: 'gnss-x5',
    desc: 'El Módulo X5 PPK para Phantom 4 Pro es un sistema adaptador GNSS no intrusivo para conectarse a un Drone DJI Phantom 4 Pro v.1/v.2 o Advance (no incluido). Posicionamiento con precisión de centímetros en PPK. Para mapeo UAV preciso con menos GCPs. El módulo X5 PPK está listo para usar, y no se necesita configuración, puedes descargar los datos RAW de la tarjeta SD',
    banner: 'https://mettatec.com/wp-content/uploads/2023/09/GNSS-X5-PPK-Module-for-Phantom-4-Pro-Advance-Implemented.webp',
    mainAdv: [
      {
        advItem: 'No es necesario abrir o modificar tu Drone (mantén la garantía original de tu Drone)'
      },
      {
        advItem: 'El Módulo X5 PPK se acopla y desacopla en segundos'
      },
      {
        advItem: 'No requiere baterías'
      },
      {
        advItem: 'Sensor detector de disparo de imagen ultra rápido'
      },
      {
        advItem: 'Dispositivo ligero: 80 gramos'
      },
    ],
    techSpecs: [
      {
        primary: 'Mecánicas',
        secondary: [
          { spec: 'Dimensiones: 52 × 37 × 13 mm' },
          { spec: 'Peso: 80 g' },
          { spec: 'Temperatura de operación: -40 a 85 °C' },
        ]
      },
      {
        primary: 'Eléctricas',
        secondary: [
          { spec: 'Voltaje de entrada: 4.75 – 5.5 V' },
          { spec: 'Sesgo de CC de la antena: 3.3 V' },
          { spec: 'Consumo máximo de corriente: 5V @ 500 mA' },
          { spec: 'Consumo promedio de corriente: 5V @ 250 mA' },
          { spec: 'Límite de corriente en USB OTG: 1000 mA' },
        ]
      },
      {
        primary: 'Posicionamiento',
        secondary: [
          { spec: 'Horizontal estático 4 mm + 0.5 ppm' },
          { spec: 'Vertical estático 8 mm + 1 ppm' },
          { spec: 'Horizontal cinemático 7 mm + 1 ppm' },
          { spec: 'Vertical cinemático 14 mm + 1 ppm' },
        ]
      },
      {
        primary: 'Conectividad',
        secondary: [
          { spec: 'Wi-Fi 2.4 GHz 802.11b/g/n' },
        ]
      },
      {
        primary: 'Datos',
        secondary: [
          { spec: 'Salida de posición NMEA, RXM (para RINEX)' },
          { spec: 'Registro de datos en archivo UBX con eventos con tasa de actualización de hasta 20 Hz' },
          { spec: 'Almacenamiento externo de hasta 64 GB' },
        ]
      },
      {
        primary: 'GNSS',
        secondary: [
          { spec: 'Recepción concurrente de GPS, GLONASS, Galileo y BeiDou' },
          { spec: 'Recibe bandas L1C/A y L2C' },
          { spec: 'Señales rastreadas GPS/QZSS L1 C/A, L2 GLONASS L1OF, L2 BeiDou B1l, B2l Galileo E1-B/C, E5b' },
          { spec: 'Número de canales 184' },
          { spec: 'Tasa de actualización 10 Hz GNSS' },
          { spec: 'Tiempo para la Primera Fijación: 25s (frío), 2s (caliente)' },
          { spec: 'Altitud máxima: 50 km (31 millas)' },
          { spec: 'Velocidad máxima: 500 m/s (1118 mph)' },
        ]
      },
      {
        primary: 'Sensor de disparo',
        secondary: [
          { spec: 'Un sensor instalado externamente en el drone P4P detecta el disparo de cada fotografía y registra una marca de tiempo en el archivo de registro' },
          { spec: 'Las marcas de tiempo y los eventos de posición pueden extraerse del módulo después del vuelo y combinarse para la georreferenciación utilizando diversas opciones de software especializado disponibles en el mercado' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/GNSS-X5-PPK-Module-for-Phantom-4-Pro-Advance.webp'
      },
      { 
        name: 'img-2',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/GNSS-X5-PPK-Module-for-Phantom-4-Pro-Advance-each-parts.webp'
      },
      { 
        name: 'img-3',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/GNSS-X5-PPK-Module-for-Phantom-4-Pro-Advance-Module-each-parts-unboxing.webp'
      },
    ],
    price: '$0.000.000',
    slug: 'x5-ppk-phantom-4-pro',
    doc: 'X5-PPK-P4P.pdf'
  },
  {
    id: 'p-004',
    name: 'X5 PPK Mavic 2 Pro',
    cate: 'gnss-x5',
    desc: 'El Módulo X5 PPK para Mavic 2 Pro es un sistema adaptador GNSS no intrusivo para conectarse a un Drone DJI Mavic 2 Pro (no incluido). Posicionamiento con precisión de centímetros en PPK. Para mapeo UAV preciso con menos GCPs. El módulo X5 PPK está listo para usar, y no se necesita configuración, puedes descargar los datos RAW de la tarjeta SD o vía Wi-Fi',
    banner: 'https://mettatec.com/wp-content/uploads/2023/09/GNSS-X5-PPK-Module-for-Mavic-2-Pro-Zoom-Referencial-Image.webp',
    mainAdv: [
      {
        advItem: 'No es necesario abrir o modificar tu Drone (mantén la garantía original de tu Drone)'
      },
      {
        advItem: 'El Módulo X5 PPK se acopla y desacopla en segundos'
      },
      {
        advItem: 'No requiere baterías'
      },
      {
        advItem: 'Sensor detector de disparo de imagen ultra rápido'
      },
      {
        advItem: 'Dispositivo ligero: 72 gramos'
      },
    ],
    techSpecs: [
      {
        primary: 'Mecánicas',
        secondary: [
          { spec: 'Dimensiones: 80 × 40 × 25 mm' },
          { spec: 'Peso: 72 g' },
          { spec: 'Temperatura de operación: -40 a 85 °C' },
        ]
      },
      {
        primary: 'Eléctricas',
        secondary: [
          { spec: 'Voltaje de carga de entrada: 4.75 – 5.5 V' },
          { spec: 'Sesgo de CC de la antena: 3.3 V' },
          { spec: 'Consumo máximo de corriente: 3.3V @ 750 mA' },
          { spec: 'Consumo promedio de corriente: 3.3V @ 500 mA' },
          { spec: 'Límite de corriente en el Puerto de Carga USB: 1000 mA' },
        ]
      },
      {
        primary: 'Posicionamiento',
        secondary: [
          { spec: 'Horizontal estático 4 mm + 0.5 ppm' },
          { spec: 'Vertical estático 8 mm + 1 ppm' },
          { spec: 'Horizontal cinemático 7 mm + 1 ppm' },
          { spec: 'Vertical cinemático 14 mm + 1 ppm' },
        ]
      },
      {
        primary: 'Conectividad',
        secondary: [
          { spec: 'Wi-Fi 2.4 GHz 802.11b/g/n' },
        ]
      },
      {
        primary: 'Datos',
        secondary: [
          { spec: 'Salida de posición datos RAW (para conversión a RINEX)' },
          { spec: 'Registro de datos en archivo UBX con eventos con tasa de actualización de hasta 10 Hz' },
          { spec: 'Almacenamiento externo de hasta 64 GB' },
        ]
      },
      {
        primary: 'GNSS',
        secondary: [
          { spec: 'Recepción concurrente de GPS, GLONASS, Galileo y BeiDou' },
          { spec: 'Recibe bandas L1C/A y L2C' },
          { spec: 'Señales rastreadas GPS/QZSS L1 C/A, L2 GLONASS L1OF, L2 BeiDou B1l, B2l Galileo E1-B/C, E5b' },
          { spec: 'Número de canales 184' },
          { spec: 'Tasa de actualización 10 Hz GNSS' },
          { spec: 'Tiempo para la Primera Fijación: 25s (frío), 2s (caliente)' },
          { spec: 'Altitud máxima: 50 km (31 millas)' },
          { spec: 'Velocidad máxima: 500 m/s (1118 mph)' },
        ]
      },
      {
        primary: 'Sensor de disparo',
        secondary: [
          { spec: 'Un sensor instalado externamente en el drone M2P detecta el disparo de cada fotografía y registra una marca de tiempo en el archivo de registro.' },
          { spec: 'Las marcas de tiempo y los eventos de posición pueden extraerse del módulo después del vuelo y combinarse para la georreferenciación utilizando diversas opciones de software especializado disponibles en el mercado.' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/GNSS-X5-PPK-Module-for-Mavic-2-Pro-Zoom.webp'
      },
      { 
        name: 'img-2',
        url: 'https://mettatec.com/wp-content/uploads/2023/09/GNSS-X5-PPK-Module-for-Phantom-4-Pro-Advance-each-parts.webp'
      },
    ],
    price: '$0.000.000',
    slug: 'x5-ppk-mavic-2-pro',
    doc: 'X5-PPK-M2P.pdf'
  },
  {
    id: 'p-005',
    name: 'X5 Radio LoRa',
    cate: 'gnss-x5',
    desc: '',
    banner: '',
    mainAdv: [
      {
        advItem: ''
      },
    ],
    techSpecs: [
      {
        primary: '',
        secondary: [
          { spec: '' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: ''
      },
    ],
    price: '$0.000.000',
    slug: '',
    doc: ''
  },
  {
    id: 'p-006',
    name: 'HeliX5 Antena',
    cate: 'gnss-x5',
    desc: '',
    banner: '',
    mainAdv: [
      {
        advItem: ''
      },
    ],
    techSpecs: [
      {
        primary: '',
        secondary: [
          { spec: '' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: ''
      },
    ],
    price: '$0.000.000',
    slug: '',
    doc: ''
  },
  {
    id: 'p-007',
    name: '',
    cate: '',
    desc: '',
    banner: '',
    mainAdv: [
      {
        advItem: ''
      },
    ],
    techSpecs: [
      {
        primary: '',
        secondary: [
          { spec: '' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: ''
      },
    ],
    price: '$0.000.000',
    slug: '',
    doc: ''
  },
  {
    id: 'p-008',
    name: '',
    cate: '',
    desc: '',
    banner: '',
    mainAdv: [
      {
        advItem: ''
      },
    ],
    techSpecs: [
      {
        primary: '',
        secondary: [
          { spec: '' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: ''
      },
    ],
    price: '$0.000.000',
    slug: '',
    doc: ''
  },
  {
    id: 'p-009',
    name: '',
    cate: '',
    desc: '',
    banner: '',
    mainAdv: [
      {
        advItem: ''
      },
    ],
    techSpecs: [
      {
        primary: '',
        secondary: [
          { spec: '' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: ''
      },
    ],
    price: '$0.000.000',
    slug: '',
    doc: ''
  },
  {
    id: 'p-010',
    name: '',
    cate: '',
    desc: '',
    banner: '',
    mainAdv: [
      {
        advItem: ''
      },
    ],
    techSpecs: [
      {
        primary: '',
        secondary: [
          { spec: '' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: ''
      },
    ],
    price: '$0.000.000',
    slug: '',
    doc: ''
  },
  {
    id: 'p-011',
    name: '',
    cate: '',
    desc: '',
    banner: '',
    mainAdv: [
      {
        advItem: ''
      },
    ],
    techSpecs: [
      {
        primary: '',
        secondary: [
          { spec: '' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: ''
      },
    ],
    price: '$0.000.000',
    slug: '',
    doc: ''
  },
  {
    id: 'p-012',
    name: '',
    cate: '',
    desc: '',
    banner: '',
    mainAdv: [
      {
        advItem: ''
      },
    ],
    techSpecs: [
      {
        primary: '',
        secondary: [
          { spec: '' },
        ]
      },
    ],
    imgs: [
      { 
        name: 'img-1',
        url: ''
      },
    ],
    price: '$0.000.000',
    slug: '',
    doc: ''
  },
];

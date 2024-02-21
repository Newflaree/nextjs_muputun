// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Box,
  Link,
  List,
  ListItem,
  Typography
} from '@mui/material';
// Material Icons
import {
  FiberManualRecord
} from '@mui/icons-material';
// Components
import {
  BlogImage,
  BlogSmallImage
} from '../components';


export const RTKDronesWorkView = () => {
  return (
    <Box
      px={ 4 }
      my={ 14 }
    >
      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1708466326/demos/muputun/blogs/utquhhd4w1wtsbqrhxvg.png'
        alt='Banner Blog'
      />

      <Typography
        variant='h1'
        component='h1'
        textAlign='center'
        mt={ 7 }
        pb={ 10 }
      >
        Flujo de Trabajo con Drones RTK: Ventajas del X5R Plus GNSS con LOCAL NTRIP
      </Typography>

      <Typography
        variant='p'
        component='p'
        pb={ 4 }
      >
        En el ámbito de la topografía con drones, la precisión es la piedra angular de una recopilación de datos exitosa. Entre la diversa gama de herramientas disponibles para mejorar la precisión topográfica, los receptores GNSS juegan un papel fundamental. En este ecosistema, el nuevo receptor <NextLink href='/productos/x5-receptor' passHref legacyBehavior><Link color='primary' variant='p'>METTATEC X5R PLUS GNSS</Link></NextLink> con LOCAL NTRIP ofrece claras ventajas en el campo, en comparación con otros productos GNSS del mercado de drones como el receptor DJI D-RTK 2 GNSS y otros receptores. En este artículo, exploraremos las ventajas del X5R PLUS con servicio LOCAL NTRIP en términos de versatilidad cuando se usa con drones de la marca DJI Enterprise y Autel RTK.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1708471701/demos/muputun/blogs/flujo-trabajo-rtk/jwxjiq2mwhi9tneuvbig.webp'
        alt='GNSS X5R Plus'
      />

      <Typography variant='body2'>
        Imagen: Dji Matrice 30T y Autel EVO 2 Pro RTK y el receptor GNSS X5R Plus.
      </Typography>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        El receptor X5R Plus GNSS con servicio LOCAL NTRIP para drones: Precisión redefinida.
      </Typography>

      <Typography
      variant='h2'
        component='h2'
      >
        Datos de corrección “Hiper” Locales:
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El X5R PLUS equipado con el servicio LOCAL NTRIP aprovecha el poder de los datos de corrección en tiempo real. La principal ventaja aquí es que estos datos de corrección se entregan desde el <NextLink href='/productos/x5-receptor' passHref legacyBehavior><Link color='primary' variant='p'>X5R PLUS</Link></NextLink> como una estación base situada muy cerca del área de operación del dron. Esto minimiza los errores derivados de las perturbaciones atmosféricas y los factores geográficos, lo que da como resultado una precisión centimétrica sin precedentes. Este nivel de precisión es esencial para proyectos topográficos y cartográficos de alta resolución.
      </Typography>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        Precisión en tiempo real:
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El servicio LOCAL NTRIP facilita correcciones continuas en tiempo real, lo que permite que el dron ajuste su posicionamiento instantáneamente. Esto es particularmente ventajoso cuando se examinan estructuras o paisajes dinámicos, ya que las correcciones se adaptan a las condiciones cambiantes, lo que garantiza la integridad de los datos durante todo el vuelo.
      </Typography>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        Muy fácil configuración del servicio LOCAL NTRIP
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Para iniciar el servicio LOCAL NTRIP con el <NextLink href='/productos/x5-receptor' passHref legacyBehavior><Link color='primary' variant='p'>X5R PLUS</Link></NextLink>, solo es necesario indicar el modo de funcionamiento “LOCAL NTRIP” en la aplicación de configuración de la App FindX5 de Mettatec.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1708471700/demos/muputun/blogs/flujo-trabajo-rtk/lj0xa9z9agprthkgpvxd.webp'
        alt='Modos de operación en la App FindX5.'
        isShort={ true }
      />

      <Typography
        textAlign='center'
        variant='body2'
      >
        Imagen: Modos de operación en la App FindX5.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        mt={ 7 }
      >
        Gran compatibilidad y fácil conexión:
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Garantizar una compatibilidad perfecta y una conexión fácil entre un dron RTK y el receptor GNSS X5R PLUS que ofrece el servicio NTRIP LOCAL es esencial para operaciones topográficas eficientes. Para establecer la conexión, empieza conectando el dron con el wifi del X5R PLUS. Esta conexión garantiza una comunicación inalámbrica fluida. Una vez emparejado, configure en la interfaz de control y configuración del dron, en la sección de datos RTK, los parámetros de conexión necesarios para utilizar el servicio NTRIP LOCAL, como dirección IP, puerto, punto de montaje y sesión de credenciales de inicio de sesión. La convergencia de la compatibilidad y un método de configuración fácil de usar hacen que la conexión de un dron RTK al <NextLink href='/productos/x5-receptor' passHref legacyBehavior><Link color='primary' variant='p'>X5R PLUS</Link></NextLink> sea un componente esencial de cualquier flujo de trabajo de inspección profesional con drones.
      </Typography>

      <BlogSmallImage
        source='https://res.cloudinary.com/newflare/image/upload/v1708471700/demos/muputun/blogs/flujo-trabajo-rtk/kp9or8azmrcyvax93gbh.webp'
      />

      <Typography
        textAlign='center'
        variant='body2'
        alt='Elija la fuente RTK: Servicio de red personalizado'
      >
        Imagen: Elija la fuente RTK: Servicio de red personalizado.
      </Typography>

      <BlogSmallImage
        source='https://res.cloudinary.com/newflare/image/upload/v1708471700/demos/muputun/blogs/flujo-trabajo-rtk/c3tbuwmvhjvdkjlnyxqx.webp'
        alt='Introduzca los parámetros necesarios para utilizar el servicio NTRIP LOCAL.'
      />

      <Typography
        textAlign='center'
        variant='body2'
      >
        Imagen: Introduzca los parámetros necesarios para utilizar el servicio NTRIP LOCAL.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1708471701/demos/muputun/blogs/flujo-trabajo-rtk/w7ivs6mq3p7994b8peaw.webp'
        alt='RTK FIX con el Dji Matrice 30T y el X5R PLUS GNSS.'
      />

      <Typography
        variant='body2'
      >
        Imagen: RTK FIX con el Dji Matrice 30T y el X5R PLUS GNSS.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        mt={ 7 }
      >
        Potencial de personalización:
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Una de las características sobresalientes del X5R PLUS es la flexibilidad que brindan para establecer estaciones base personalizadas. Esto permite a los usuarios adaptar los datos de corrección a sus requisitos específicos, lo que la convierte en una solución ideal para proyectos con demandas espaciales únicas.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        mt={ 7 }
      >
        El caso del DJI D-RTK 2 para DJI Enterprise Drones: Versatilidad limitada
      </Typography>

      <Typography
        variant='h2'
        component='h2'
      >
        Restringido al ecosistema DJI:
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El receptor DJI D-RTK 2 GNSS está diseñado específicamente para drones DJI y se alinea perfectamente con el ecosistema DJI. Si bien esta integración agiliza la compatibilidad para los usuarios de DJI existentes, limita la aplicabilidad del receptor a plataformas que no son de DJI, restringiendo a los profesionales que trabajan con una amplia gama de modelos de drones.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        mt={ 7 }
      >
        La exclusividad dificulta la multitarea:
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        A diferencia de los receptores GNSS más versátiles, el D-RTK 2 está diseñado principalmente para mejorar la precisión de posicionamiento de los drones dentro del ecosistema DJI. Esto significa que no se puede reutilizar fácilmente para otras actividades de recopilación de datos que los receptores GNSS profesionales suelen admitir, como topografía en tierra, control de máquinas y mediciones geodésicas.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        mt={ 7 }
      >
        Funciones profesionales limitadas:
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        En comparación con los receptores GNSS profesionales especializados, el D-RTK 2 carece de ciertas características avanzadas que son integrales para tareas topográficas integrales. Esto incluye la ausencia de ciertos modos de recopilación de datos, compatibilidad con el sistema de coordenadas geodésicas y opciones de salida de datos más avanzadas.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        mt={ 7 }
      >
        El caso del dron Autel EVO II RTK: Solución RTK Rentable y Eficiente
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Utilizar el económico receptor GNSS X5R PLUS con servicio LOCAL NTRIP para transmitir datos RTK al dron Autel EVO 2 RTK presenta ventajas significativas para tareas topográficas de precisión. La asequibilidad del receptor GNSS minimiza la inversión inicial y mantiene la capacidad de lograr una precisión de nivel centimétrico. Para configurar el servicio NTRIP LOCAL en la interfaz de control remoto, debe ingresar los detalles del emisor NTRIP apropiados, incluida la dirección IP o el nombre de dominio del emisor, el número de puerto, el punto de montaje, el nombre de usuario y la contraseña. La integración del X5R PLUS con el servicio LOCAL NTRIP no solo mejora la precisión topográfica, sino que también agiliza los flujos de trabajo, lo que lo convierte en una solución rentable y eficiente para las tareas de recopilación de datos geoespaciales con el EVO 2 RTK y otros drones RTK de Autel.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1708471700/demos/muputun/blogs/flujo-trabajo-rtk/zhatvthfgiil1wtxfp1t.webp'
        alt=''
      />

      <Typography
        variant='body2'
      >
        Imagen: RTK FIx con el Autel EVO 2 Pro RTK y el X5R PLUS GNSS.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        mt={ 7 }
      >
        Elije sabiamente: Precisión y Versatilidad
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Al considerar las opciones del receptor GNSS para la topografía con drones, los profesionales deben sopesar las ventajas de la precisión y la versatilidad. Los receptores GNSS con el servicio LOCAL NTRIP destacan por ofrecer una precisión inigualable y un potencial de personalización para la topografía con drones, especialmente en situaciones que exigen la máxima precisión.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Sin embargo, en el caso del receptor DJI D-RTK 2 GNSS, si bien mejora la precisión dentro del ecosistema DJI, se queda corto cuando se trata del espectro más amplio de actividades de recopilación de datos que los receptores GNSS profesionales pueden admitir. Es posible que su compatibilidad única y su conjunto de funciones limitado no se alineen con los requisitos de los profesionales que buscan una herramienta más versátil para diversas tareas topográficas.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Si bien el receptor DJI D-RTK 2 GNSS sirve como un activo valioso para mejorar la precisión del posicionamiento en el campo de los drones de la marca DJI, sus limitaciones en términos de compatibilidad y versatilidad merecen una cuidadosa consideración. Para los profesionales que buscan expandir sus horizontes más allá de las tareas específicas de los drones, el receptor <NextLink href='/productos/x5-receptor' passHref legacyBehavior><Link color='primary' variant='p'>X5R PLUS GNSS con servicio LOCAL NTRIP</Link></NextLink> ofrece la precisión, versatilidad y personalización necesarias para abordar una gama más amplia de desafíos geoespaciales.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1708471700/demos/muputun/blogs/flujo-trabajo-rtk/oap3npiraubnhpeuftxi.webp'
        alt='El receptor X5R Plus GNSS en modo LOCAL NTRIP.'
      />
      <Typography
        variant='body2'
      >
        Imagen: El receptor X5R Plus GNSS en modo LOCAL NTRIP.
      </Typography>


































      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
        fontSize={ 18 }
      >
        Contenido Facilitado por <NextLink href='https://mettatec.com/es/' passHref legacyBehavior><Link target='_blank'>Mettatec</Link></NextLink>.
      </Typography>
    </Box>
  );
}

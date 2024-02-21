// Next.js
import NextLink from 'next/link';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import {FiberManualRecord} from '@mui/icons-material';
import {BlogTable} from '@/components/ui/blogs';
import {BlogImage, GNSSTable} from '../components';


export const ImportanciaNGS = () => {
  return (
    <Box
      px={ 4 }
      my={ 14 }
    >
      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1705499029/demos/muputun/blogs/bpnzfiznbpfbyssbah7r.png'
        alt='Banner Blog'
        isBanner={ true }
      />

      <Typography
        variant='h1'
        component='h1'
        textAlign='center'
        mt={ 7 }
        pb={ 10 }
      >
        La Importancia de obtener el Reporte de Calibración del National Geodetic Survey (NGS) del NOAA para un Receptor GNSS
      </Typography>

      <Typography
        mb={ 3 }
        variant='h2'
        component='h2'
      >
        Introducción
      </Typography>

      <Typography
        variant='p'
        component='p'
        pb={ 4 }
      >
        Los receptores Multi-banda GNSS desempeñan un papel esencial en la determinación precisa de posiciones y en la obtención de datos de ubicación en aplicaciones como la navegación, la topografía y la agricultura de precisión. La precisión y confiabilidad de estos receptores son críticas, y un elemento fundamental en la búsqueda de la excelencia en su rendimiento es la obtención de un reporte de Calibración emitido por el National Geodetic Survey (NGS) del NOAA.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
      >
        La Significancia de la Calibración GNSS
      </Typography>

      <Typography
        variant='p'
        component='p'
        mb={ 4 }
        marginTop={ 4 }
      >
        La Calibración de la antena del receptor GNSS es el proceso de evaluación y ajuste de las características de rendimiento de una antena para asegurar su precisión y exactitud. Dada la constante evolución de las tecnologías GNSS y la variabilidad en las condiciones ambientales alrededor del mundo, la calibración realizada por un organismo internacional confiable se convierte en una etapa esencial para demostrar la calidad y garantizar el rendimiento de estos equipos de alta precisión.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
      >
        El Rol del National Geodetic Survey en la Calibración GNSS
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El National Geodetic Survey (NGS) del National Oceanic and Atmospheric Administration (NOAA) de los Estados Unidos es una autoridad reconocida a nivel mundial en la provisión de servicios geodésicos y de posicionamiento. La calibración de antenas GPS/GNSS realizada por el NGS implica un proceso meticuloso y altamente preciso que garantiza la calidad y consistencia en los resultados.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1705501451/demos/muputun/blogs/calibracion-ngs/rvwmzrxvzz9tucwjfaiq.jpg'
        alt='National Geodetic Survey'
      />

      <Typography variant='body2'>
        Imagen: El NGS es una entidad que forma parte del NOAA (Estados Unidos).
      </Typography>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        Ventajas de Obtener un Reporte de Calibración del NGS
      </Typography>

      <List>
        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            <span style={{ fontWeight: 'bold' }}>Estándares Rigurosos de Medición:</span> El NGS aplica estándares internacionales y metodologías de calibración altamente precisas, lo que asegura que las antenas y receptores integrados GNSS cumplan con las especificaciones más exigentes.
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            <span style={{ fontWeight: 'bold' }}>Confianza en la Precisión del Dispositivo:</span> Al obtener un reporte de calibración del NGS, los fabricantes de antenas y receptores GNSS pueden demostrar la precisión y confiabilidad de sus productos, lo que es crucial para ganar la confianza de los clientes, inversores y socios estratégicos.
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            <span style={{ fontWeight: 'bold' }}>Comparabilidad Internacional:</span> El NGS del NOAA es reconocido a nivel mundial, lo que significa que los informes de calibración emitidos por esta entidad son respetados en la comunidad global de GNSS. Esto facilita la comparación y la interoperabilidad de las antenas y receptores GNSS en diferentes contextos y aplicaciones.
          </Typography>
        </ListItem>
      </List>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        El Proceso de Calibración del National Geodetic Survey – NGS
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El proceso de calibración del NGS implica la evaluación de múltiples parámetros, incluyendo la ganancia, la fase y la polarización de la antena. Se utilizan instalaciones especializadas y técnicas avanzadas para garantizar la precisión de los resultados. Además, se proporciona información detallada sobre la incertidumbre de las mediciones, lo que permite a los fabricantes entender la variabilidad potencial en el rendimiento de sus antenas.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
      El proceso de calibración básicamente se compone de:
      </Typography>

      <List>
        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Ubicar el Centro de Fase promedio de la antena en referencia a las dimensiones físicas del receptor GNSS.
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Definir unas correcciones espaciales para ubicar el centro de fase de la antena GNSS.
          </Typography>
        </ListItem>
      </List>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1705501452/demos/muputun/blogs/calibracion-ngs/ckusc0xuh2vmoayzqtbf.jpg'
        alt='Definir unas correcciones espaciales para ubicar el centro de fase de la antena GNSS.'
      />

      <Typography variant='body2'>
        Imagen: Proceso de Calibración de una antena en el NGS: Relativo, Robótico y en Cámara.
      </Typography>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        Puntos de Referencia Físicos de un receptor GNSS
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        En el caso del Receptor GNSS X5R de Mettatec, el proceso de calibración del NGS utilizó como puntos de referencia físicos para la calibración los puntos siguientes:
      </Typography>

      <List>
        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Punto de Referencia que indica el Norte (NRP): ubicado en la pantalla de visualización de indicaciones o Interfaz Hombre-Máquina (MMI), y
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Punto de Referencia de la Antena (ARP): ubicado en la base del receptor y centro de la rosca de 5/8´ definida como la Parte Inferior del Soporte de la Antena (BAM).
          </Typography>
        </ListItem>
      </List>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1705501452/demos/muputun/blogs/calibracion-ngs/qobq9telvqlio8rjlzmh.jpg'
        alt='Receptor GNSS X5R y ubicación de puntos NRP y ARP'
      />

      <Typography variant='body2'>
        Imagen: Receptor GNSS X5R y ubicación de puntos NRP y ARP..
      </Typography>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        El Centro de Fase:
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El Centro de Fase de una antena es el punto no físico, matemáticamente mejor ajustado, que relaciona el tiempo de llegada de las señales electromagnéticas entrantes con la estructura tangible de la antena GNSS.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1705501450/demos/muputun/blogs/calibracion-ngs/a1yppkrlsu0hlyjemkpw.jpg'
        alt='Impacto del desplazamiento del Centro de Fase de la antena GNSS en relación al tiempo de llegada de las señales electromagnéticas y la variación en la precisión del posicionamiento'
      />

      <Typography variant='body2'>
        Imagen: Impacto del desplazamiento del Centro de Fase de la antena GNSS en relación al tiempo de llegada de las señales electromagnéticas y la variación en la precisión del posicionamiento.
      </Typography>


      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        El Archivo ANTEX
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El archivo ANTEX, que proviene de las siglas en inglés “ANTenna EXchange format”, es un formato de archivo estándar utilizado para almacenar información sobre las características de las antenas GNSS. Estos archivos ANTEX son emitidos y mantenidos por el NGS. Una vez realizada la calibración el NGS ofrece archivos descargables completos de calibraciones absolutas del receptor en formatos ANTEX y ANTINFO.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1705501451/demos/muputun/blogs/calibracion-ngs/ginxmitb8b9uwisotgng.jpg'
        alt='Antex'
      />

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Los usuarios pueden descargar los archivos de calibración de antenas absolutas en los formatos ANTEX y ANTINFO en el menú “Access Calibrations for All Antennas”.
      </Typography>

      <Typography
        variant='p'
        component='p'
        my={ 4 }
      >
        Link: <NextLink href='https://geodesy.noaa.gov/ANTCAL/' passHref legacyBehavior><Link target='_blank'>https://geodesy.noaa.gov/ANTCAL/</Link></NextLink>.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1705501452/demos/muputun/blogs/calibracion-ngs/x8teg8zyaeqavzpkkmqp.jpg'
        alt='Antenna Calibrations'
      />

      <Typography variant='body2'>
        Imagen: Ubicación de los archivos ANTEX y ANTINFO del Receptor Multi-banda GNSS X5 en el sitio web del NGS-NOAA.
      </Typography>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        Importancia del Archivo ANTEX:
      </Typography>

      <List>
        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            <span style={{ fontWeight: 'bold' }}>Precisión en Posicionamiento GNSS:</span> Al utilizar archivos ANTEX, los usuarios de receptores GNSS pueden corregir de manera más precisa las señales que se ven afectadas por las características de las antenas y por la ionosfera. Esto contribuye a mejorar la precisión en la determinación de posiciones.
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            <span style={{ fontWeight: 'bold' }}>Compatibilidad e Interoperabilidad:</span> Dado que el formato ANTEX es un estándar reconocido internacionalmente, facilita la compatibilidad y la interoperabilidad entre diferentes receptores y sistemas GNSS de diversos fabricantes. Esto garantiza la consistencia y la confiabilidad en las mediciones GNSS a nivel global.
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            <span style={{ fontWeight: 'bold' }}>Actualizaciones y Mantenimiento:</span> El NGS puede emitir actualizaciones de los archivos ANTEX para reflejar cambios en las características de las antenas o receptores GNSS integrados. Los usuarios pueden descargar versiones actualizadas para asegurarse de tener la información más reciente y precisa.
          </Typography>
        </ListItem>
      </List>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El NGS recomienda usar el formato ANTEX para mejorar la precisión en el procesamiento de datos GNSS. El NGS usa el formato ANTEX en todo su software de procesamiento GNSS, incluido OPUS. Sin embargo, el NGS también seguirá apoyando el formato ANTINFO para los usuarios de software heredado.
      </Typography>

      <Typography
        mt={ 4 }
        variant='h2'
        component='h2'
      >
        Nuestro Compromiso con la Calidad de los Receptores Multi-banda GNSS X5
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        La obtención de un reporte de calibración del National Geodetic Survey (NGS) del NOAA es de vital importancia para METTATEC como fabricante de receptores GNSS de alta precisión. Este logro no solo garantiza la conformidad con estándares internacionales, sino que también demuestra el compromiso con la calidad y la excelencia en la fabricación de todos nuestros productos. Nuestra confianza y la reputación en la industria GNSS se ven reforzadas, proporcionándonos una ventaja competitiva significativa en el mercado global de GNSS.
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

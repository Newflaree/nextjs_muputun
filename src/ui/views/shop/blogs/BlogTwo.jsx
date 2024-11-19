// Next
import NextLink from 'next/link';
// Componets
import {
  BlogImage,
  BlogList,
  BlogMettaLink
} from '@/ui/components';
// Database
import {
  firtListBlogTwo,
  fourthListBlogTwo,
  secondListBlogTwo,
  thirtListBlogTwo
} from '@/database';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const BlogTwoView = () => {
  return (
    <ShopLayout
      pageTitle='La Importancia de obtener el Reporte de Calibración del National Geodetic Survey (NGS) del NOAA para un Receptor GNS'
    >
      <div className='px-4 my-14'>
        <BlogImage
          source='https://res.cloudinary.com/newflare/image/upload/v1705499029/demos/muputun/blogs/bpnzfiznbpfbyssbah7r.png'
          alt='Banner Blog'
          isBanner={ true }
        />

        <h1 className="text-4xl font-bold text-center mt-7 pb-10">
          La Importancia de obtener el Reporte de Calibración del National Geodetic Survey (NGS) del NOAA para un Receptor GNSS
        </h1>

        <h2 className="text-2xl font-semibold mt-8">
          Introducción
        </h2>

        <p className="mt-4">
          Los receptores Multi-banda GNSS desempeñan un papel esencial en la determinación precisa de posiciones y en la obtención de datos de ubicación en aplicaciones como la navegación, la topografía y la agricultura de precisión. La precisión y confiabilidad de estos receptores son críticas, y un elemento fundamental en la búsqueda de la excelencia en su rendimiento es la obtención de un reporte de Calibración emitido por el National Geodetic Survey (NGS) del NOAA.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          La Significancia de la Calibración GNSS
        </h2>

        <p className="mt-4">
          La Calibración de la antena del receptor GNSS es el proceso de evaluación y ajuste de las características de rendimiento de una antena para asegurar su precisión y exactitud. Dada la constante evolución de las tecnologías GNSS y la variabilidad en las condiciones ambientales alrededor del mundo, la calibración realizada por un organismo internacional confiable se convierte en una etapa esencial para demostrar la calidad y garantizar el rendimiento de estos equipos de alta precisión.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          El Rol del National Geodetic Survey en la Calibración GNSS
        </h2>

        <p className="mt-4">
          El National Geodetic Survey (NGS) del National Oceanic and Atmospheric Administration (NOAA) de los Estados Unidos es una autoridad reconocida a nivel mundial en la provisión de servicios geodésicos y de posicionamiento. La calibración de antenas GPS/GNSS realizada por el NGS implica un proceso meticuloso y altamente preciso que garantiza la calidad y consistencia en los resultados.
        </p>

        <BlogImage
          source='https://res.cloudinary.com/newflare/image/upload/v1705501451/demos/muputun/blogs/calibracion-ngs/rvwmzrxvzz9tucwjfaiq.jpg'
          alt='Banner'
        />

        <p className="mt-2">
          Imagen: El NGS es una entidad que forma parte del NOAA (Estados Unidos).
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Ventajas de Obtener un Reporte de Calibración del NGS
        </h2>

        <BlogList listItems={ firtListBlogTwo } />

        <h2 className="text-2xl font-semibold mt-8">
          El Proceso de Calibración del National Geodetic Survey – NGS
        </h2>

        <p className="mt-4">
          El proceso de calibración del NGS implica la evaluación de múltiples parámetros, incluyendo la ganancia, la fase y la polarización de la antena. Se utilizan instalaciones especializadas y técnicas avanzadas para garantizar la precisión de los resultados. Además, se proporciona información detallada sobre la incertidumbre de las mediciones, lo que permite a los fabricantes entender la variabilidad potencial en el rendimiento de sus antenas.
        </p>

        <p className='mt-4'>
          El proceso de calibración básicamente se compone de:
        </p>

        <BlogList listItems={ secondListBlogTwo } />

        <BlogImage
          source='https://res.cloudinary.com/newflare/image/upload/v1705501452/demos/muputun/blogs/calibracion-ngs/ckusc0xuh2vmoayzqtbf.jpg'
          alt='Proceso calibracion'
        />

        <p>
          Imagen: Proceso de Calibración de una antena en el NGS: Relativo, Robótico y en Cámara.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Puntos de Referencia Físicos de un receptor GNSS
        </h2>

        <p className="mt-4">
          En el caso del Receptor GNSS X5R de Mettatec, el proceso de calibración del NGS utilizó como puntos de referencia físicos para la calibración los puntos siguientes:
        </p>

        <BlogList listItems={ thirtListBlogTwo } />

        <BlogImage
          source='https://res.cloudinary.com/newflare/image/upload/v1705501452/demos/muputun/blogs/calibracion-ngs/qobq9telvqlio8rjlzmh.jpg'
          alt='Puntos de referencia'
        />

        <p>
          Imagen: Receptor GNSS X5R y ubicación de puntos NRP y ARP..
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          El Centro de Fase:
        </h2>

        <p className="mt-4">
          El Centro de Fase de una antena es el punto no físico, matemáticamente mejor ajustado, que relaciona el tiempo de llegada de las señales electromagnéticas entrantes con la estructura tangible de la antena GNSS.
        </p>

        <BlogImage
          source='https://res.cloudinary.com/newflare/image/upload/v1705501450/demos/muputun/blogs/calibracion-ngs/a1yppkrlsu0hlyjemkpw.jpg'
          alt='Puntos de referencia'
        />

        <p>
          Imagen: Impacto del desplazamiento del Centro de Fase de la antena GNSS en relación al tiempo de llegada de las señales electromagnéticas y la variación en la precisión del posicionamiento.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          El Archivo ANTEX
        </h2>

        <p className="mt-4">
          El archivo ANTEX, que proviene de las siglas en inglés “ANTenna EXchange format”, es un formato de archivo estándar utilizado para almacenar información sobre las características de las antenas GNSS. Estos archivos ANTEX son emitidos y mantenidos por el NGS. Una vez realizada la calibración el NGS ofrece archivos descargables completos de calibraciones absolutas del receptor en formatos ANTEX y ANTINFO.
        </p>

        <BlogImage
          source='https://res.cloudinary.com/newflare/image/upload/v1705501451/demos/muputun/blogs/calibracion-ngs/ginxmitb8b9uwisotgng.jpg'
          alt='Puntos de referencia'
        />

        <p className="mt-4">
          Los usuarios pueden descargar los archivos de calibración de antenas absolutas en los formatos ANTEX y ANTINFO en el menú “Access Calibrations for All Antennas”.
        </p>

        <p className="mt-4">
          Link: <NextLink className='text-mupu' href='https://geodesy.noaa.gov/ANTCAL/' target='_blank'>https://geodesy.noaa.gov/ANTCAL</NextLink>.
        </p>

        <BlogImage
          source='https://res.cloudinary.com/newflare/image/upload/v1705501452/demos/muputun/blogs/calibracion-ngs/x8teg8zyaeqavzpkkmqp.jpg'
          alt='Puntos de referencia'
        />

        <p>
          Imagen: Ubicación de los archivos ANTEX y ANTINFO del Receptor Multi-banda GNSS X5 en el sitio web del NGS-NOAA.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Importancia del Archivo ANTEX:
        </h2>

        <BlogList listItems={ fourthListBlogTwo } />

        <p className="mt-4">
          El NGS recomienda usar el formato ANTEX para mejorar la precisión en el procesamiento de datos GNSS. El NGS usa el formato ANTEX en todo su software de procesamiento GNSS, incluido OPUS. Sin embargo, el NGS también seguirá apoyando el formato ANTINFO para los usuarios de software heredado.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Nuestro Compromiso con la Calidad de los Receptores Multi-banda GNSS X5
        </h2>

        <p className="mt-4">
          La obtención de un reporte de calibración del National Geodetic Survey (NGS) del NOAA es de vital importancia para METTATEC como fabricante de receptores GNSS de alta precisión. Este logro no solo garantiza la conformidad con estándares internacionales, sino que también demuestra el compromiso con la calidad y la excelencia en la fabricación de todos nuestros productos. Nuestra confianza y la reputación en la industria GNSS se ven reforzadas, proporcionándonos una ventaja competitiva significativa en el mercado global de GNSS.
        </p>

        <BlogMettaLink />
      </div>
    </ShopLayout>
  );
}

// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { ImportanciaNGS } from '@/views/blogs';


const BlogPage = () => {
  return (
    <MainLayout
      pageTitle='La Importancia de obtener el Reporte de Calibración del NGS'
      pageDesc='Optimiza la precisión de tus receptores Multi-banda GNSS con reportes de calibración del NGS.'
      pageImage='https://res.cloudinary.com/newflare/image/upload/v1705501452/demos/muputun/blogs/calibracion-ngs/ckusc0xuh2vmoayzqtbf.jpg'
      pageKeywords='Reporte de Calibración, Receptor GNSS, Multi-banda GNSS, National Geodetic Survey, NOAA, Calibración de Antena GNSS, Precisión en Posicionamiento, Archivo ANTEX, Estándares Rigurosos de Medición, Confianza en la Precisión del Dispositivo, Comparabilidad Internacional, Proceso de Calibración del NGS, Puntos de Referencia Físicos, Centro de Fase, Impacto del Desplazamiento del Centro de Fase, Archivo ANTINFO, Compatibilidad e Interoperabilidad, Actualizaciones y Mantenimiento, OPUS'
    >
      <ImportanciaNGS />
    </MainLayout>
  );
}

export default BlogPage;

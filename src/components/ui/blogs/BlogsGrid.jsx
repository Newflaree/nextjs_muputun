// Material UI
import { Grid } from '@mui/material';
import {BlogCard} from '.';


export const BlogsGrid = () => {
  return (
    <Grid
      container
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100%'
      }}
    >
      {/* Grid Item */}
      <Grid
        item
        padding={ 4 }
        xs={ 12 }
        sm={ 6 }
      >
        <BlogCard
          blogTitle='Flujo de Trabajo con Drones RTK: Ventajas del X5R Plus GNSS con LOCAL NTRIP'
          blogDesc='En el ámbito de la topografía con drones, la precisión es la piedra angular de una recopilación de datos exitosa. Entre la diversa gama de herramientas disponibles para mejorar la precisión topográfica, los receptores GNSS juegan un papel fundamental.'
          blogImg='https://res.cloudinary.com/newflare/image/upload/v1708466326/demos/muputun/blogs/utquhhd4w1wtsbqrhxvg.png'
          blogLink='blogs/flujo-de-trabajo-con-drones-rtk-ventajas-x5r-plus-gnss'
        />
      </Grid>
      {/* Grid Item */}
      {/* Grid Item */}
      <Grid
        item
        padding={ 4 }
        xs={ 12 }
        sm={ 6 }
      >
        <BlogCard
          blogTitle='La Importancia de obtener el Reporte de Calibración del National Geodetic Survey (NGS) del NOAA para un Receptor GNSS'
          blogDesc='Los receptores Multi-banda GNSS desempeñan un papel esencial en la determinación precisa de posiciones y en la obtención de datos de ubicación en aplicaciones como la navegación, la topografía y la agricultura de precisión.'
          blogImg='https://res.cloudinary.com/newflare/image/upload/v1705499029/demos/muputun/blogs/bpnzfiznbpfbyssbah7r.png'
          blogLink='blogs/la-importancia-de-obtener-el-reporte-de-calibracion-del-ngs'
        />
      </Grid>
      {/* Grid Item */}
      {/* Grid Item */}
      <Grid
        item
        padding={ 4 }
        xs={ 12 }
        sm={ 6 }
      >
        <BlogCard
          blogTitle='¿Cuantos canales necesita un receptor GNSS? Los 184 canales del X5R son más que suficientes'
          blogDesc='¿Cómo influye el número de canales en un receptor GNSS? ¿Obtengo la misma precisión al medir la posición con un receptor GNSS multibanda de 80 ó 600 canales? ¿Tener más canales es necesario para obtener mejor precisión?'
          blogImg='https://res.cloudinary.com/newflare/image/upload/v1704678787/demos/muputun/blogs/lsvcnmzioqmkuzemcgud.jpg'
          blogLink='blogs/canales-gnss'
        />
      </Grid>
      {/* Grid Item */}
      <Grid
        item
        padding={ 4 }
        xs={ 12 }
        sm={ 6 }
      >
      </Grid>
    </Grid>
  );
}

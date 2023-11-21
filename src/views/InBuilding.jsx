// Material UI
import { Box, Typography } from '@mui/material';
// Material Icons
import { Construction } from '@mui/icons-material';

/**
 * `InBuilding` Component
 * 
 * Componente de vista diseñado para indicar que una sección o funcionalidad de la aplicación
 * está en construcción o en desarrollo. Útil para informar a los usuarios sobre el estado de
 * partes de la aplicación que aún no están disponibles.
 * 
 * Utiliza Box de Material-UI para crear un contenedor que centra el contenido en la pantalla.
 * Typography presenta el mensaje de que el sitio está "en construcción" de manera visualmente
 * clara y directa.
 * 
 * El ícono `Construction` de Material Icons se utiliza para añadir un elemento gráfico relacionado
 * con el mensaje de construcción, reforzando visualmente el concepto.
 * 
 * Este componente es importante para comunicar a los usuarios sobre áreas de la aplicación que
 * están en proceso de desarrollo o mejora, manteniendo la transparencia y estableciendo
 * expectativas claras sobre la disponibilidad de ciertas funciones o secciones.
 * 
 * @returns {React.Component} Un componente de vista para secciones en construcción de la aplicación.
 */
export const InBuilding = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='calc( 100vh - 100px )'
    >
      <Typography
        variant='h4'
        component='h4'
        fontSize={ 30 }
        fontWeight={ 300 }
      >
        Sitio en
      </Typography>

      <Typography
        variant='h1'
        component='h1'
        fontSize={ 50 }
        fontWeight={ 500 }
        ml={ 1 }
      >
        Construcción
      </Typography>

      <Construction
        fontSize='large'
        color='primary'
        sx={{ fontSize: 200 }}
      />
    </Box>
  );
}

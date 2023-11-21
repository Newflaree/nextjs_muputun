// Material UI
import {
  Box,
  Typography
} from "@mui/material";

/**
 * `NotFoundView` Component
 * 
 * Componente de vista diseñado para mostrar un mensaje de error 404 cuando se accede a una ruta
 * inexistente o una página que no se encuentra en la aplicación.
 * 
 * Utiliza Box y Typography de Material-UI para estructurar y presentar el mensaje de error
 * de manera visualmente atractiva y clara. La vista está diseñada para ocupar toda la altura
 * disponible de la ventana, menos el espacio para la barra de navegación, asegurando que el
 * mensaje sea el foco principal en la pantalla.
 * 
 * El mensaje de error se divide en dos partes: un gran número '404' que indica el tipo de error,
 * y un texto explicativo para informar al usuario de que la página solicitada no se encontró.
 * 
 * Esta vista es esencial para proporcionar una retroalimentación clara al usuario en caso de
 * que se encuentre con una URL no válida, mejorando la experiencia del usuario frente a errores
 * de navegación.
 * 
 * @returns {React.Component} Un componente de vista para mostrar un mensaje de error 404.
 */
export const NotFoundView  = () => {
  return (
    <Box
      textAlign='center'
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='calc( 100vh - 70px )'
      sx={{
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Typography
        color={ 'primary' }
        variant="h1"
        component='h1'
        fontSize={ 80 }
        fontWeight={ 200 }
      >
        404  <Typography sx={{ display: 'none' }}>|</Typography>
      </Typography>
      <Typography
        marginLeft={ 2 }
        fontSize={ 30 }
        fontWeight={ 100 }
      >
        No encontramos ninguna página aquí
      </Typography>
    </Box>
  );
}

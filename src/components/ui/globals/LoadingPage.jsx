// Material UI
import {
  Box,
  CircularProgress
} from "@mui/material";

/**
 * `LoadingPage` Component
 * 
 * Componente que muestra una pantalla de carga con un indicador de progreso circular.
 * Utilizado durante la carga o el procesamiento de datos en la aplicación.
 * 
 * Emplea Box de Material-UI para contener el indicador y CircularProgress para el indicador
 * de progreso en sí. El Box asegura que el indicador se centre tanto horizontal como
 * verticalmente en la pantalla, ocupando el alto de la ventana menos 100px.
 * 
 * Este componente es ideal para mejorar la experiencia de usuario durante periodos de espera,
 * proporcionando una retroalimentación visual de que se están realizando procesos en el fondo.
 * 
 * @example
 * <LoadingPage />
 * 
 * @returns {React.Component} El componente de pantalla de carga con un indicador de progreso circular.
 */
export const LoadingPage = () => {
  return (
    <Box
      height={ 'calc(100vh - 100px)' }
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <CircularProgress />
    </Box>
  );
}

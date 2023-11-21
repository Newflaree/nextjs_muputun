// Material UI
import { Typography } from '@mui/material';

/**
 * `ProductNotice` Component
 * 
 * Componente sencillo diseñado para mostrar un aviso o nota importante relacionada con el producto,
 * como información sobre la disponibilidad o entrega. Es útil para comunicar detalles clave que los
 * clientes deben tener en cuenta antes de realizar una compra.
 * 
 * Utiliza Typography de Material-UI para presentar el mensaje de manera destacada y legible.
 * La tipografía y el alineamiento del texto están configurados para asegurar que el aviso
 * sea visible y claro para los usuarios.
 * 
 * Este componente es efectivo para transmitir mensajes cortos y directos, como condiciones de
 * entrega o disponibilidad, mejorando la transparencia y la información proporcionada al cliente.
 * 
 * No recibe props, ya que está diseñado para mostrar un mensaje estático, pero puede ser
 * fácilmente personalizado o extendido para manejar contenido dinámico si es necesario.
 * 
 * @example
 * <ProductNotice />
 * 
 * @returns {React.Component} Un componente para mostrar un aviso o nota importante sobre el producto.
 */
export const ProductNotice = () => {
  return (
    <Typography
      mt={ 4 }
      fontSize={ 20 }
      fontWeight={ 600 }
      textAlign='center'
      variant='h3'
      component='h3'
      color='black'
    >
      * Entrega dependerá del stock disponible y región a la que pertenece
    </Typography>
  );
}

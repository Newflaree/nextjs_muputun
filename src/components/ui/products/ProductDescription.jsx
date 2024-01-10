// Material UI
import {
  Box,
  Typography
} from "@mui/material";
import {ProductIncludes} from ".";

/**
 * `ProductDescription` Component
 * 
 * Componente que muestra la descripción de un producto en la página de detalles del mismo.
 * Ideal para proporcionar información adicional y detallada sobre el producto a los usuarios.
 * 
 * Utiliza Box y Typography de Material-UI para estructurar y presentar el texto de la descripción.
 * Box permite un margen vertical generoso para una adecuada separación visual en la página,
 * mientras que Typography asegura que el texto se muestre de manera clara y legible.
 * 
 * El componente recibe como prop la descripción del producto (`desc`), la cual se muestra
 * centrada y formateada para una fácil lectura.
 * 
 * Este componente es esencial para comunicar las características y beneficios de los productos,
 * mejorando la comprensión y el interés del usuario en la oferta.
 * 
 * @param {string} desc - Descripción del producto.
 * 
 * @example
 * <ProductDescription desc="Descripción detallada del producto aquí." />
 * 
 * @returns {React.Component} Un componente para mostrar la descripción de un producto.
 */
export const ProductDescription = ({ desc, includeItems }) => {
  console.log( includeItems );
  return (
    <Box my={ 10 }>
      <Typography
        variant='body1'
        textAlign='center'
        paragraph
      >
        { desc }
      </Typography>

      {
        ( includeItems.length > 0 ) && <ProductIncludes items={ includeItems } /> 
      }
    </Box>
  );
}

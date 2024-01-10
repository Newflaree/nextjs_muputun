// Material UI
import { Box } from '@mui/material';
// Components
import { ProductsCategory } from '@/components/ui';
// Database
import { prdMethods } from '@/database';

/**
 * `ProductsView` Component
 * 
 * Componente de vista diseñado para mostrar múltiples categorías de productos en una página o sección.
 * Ideal para presentar una variedad de productos organizados por categorías, facilitando a los usuarios
 * la exploración y el descubrimiento de productos específicos.
 * 
 * Utiliza Box de Material-UI para proporcionar un espaciado adecuado entre las categorías.
 * 
 * `ProductsCategory` se emplea para cada grupo de productos, mostrando una colección de productos
 * dentro de una categoría específica, como "Dispositivos GNSS X5", "Software y Servicios" y "Combos".
 * 
 * Los datos de los productos se obtienen mediante `prdMethods.getProductByCategory` de la base de
 * datos, lo que permite una presentación dinámica basada en los datos actuales de los productos.
 * 
 * Este componente es crucial para ofrecer una visión estructurada y accesible de los productos
 * disponibles, mejorando la experiencia de navegación del usuario en la sección de productos.
 * 
 * @returns {React.Component} Un componente de vista para mostrar categorías de productos.
 */
export const ProductsView = () => {
  const gnssProducts = prdMethods.getProductByCategory( 'gnss-x5' );
  const softProducts = prdMethods.getProductByCategory( 'soft-se' );
  const combosProducts = prdMethods.getProductByCategory( 'combos' );
  const acceProducts = prdMethods.getProductByCategory( 'acce' );

  return (
    <>
      <Box pt={ 7 } />

      <ProductsCategory
        cateTitle='Dispositivos GNSS X5'
        filteredProducts={ gnssProducts }
      />

      <ProductsCategory
        cateTitle='Software y Servicios'
        filteredProducts={ softProducts }
      />

      <ProductsCategory
        cateTitle='Combos'
        filteredProducts={ combosProducts }
      />

      <ProductsCategory
        cateTitle='Accesorios Müpütun'
        filteredProducts={ acceProducts }
      />
    </>
  );
}

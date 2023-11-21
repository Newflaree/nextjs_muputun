// React
import React from 'react';
// Material UI
import {
  Box,
  Grid,
  Typography
} from '@mui/material';
// Components
import { ProductCard } from './';

/**
 * `ProductsCategory` Component
 * 
 * Componente que muestra una colección de productos pertenecientes a una categoría específica.
 * Ideal para agrupar y presentar productos similares o relacionados en una página o sección.
 * 
 * Utiliza Box y Typography de Material-UI para presentar el título de la categoría de manera
 * destacada. Grid se emplea para organizar los productos en una cuadrícula, proporcionando
 * una visualización coherente y estructurada.
 * 
 * Cada producto se representa mediante el componente ProductCard, que muestra información
 * clave del producto, como su nombre, imagen y precio. Esto permite una navegación e
 * interacción fluidas con cada producto.
 * 
 * El componente recibe como props el título de la categoría (`cateTitle`) y un arreglo de
 * productos filtrados (`filteredProducts`) para mostrar. Esto lo hace flexible y reutilizable
 * para diferentes categorías y selecciones de productos.
 * 
 * @param {string} cateTitle - Título de la categoría de productos.
 * @param {Array} filteredProducts - Arreglo de productos a mostrar en la categoría.
 * 
 * @example
 * <ProductsCategory 
 *   cateTitle="Categoría de Productos" 
 *   filteredProducts={[{ id: "1", name: "Producto 1", imgs: ["url"], price: "100", slug: "producto-1" }]} 
 * />
 * 
 * @returns {React.Component} Una sección o página de categoría con una colección de productos.
 */
export const ProductsCategory = ({
  cateTitle,
  filteredProducts
}) => {
  return (
    <Box>
      <Typography 
        variant='h1'
        component='h1'
        textAlign='center'
      >
        { cateTitle }
      </Typography>

      <Grid
        my={10}
        pb={ 10 }
        container
        spacing={ 4 }
      >
        {
          filteredProducts.map( ({ id, name, imgs, price, slug }) => (
            <React.Fragment key={ id }>
              <ProductCard
                currentProduct={{
                  id,
                  name,
                  imgs,
                  price,
                  slug
                }}
              />
            </React.Fragment>
          ))
        }
      </Grid>
    </Box>
  );
}

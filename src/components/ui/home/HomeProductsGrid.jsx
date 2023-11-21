// React
import React from 'react';
// Material UI
import {
  Box,
  Grid,
  Typography} from '@mui/material';
// Database
import { homeProdusts } from '@/database';
// Components
import { ProductCard } from '../products';

/**
 * `HomeProductsGrid` Component
 * 
 * Componente que muestra una cuadrícula de productos destacados en la página de inicio.
 * Ideal para presentar una selección de productos o servicios de manera destacada y atractiva.
 * 
 * Utiliza Box y Grid de Material-UI para estructurar la presentación de los productos.
 * Typography de Material-UI se utiliza para mostrar un título descriptivo de la sección.
 * 
 * Los datos de los productos se obtienen de `homeProdusts` en la base de datos o archivo
 * de configuración, y se muestran utilizando el componente ProductCard. Cada producto
 * se presenta con su nombre, imágenes, precio y slug.
 * 
 * Este componente facilita la exploración visual de los productos destacados y
 * fomenta la interacción del usuario con la selección de productos.
 * 
 * @example
 * <HomeProductsGrid />
 * 
 * @returns {React.Component} Una cuadrícula de tarjetas de productos para la página de inicio.
 */
export const HomeProductsGrid = () => {
  return (
    <Box py={ 10 }>
      <Typography
        variant='h2'
        textAlign='center'
        py={ 6 }
        fontSize={ 40 }
        fontWeight={ 600 }
      >
        Nuestros productos destacados
      </Typography>

      <Grid container spacing={ 4 }>
        {
          homeProdusts.map( ({
            id,
            name,
            imgs,
            slug,
            price
          }) => (
            <React.Fragment key={ id }>
              <ProductCard
                currentProduct={{
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

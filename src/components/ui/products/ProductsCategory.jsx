// Material UI
import {
  Box,
  Grid,
  Typography
} from '@mui/material';
import React from 'react';
// Components
import { ProductCard } from './';

export const ProductsCategory = ({ cateTitle, filteredProducts }) => {

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

// Material UI
import {
  Box,
  Grid,
  Typography
} from '@mui/material';
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
            <Grid
              key={ id }
              item
              xs={ 12 }
              sm={ 4 }
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <ProductCard
                currentProduct={{
                  id,
                  name,
                  imgs,
                  price,
                  slug
                }}
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

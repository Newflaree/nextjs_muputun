import {productsDB} from "@/database";
import {Box, Grid, Typography} from "@mui/material";
import {ProductCard} from ".";

const testProductData = [
  { id: '01', name: 'Test Product 1' },
  { id: '02', name: 'Test Product 2' },
  { id: '03', name: 'Test Product 3' },
]

export const ProductsCategory = ({ cateTitle }) => {
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
          testProductData.map( ({ id, name }) => (
            <Grid
              key={ id }
              item
              xs={ 12 }
              sm={ 4 }
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <ProductCard currentProduct={ productsDB[0] }/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

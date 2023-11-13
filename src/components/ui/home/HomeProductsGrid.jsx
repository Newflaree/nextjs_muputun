// Material UI
import {
  Box,
  Grid,
  Typography} from '@mui/material';
// Database
import { homeProdusts } from '@/database';
// 
import { ProductCard } from '../products';


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
          homeProdusts.map( ({ id, name, imgs, desc, slug }) => (
            <Grid
              key={ id }
              item
              xs={ 12 }
              sm={ 4 }
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <ProductCard currentProduct={{ name, imgs, desc, slug }} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

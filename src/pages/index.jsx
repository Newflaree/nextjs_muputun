// Material UI
import { Box, Grid, Typography } from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';
import {SlideHeader, SlideShow} from '@/components/ui/home';
import { ProductCard } from '@/components/ui';
import {homeProdusts} from '@/database';


const HomePage = () => {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc=''
    >
      <Box>
        <SlideHeader />
      </Box>

      <Box py={ 10 }>
        <Typography variant='h2' textAlign='center' py={ 6 } fontSize={ 40 } fontWeight={ 600 }>
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
    </MainLayout>
  );
}

export default HomePage;

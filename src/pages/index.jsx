// Material UI
import { Box, Grid, Typography } from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';
import {SlideHeader, SlideShow} from '@/components/ui/home';
import {ProductCard} from '@/components/ui';


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
        <Typography variant='h2' textAlign='center' py={4}>Productos Destacados</Typography>

        <Grid container spacing={ 4 }>
          <Grid
            item
            xs={ 12 }
            sm={ 4 }
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <ProductCard />
          </Grid>
          <Grid
            item
            xs={ 12 }
            sm={ 4 }
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <ProductCard />
          </Grid>
          <Grid
            item
            xs={ 12 }
            sm={ 4 }
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <ProductCard />
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
}

export default HomePage;

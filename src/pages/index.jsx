// HomePage.js
import {MainLayout} from '@/components/layouts';
import { Box, Grid, Typography, Button, Carousel } from '@mui/material';
// HomePage.js
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination]);

const HomePage = () => {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc=''
    >
      <Box
        height={'calc( 100vh - 100px )'}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h3'>HomePage</Typography>
      </Box>
    </MainLayout>
  );
}

export default HomePage;

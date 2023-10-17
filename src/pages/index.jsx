// HomePage.js
import {MainLayout} from '@/components/layouts';
import { Box, Grid, Typography, Button, Carousel } from '@mui/material';
// HomePage.js
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination]);

const HomePage = () => {
  return (
    <MainLayout>
      <h1>hoasflj</h1>
    </MainLayout>
  );
}

export default HomePage;

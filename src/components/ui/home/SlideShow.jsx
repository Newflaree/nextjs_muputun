// Next.js
import Image from 'next/image';
// Material UI
import { Box } from '@mui/material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from 'swiper/modules';
// Database
import { headerInfo } from '@/database';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const SlideShow = () => {
  return (
    <Box
      sx={{
        height: {
          xs: 'calc( 100vh - 100px )',
          sm: '500px'
        }
      }}
    >
      <Swiper
        spaceBetween={ 30 }
        effect={ "fade" }
        navigation={ true }
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[
          Autoplay,
          EffectFade,
          Navigation,
          Pagination
        ]}
        className="mySwiper"
      >
        {
          headerInfo.map( ({ id, imgd, imgm }) => (
            <SwiperSlide key={ id }>
              <Box sx={{
                display: {
                  xs: 'none',
                  sm: 'flex'
                }
              }}>
                <img
                  src={ imgd }
                />
              </Box>
              <Box sx={{
                display: {
                  xs: 'flex',
                  sm: 'none'
                }
              }}>
                <img
                  src={ imgm }
                />
              </Box>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  );
}

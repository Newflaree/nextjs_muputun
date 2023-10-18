import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const SlideShow = () => {
  return (
    <Box
      sx={{
        height: {
          xs: 'calc( 100vh - 100px )',
          sm: '400px'
        }
      }}
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay, EffectFade, Navigation, Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/newflare/image/upload/c_fill,h_1440,w_1920/v1694637238/demos/muputun/Copia_de_X5_MOBILE_-_METTA_vinculado_a_07_00427_wwrzrn.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/newflare/image/upload/c_fill,w_1920/v1694637245/demos/muputun/Copia_de_20230210_131928_aq1hro.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/newflare/image/upload/c_fill,w_1920/v1694637636/demos/muputun/Copia_de_Copia_de_20230210_124315_pmjcb7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

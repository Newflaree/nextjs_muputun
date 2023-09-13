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
          xs: '300px',
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay, EffectFade, Navigation, Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/newflare/image/upload//c_thumb,w_1440,h_900,g_auto/v1692218033/bustagrand/banner/171317908_184296963525585_7864976729209806356_n_zqhecw.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/newflare/image/upload//c_thumb,w_1440,h_900,g_auto/v1692218033/bustagrand/banner/278182265_397551982200081_2172593407620871580_n_txgz0c.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/newflare/image/upload//c_thumb,w_1440,h_900,g_auto/v1692218033/bustagrand/banner/262979003_322756166346330_7667277787421249266_n_vh47kv.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/newflare/image/upload//c_thumb,w_1440,h_900,g_auto/v1692218033/bustagrand/banner/294628521_464183315536947_2309279060243524619_n_ufcn4m.jpg" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

// Next
import Image from 'next/image';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import {
  Autoplay,
  FreeMode,
  Navigation,
} from 'swiper/modules';


export const ProductMobileSlideshow = ({
  images,
  title,
  className
}) => {
  return (
    <div className={ className }>
      <Swiper
        style={{
          padding: 0,
          margin: 0,
          width: '100vw',
          height: '300px'
        }}
        navigation={ true }
        autoplay={{
          delay: 9000
        }}
        modules={[
          Autoplay,
          FreeMode,
          Navigation,
        ]}
        className='mySwiper2'
      >
        {
          images.map( ( image ) => (
            <SwiperSlide key={ image.url }>
              <Image
                width={ 700 }
                height={ 700 }
                src={ image.url }
                alt={ title }
                className='object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

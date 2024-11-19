// React
import {
  useState
} from 'react';
// Next
import Image from 'next/image';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {
  Autoplay,
  FreeMode,
  Navigation,
  Thumbs
} from 'swiper/modules';


export const ProductSlideshow = ({
  images,
  title,
  className
}) => {
  const [ thumbsSwiper, setThumbsSwiper ] = useState();

  return (
    <div className={ className }>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={ 10 }
        navigation={ true }
        autoplay={{
          delay: 9000
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[
          Autoplay,
          FreeMode,
          Navigation,
          Thumbs
        ]}
        className='mySwiper2'
      >
        {
          images.map( ( image ) => (
            <SwiperSlide key={ image.name }>
              <Image
                width={ 1920 }
                height={ 200 }
                src={  image.url }
                alt={ title }
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

       <Swiper
        onSwiper={ setThumbsSwiper }
        spaceBetween={ 10 }
        slidesPerView={ 4 }
        freeMode={ true }
        watchSlidesProgress={ true }
        modules={[
          FreeMode,
          Navigation,
          Thumbs
        ]}
        className="mySwiper mt-4"
      >
        {
          images.map( (image) => (
            <SwiperSlide key={ image.url }>
              <Image
                width={ 300 }
                height={ 300 }
                src={ image.url }
                alt={ title }
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

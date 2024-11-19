// Next
import Image from 'next/image';
import NextLink from 'next/link';
// Swiper
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {
  Autoplay,
  FreeMode,
  Navigation
} from 'swiper/modules';
// Database
import { headerInfo } from '@/database';


export const HomeSliderMobile = () => {
  const onSlideChange = () => {
    const images = document.querySelectorAll( '.mySwiper .animate__animated' );

    images.forEach( img => {
      img.classList.remove( 'animate__fadeInLeft' );
      setTimeout( () => img.classList.add( 'animate__fadeInLeft' ), 50 );
    });
  }

  if ( !headerInfo ) <></>

  return (
    <div className='rounded-lg mb-20 sm:hidden'>
      <Swiper
        onSlideChange={ onSlideChange }
        style={{
          padding: 0,
          margin: 0,
          height: '800px'
        }}
        navigation={ true }
        autoplay={{
          delay: 6000
        }}
        modules={[
          Autoplay,
          FreeMode,
          Navigation,
        ]}
        className='mySwiper2'
      >
        {
          headerInfo.map( item => (
            <SwiperSlide key={ item.id }>
              <div className={ `w-full h-full relative` }>
                  <div className={ `w-full h-full z-10 absolute` }>
                    <Image
                      src={ item.imgd }
                      alt={ item.title }
                      fill  
                    />
                  </div>

                  <div className='w-full h-full bg-black opacity-50 absolute z-20' />

                  <div className='flex justify-center items-center w-full absolute p-5 z-30'>
                    <div className='flex flex-col'>


                    <div className='p-10'>
                      {
                        item.png && <Image
                          priority
                          className='animate__animated animate__fadeInLeft'
                          style={{ width: '100%', height: 'auto' }}
                          src={ item.png }
                          alt={ item.title }
                          width={ 500 }
                          height={ 300 }
                        />
                      }
                    </div>

                    <div className={ `p-10 w-full ${ item.title === 'Conoce a Mettatec' ? 'mt-[50%]' : '' }` }>
                      <h2 className='text-3xl text-mupu mb-5 font-bold'>{ item.title }</h2>
                      <p className='text-white mb-10'>{ item.desc }</p>

                      <button className='btn-primary'>
                        {
                          ( item.title == 'Conoce a Mettatec' )
                            ? <a href={ item.path } target='_blank'>
                                { item.btn }
                              </a>
                            : <NextLink href={ item.path }>
                                { item.btn }
                              </NextLink>
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

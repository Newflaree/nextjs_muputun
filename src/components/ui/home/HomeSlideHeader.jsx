// Next.js
import NextLink from 'next/link';
import Image from 'next/image';
// Material UI
import {
  Box,
  Button,
  Typography
} from '@mui/material';
// Swiper
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from 'swiper/modules';
// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Database
import { headerInfo } from '@/database';

/**
 * `HomeSlideHeader` Component
 * 
 * Componente que renderiza un carrusel de diapositivas con títulos, descripciones,
 * botones y una imagen de fondo. Las imágenes PNG entran con una animación.
 * 
 * Utiliza Swiper para la funcionalidad del carrusel y Material-UI para el estilo.
 * 
 * @example
 * <HomeSlideHeader />
 * 
 * @returns {React.Component} El componente del carrusel de diapositivas para la página principal.
 */
export const HomeSlideHeader = () => {
  return (
    <Box
      sx={{
        borderRadius: '8px',
        height: {
          xs: 'calc( 100vh )',
          sm: '500px'
        }
      }}
    >
      <Swiper
        style={{ borderRadius: 6 }}
        spaceBetween={ 30 }
        effect={ "fade" }
        navigation={ true }
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 12000,
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
          headerInfo.map( ({
            id,
            title,
            desc,
            btn,
            path,
            imgd,
            imgm,
            png
          }) => (
            <SwiperSlide key={ id }>
              <Box
                sx={{
                  borderRadius: '8px',
                  paddingY: '30px',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: {
                    xs: `url( ${ imgd } )`,
                    sm: `url( ${ imgm } )`
                  }
                }}
              >
                {
                  ( png.length > 0 ) && (
                    <Box
                      width={ 400 }
                      position='absolute'
                      sx={{
                        right: {
                          xs: 4,
                          md: 40
                        },
                        bottom: {
                          xs: 200,
                          md: 40
                        }
                      }}
                    >
                      <Image 
                        priority={ true }
                        className='animate__animated animate__fadeInRight'
                        src={ png }
                        alt={ title }
                        width={ 270 }
                        height={ 420 }
                      />
                    </Box>
                  )
                }

                <Box
                  color='white'
                  sx={{
                    backgroundColor: 'rgba( 0, 0, 0, 0.3 )',
                    top: 0,
                    bottom: 0,
                    padding: '30px',
                    position: 'absolute',
                    zIndex: 1
                  }}
                >
                  <Typography
                    variant='h1'
                    component='h1'
                    my={ 4 }
                    sx={{
                      zIndex: 10,
                      pt: '40px',
                      px: '30px',
                      fontSize: {
                        xs: 55,
                        sm: 70
                      }
                    }}
                  >
                    { title }
                  </Typography>

                  <Typography
                    px='30px'
                    variant='p'
                    component='p'
                    sx={{
                      fontSize: {
                        xs: 20,
                        sm: 24
                      }
                    }}
                  >
                    { desc }
                  </Typography>

                  {
                    ( id === 'hi-001' )
                      ? (
                        <NextLink
                          href={ path }
                          passHref
                          legacyBehavior
                        >
                          <Button
                            target='_blank'
                            sx={{
                              mx: '30px',
                              mt: 7,
                              fontSize: '22px',
                              color: 'white',
                              ':hover': {
                                backgroundColor: 'primary.dark'
                              }
                            }}
                          >
                            { btn }
                          </Button>
                        </NextLink>
                      )
                      : (
                        <NextLink
                          href={ path }
                          passHref
                          legacyBehavior
                        >
                          <Button
                            sx={{
                              mx: '30px',
                              mt: 7,
                              fontSize: '22px',
                              color: 'white',
                              ':hover': {
                                backgroundColor: 'primary.dark'
                              }
                            }}
                          >
                             { btn }
                          </Button>
                        </NextLink>
                      )
                  }
                </Box>
              </Box>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  );
}

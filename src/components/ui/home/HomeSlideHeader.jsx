// Next.js
import NextLink from 'next/link';
import Image from 'next/image';
// Material UI
import {
  Box,
  Button,
  Grid,
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
 * Componente de React que muestra un carrusel de diapositivas en la página de inicio,
 * proporcionando una presentación visualmente atractiva de contenido destacado como
 * promociones, productos o servicios especiales.
 * 
 * Utiliza `Swiper` de Swiper React para crear un carrusel interactivo con efectos de
 * transición suaves y navegación intuitiva. Incluye funcionalidades como autoplay, navegación
 * manual y paginación clickeable.
 * 
 * El componente integra imágenes, textos y botones en cada diapositiva, permitiendo una
 * presentación rica y dinámica. Cada diapositiva puede contener información específica,
 * como título, descripción y un botón para acciones específicas.
 * 
 * La animación de las imágenes se actualiza en cada cambio de diapositiva para mantener
 * la interactividad y el interés visual.
 * 
 * Este componente es clave para capturar la atención de los usuarios y promover la exploración
 * de productos, servicios o promociones destacadas en la aplicación.
 * 
 * @returns {React.Component} Un componente carrusel para la presentación destacada en la página de inicio.
 */
export const HomeSlideHeader = () => {
  const onSlideChange = () => {
    const images = document.querySelectorAll( '.mySwiper .animate__animated' );

    images.forEach( img => {
      img.classList.remove( 'animate__fadeInLeft' );
      setTimeout( () => img.classList.add( 'animate__fadeInLeft' ), 50 );
    });
  }

  return (
    <Box
      sx={{
        borderRadius: '8px',
        height: {
          xs: 'calc( 100vh + 70px )',
          sm: '500px'
        }
      }}
    >
      <Swiper
        onSlideChange={ onSlideChange }
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
                <Box
                  color='white'
                  sx={{
                    backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
                    top: 0,
                    bottom: 0,
                    padding: '30px',
                    position: 'absolute',
                    zIndex: 1
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      className='animate__animated animate__fadeIn'
                      xs={ 12 }
                      md={ 6 }
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100%',
                      }}
                    >
                      {
                        ( png.length > 0 ) && (
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: {
                                xs: 320,
                                md: 320
                              },
                              height: {
                                xs: '100%',
                                md: '50%'
                              },
                              marginTop: {
                                xs: 1,
                                md: 7
                              }
                            }}
                          >
                            <Image 
                              priority
                              className='animate__animated animate__fadeInLeft'
                              style={{ width: '100%', height: 'auto' }}
                              src={ png }
                              alt={ title }
                              width={ 400 }
                              height={ 300 }
                            />
                          </Box>
                        )
                      }
                    </Grid>

                    <Grid item xs={ 12 } md={ 6 }>
                      <Typography
                        variant='h1'
                        component='h1'
                        color='primary'
                        my={ 4 }
                        sx={{
                          zIndex: 10,
                          pt: '20px',
                          px: '30px',
                          fontSize: {
                            xs: 35,
                            sm: 40
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
                          zIndex: 10,
                          fontSize: {
                            xs: 16,
                            sm: 18
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
                      </Grid>
                  </Grid>
                </Box>
              </Box>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  );
}

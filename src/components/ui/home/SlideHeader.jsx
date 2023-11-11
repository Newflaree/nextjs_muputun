// Next.js
import NextLink from 'next/link';
import Image from 'next/image';
// Material UI
import { Box, Button, Typography } from '@mui/material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
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


export const SlideHeader = () => {
  return (
    <Box
      sx={{
        height: {
          xs: 'calc( 100vh )',
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
          delay: 6000,
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
            imgm
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
                  }}
                >
                  <Typography
                    variant='h1'
                    component='h1'
                    my={ 4 }
                    sx={{
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

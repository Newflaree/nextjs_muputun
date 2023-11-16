// React
import {
  useMemo,
  useState
} from 'react';
// Next.js
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Material UI
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';


export const ProductCard = ({ currentProduct }) => {
  const [ isHovered, setIsHovered ] = useState( false );
  const [ isImageLoaded, setIsImageLoaded ] = useState( false );
  const router = useRouter();

  const {
    name = '',
    imgs = [],
    price = '',
    slug = ''
  } = currentProduct;

  const productImage = useMemo( () => {
    return isHovered
      ? imgs[1].url || ''
      : imgs[0].url || '' 
  }, [ isHovered, imgs ]);

  const onNavigateTo = () => {
    router.push( `/productos/${ slug }` )
  }

  const onNavigateToCloud = () => {
    router.push( slug )
  }

  return (
    <Grid
      item
      xs={ 12 }
      sm={ 4 }
      display='flex'
      justifyContent='center'
      alignItems='center'
      onMouseEnter={ () => setIsHovered( true ) }
      onMouseLeave={ () => setIsHovered( false ) }
    >
      <Card
        sx={{
          maxWidth: 350,
          width: 350,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Image
          priority={ true }
          alt={ name }
          height={ 40 }
          width={ 110 }
          src='/logo.png'
          style={{
            position: 'absolute',
            zIndex: '99',
            marginTop: 10,
            marginLeft: 10
          }}
        />

        <CardMedia
          className='fadeIn'
          component='img'
          onLoad={ () => setIsImageLoaded( true ) }
          image={ productImage }  
          alt={ name }
          onClick={
            ( name !== 'X5 Servicios Cloud' ) 
              ? onNavigateTo 
              : onNavigateToCloud
          }
          title={ name }
          sx={{
            height: 270,
            ':hover': {
              cursor: 'pointer',
            }
          }}
        />

        <CardContent
          sx={{
            display: isImageLoaded 
              ? 'block'
              : 'none'
          }}
        >
          <Typography
            onClick={
              ( name !== 'X5 Servicios Cloud' ) 
                ? onNavigateTo 
                : onNavigateToCloud
            }
            variant='h6'
            gutterBottom
            sx={{
              ':hover': {
                cursor: 'pointer',
                color: '#1FBEE8'
              }
            }}
          >
            { name }
          </Typography>

          {
            ( price !== '0' ) && (
              <Typography
                variant='h5'
                mt='16px'
                color='primary'
                textAlign='end'
              >
                { `$${ price }` }
              </Typography>
            )
          }

          <NextLink
            //href='/contacto'
            href={ name === 'X5 Servicios Cloud' ? slug : '/contacto' }
            passHref
            legacyBehavior
          >
            <Button
              variant='contained'
              size='large'
              color='primary'
              fullWidth
              sx={{
                mt: '16px',
                color: 'white',
                ':hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              {
                ( name !== 'X5 Servicios Cloud' )
                  ? 'Contactar'
                  : 'Servicios Cloud'
              }
            </Button>
          </NextLink>
        </CardContent>
      </Card>
    </Grid>
  );
}

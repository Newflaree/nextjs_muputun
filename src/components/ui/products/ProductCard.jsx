// Next.js
import NextLink from 'next/link';
import {useRouter} from 'next/router';
// Material UI
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';


export const ProductCard = ({ currentProduct }) => {
  const router = useRouter();


  const {
    name = '',
    imgs = [],
    price = '',
    slug = ''
  } = currentProduct;

  const onNavigateTo = () => {
    router.push( `/productos/${ slug }` )
  }

  return (
    <Card
      sx={{
        maxWidth: 300,
        width: 350,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <CardMedia
        onClick={ onNavigateTo }
        image={ imgs[0].url }
        title={ name }
        sx={{
          height: 270,
          ':hover': {
            cursor: 'pointer',
          }
        }}
      />

      <CardContent>
        <Typography
          onClick={ onNavigateTo }
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

        <Typography
          variant='h5'
          mt='16px'
          color='primary'
          textAlign='end'
        >
          { price }
        </Typography>

        <NextLink
          href='/contacto'
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
            Reserva Ya
          </Button>
        </NextLink>
      </CardContent>
    </Card>
  );
}

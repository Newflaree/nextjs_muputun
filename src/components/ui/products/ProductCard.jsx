// Next.js
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import {productsDB} from '@/database';


const testProduct = productsDB[0];

export const ProductCard = () => {
  const router = useRouter();
  const {
    name,
    desc,
    imgs,
    price,
    slug
  } = testProduct;

  const onNavigateTo = () => {
    router.push( `/productos/${ slug }` )
  }


  return (
    <Card
      sx={{
        maxWidth: 300,
        width: 300,
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
          variant='body2'
          component='p'
          color='secondary'
        >
          { desc }
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
            Contactar
          </Button>
        </NextLink>
      </CardContent>
    </Card>
  );
}

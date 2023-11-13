// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Box,
  Button,
  Typography
} from '@mui/material';


export const ProductBanner = ({ banner, name }) => {
  return (
      <Box
      sx={{
        borderRadius: '8px',
        backgroundImage: `url(${banner})`,
        backgroundColor: 'gray',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }}
    >
      <Typography
        variant='h1'
        align='center'
        my={ 4 }
      >
        { name }
      </Typography>

      <NextLink
        href='/contacto'
        passHref
        legacyBehavior
      >
        <Button
          variant='contained'
          color='primary'
          size='large'
          sx={{
            fontSize: 20,
            mt: '16px',
            color: 'white',
            ':hover': {
              bgcolor: 'primary.dark'
            }
          }}
        >
          Reservar Ahora
        </Button>
      </NextLink>
    </Box>
  );
}

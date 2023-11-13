import { Typography } from '@mui/material';


export const ProductNotice = () => {
  return (
    <Typography
      mt={ 4 }
      fontSize={ 20 }
      fontWeight={ 600 }
      textAlign='center'
      variant='h3'
      component='h3'
      color='black'
    >
      * Entrega dependerá del stock disponible y región a la que pertenece
    </Typography>
  );
}

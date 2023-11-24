// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Box,
  Button,
  Typography
} from '@mui/material';

/**
 * `ProductBanner` Component
 * 
 * Componente que muestra un banner promocional para un producto específico.
 * Ideal para destacar productos o servicios en la página web, captando la atención del usuario.
 * 
 * Utiliza Box de Material-UI para crear el banner con una imagen de fondo y estilos personalizados.
 * Typography muestra el nombre del producto de manera prominente, y Button proporciona
 * un enlace para acciones como reservas o más información.
 * 
 * El componente recibe como props la URL de la imagen del banner y el nombre del producto.
 * El botón dirige al usuario a una página de contacto o reserva, mejorando la conversión
 * y la interacción con los clientes.
 * 
 * La combinación de imagen, texto y botón de acción crea un impacto visual fuerte,
 * fomentando la interacción del usuario con el contenido promocionado.
 * 
 * @param {string} banner - URL de la imagen de fondo del banner.
 * @param {string} name - Nombre del producto o servicio promocionado.
 * 
 * @example
 * <ProductBanner 
 *   banner="url-de-la-imagen-del-banner.jpg"
 *   name="Nombre del Producto" 
 * />
 * 
 * @returns {React.Component} Un banner promocional para productos o servicios.
 */
export const ProductBanner = ({
  banner,
  bannerMobile,
  name
}) => {
  return (
    <Box
      sx={{
        borderRadius: '8px',
        backgroundImage: {
          xs: `url(${bannerMobile})`,
          md: `url(${banner})`,
        },
        backgroundSize: {
          xs: 'cover',
          md: 'cover'
        },
        backgroundPosition: 'center',
        height: '50vh',
        display: 'flex',
        color: 'white'
      }}
    >
      <Box
        sx={{
          borderRadius: '8px',
          backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          padding: '30px',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
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
    </Box>
  );
}

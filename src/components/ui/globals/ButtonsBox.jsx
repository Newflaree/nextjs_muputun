// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Box,
  IconButton,
  Link
} from '@mui/material';
// Mateial Icons
import {
  ArrowUpward,
  WhatsApp
} from '@mui/icons-material';

/**
 * `ButtonsBox` Component
 * 
 * Componente que muestra una caja fija en la pantalla con botones de acción.
 * Incluye un botón para desplazarse hacia arriba en la página y otro para
 * abrir un enlace de WhatsApp en una nueva pestaña.
 * 
 * Utiliza IconButton y Link de Material-UI para los botones, y ArrowUpwardIcon
 * y WhatsAppIcon de Material Icons para los íconos. La caja se mantiene fija
 * en la parte inferior derecha de la pantalla.
 * 
 * El botón de WhatsApp redirige a un chat con un número predefinido.
 * El botón de desplazamiento hacia arriba lleva al usuario al principio de la página.
 * 
 * @example
 * <ButtonsBox />
 * 
 * @returns {React.Component} El componente de caja de botones para acciones rápidas.
 */
export const ButtonsBox = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      zIndex={ 100 }
      bgcolor='#5C5D5F'
      display='flex'
      flexDirection='column'
      position='fixed'
      borderRadius={ 4 }
      bottom={ 15 }
      right={ 15 }
      p={ 1 }
    >
      <IconButton onClick={ scrollToTop }>
          <ArrowUpward
            color='primary'
            sx={{
              paddingBottom: '2px',
              fontSize: '35px',
              transition: 'all 0.3s ease',
              ':hover': {
                color: 'primary.light',
              }
            }}
          />
      </IconButton>
      <IconButton>
        <NextLink 
          href={ 'https://wa.me/+56987754953' }
          passHref 
          legacyBehavior
        >
          <Link
            target='_blank'
          >
          <WhatsApp
            sx={{
              paddingBottom: '2px',
              fontSize: '35px',
              transition: 'all 0.3s ease',
              mt: 0.5,
              ':hover': {
                color: 'primary.light',
              }
            }}
          />
          </Link>
        </NextLink>
      </IconButton>
    </Box>
  );
}

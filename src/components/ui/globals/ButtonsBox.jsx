// Next.js
import NextLink from 'next/link';
// Material UI
import {IconButton, Link} from '@mui/material';
// Mateial Icons
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const ButtonsBox = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openWhatsApp = () => {
    console.log( 'ToWspp' );
  };

  return (
    <div className="caja-con-botones">
      <IconButton className="boton-circular toUp-btn" onClick={scrollToTop}>
          <ArrowUpwardIcon
            color='primary'
            sx={{
              paddingBottom: '2px',
              fontSize: '35px',
              transition: 'all 0.3s ease',
            }}
          />
      </IconButton>
      <IconButton className="boton-circular wspp-btn" onClick={openWhatsApp}>
        <NextLink 
          href={ 'https://wa.me/+56934456756' }
          passHref 
          legacyBehavior
        >
          <Link
            target='_blank'
          >
          <WhatsAppIcon
            sx={{
              paddingBottom: '2px',
              fontSize: '35px',
              transition: 'all 0.3s ease',
              mt: 0.5
            }}
          />
          </Link>
        </NextLink>
      </IconButton>
    </div>
  );
}

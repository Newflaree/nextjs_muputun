// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Box,
  IconButton,
  Link
} from '@mui/material';
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

  return (
    <Box
      zIndex={100}
      bgcolor={ '#5C5D5F' }
      display='flex'
      flexDirection='column'
      position='fixed'
      borderRadius={ 4 }
      bottom={ 15 }
      right={ 15 }
      p={ 1 }
    >
      <IconButton onClick={scrollToTop}>
          <ArrowUpwardIcon
            color='primary'
            sx={{
              paddingBottom: '2px',
              fontSize: '35px',
              transition: 'all 0.3s ease',
            }}
          />
      </IconButton>
      <IconButton>
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
    </Box>
  );
}

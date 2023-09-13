// Next.js
import NextLink from 'next/link';
// Material UI, Link
import { IconButton, Link } from '@mui/material';
// Mateial Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WSPPBtn = () => {
  return (
    <IconButton>
      <NextLink 
        href={ 'https://wa.me/+56946477646' }
        passHref 
        legacyBehavior
      >
        <Link
          target='_blank'
          sx={{
            margin: '',
            padding: 2,
            backgroundColor: 'green',
            borderRadius: '50%',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
        >
          <WhatsAppIcon
            sx={{
              paddingTop: '2px',
              fontSize: '35px',
              transition: 'all 0.3s ease',
              color: 'white',
              ":hover": {
                fontSize: '40px'
              }
            }}
          />
        </Link>
      </NextLink>
    </IconButton>
  );
}

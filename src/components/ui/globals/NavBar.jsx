// Reacto
import { useContext } from 'react';
// Next.js
import Image from 'next/image';
import NextLink from 'next/link';
// Material UI
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography
} from '@mui/material';
// Material Icons
import MenuIcon from '@mui/icons-material/Menu';
// Context
import { UIContext } from '@/context';


export const NavBar = () => {
  const { toggleSideMenu } = useContext( UIContext );

  return (
    <AppBar>
      <Toolbar>
        <NextLink
          href='/'
          passHref
          legacyBehavior
        >
          <Link
            mt={ 1 }
            display='flex'
            alignItems='center'
            color='black'
          >
            <Image 
              src='https://res.cloudinary.com/newflare/image/upload/v1696360099/demos/muputun/iticvytqrtp6xn8svvzt.svg'
              alt='Logo Müputun'
              width={ 140 }
              height={ 50 }
            />
          </Link>
        </NextLink>

        <Box flex={ 1 } />

        {/*
          <Button
          onClick={ toggleSideMenu }
          sx={{
            display: {
              xs: 'flex',
              sm: 'none'
            }
          }}
        >
          <MenuIcon />
        </Button>

        */}


      </Toolbar>
    </AppBar>
  );
}

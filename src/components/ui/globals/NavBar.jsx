// React
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
} from '@mui/material';
// Material Icons
import { Menu } from '@mui/icons-material';
// Context
import { UIContext } from '@/context';

/**
 * `NavBar` Component
 * 
 * Componente de barra de navegación para la aplicación web. Presenta un logo
 * que actúa como enlace a la página de inicio y un botón para activar un menú lateral.
 * 
 * Utiliza AppBar y Toolbar de Material-UI para la estructura de la barra de navegación,
 * y Link y Button para el enlace y el botón, respectivamente. El logo se maneja con
 * Image de Next.js, y el ícono del menú lateral con el componente Menu de Material Icons.
 * 
 * La función toggleSideMenu del contexto UIContext se utiliza para controlar la
 * apertura y cierre del menú lateral.
 * 
 * Este componente es un elemento clave en la interfaz de usuario, proporcionando
 * acceso rápido a las secciones principales de la aplicación y manteniendo un diseño
 * coherente y funcional.
 * 
 * @example
 * <NavBar />
 * 
 * @returns {React.Component} El componente de barra de navegación para la aplicación web.
 */
export const NavBar = () => {
  const { toggleSideMenu } = useContext( UIContext );
  const logoUrl = 'https://res.cloudinary.com/newflare/image/upload/v1696360099/demos/muputun/iticvytqrtp6xn8svvzt.svg';

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
              src={ logoUrl }
              priority={ true }
              alt='Logo Müputun'
              width={ 140 }
              height={ 50 }
            />
          </Link>
        </NextLink>

        <Box flex={ 1 } />

        <Button
          onClick={ toggleSideMenu }
          sx={{
            color: 'white',
            ':hover': {
              bgcolor: 'primary.dark'
            }
          }}
        >
          <Menu />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

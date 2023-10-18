// React
import { useContext } from 'react';
// NextJS
import NextLink from 'next/link';
// Material UI
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
} from '@mui/material';
// Context
import { UIContext } from '@/context';


const menuPaths = [
  { 
    id: 'mi01',
    name: 'Inicio',
    path: '/'
  },
  { 
    id: 'mi02',
    name: 'Sobre Nosotros',
    path: 'sobre-nosotros'
  },
  { 
    id: 'mi03',
    name: 'Productos',
    path: 'productos'
  },
  { 
    id: 'mi04',
    name: 'Donde Estamos',
    path: 'donde-estamos'
  },
  { 
    id: 'mi05',
    name: 'Contacto',
    path: 'contacto'
  },
];


export const SideMenu = () => {
  const { toggleSideMenu, isMenuOpen } = useContext( UIContext );

  return (
     <Drawer
      open={ isMenuOpen }
      onClose={ toggleSideMenu }
      anchor='right'
      sx={{
        backdropFilter: 'blur(4px)',
        transition: 'all 0.5s ease-out'
      }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List >
          {
            menuPaths.map( ({ id, name, path }) => (
              <ListItem
                onClick={ toggleSideMenu }
                key={ id }
              >
                <NextLink
                  href={ path }
                  passHref
                  legacyBehavior
                >
                  <Link ml={2} fontSize='20px'>
                    { name }
                  </Link>
                </NextLink>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  );
}

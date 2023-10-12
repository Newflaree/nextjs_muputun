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
    path: '/about'
  },
  { 
    id: 'mi03',
    name: 'Productos',
    path: '/products'
  },
  { 
    id: 'mi04',
    name: 'Contacto',
    path: '/contact'
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
          {/*TODO: Crear NextLinks*/}
          {
            menuPaths.map( ({ id, name, path }) => (
              <ListItem key={ id }>
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

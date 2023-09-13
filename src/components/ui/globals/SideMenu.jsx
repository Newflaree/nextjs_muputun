// React
import { useContext } from 'react';
// Material UI
import {
  Box,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
// Context
import { UIContext } from '@/context';


export const SideMenu = () => {
  const { toggleSideMenu, isMenuOpen } = useContext( UIContext )

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
        <List>
          {/*TODO: Crear NextLinks*/}
          <ListItem>
            Inicio
          </ListItem>
          <ListItem>
            Quienes Somos
          </ListItem>
          <ListItem>
            Services
          </ListItem>
          <ListItem>
            Galería
          </ListItem>
          <ListItem>
            Cotiza Acá
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

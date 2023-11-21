// React
import { useState } from 'react';
// NextJS
import NextLink from 'next/link';
// Material UI
import {
  Box,
  Link,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
// Material Icons
import {
  KeyboardArrowDown,
  KeyboardArrowUp
} from '@mui/icons-material';

/**
 * `SideMenuSubmenu` Component
 * 
 * Componente para un submenú desplegable dentro del menú lateral de la aplicación.
 * Permite agrupar múltiples elementos de menú bajo una categoría común.
 * 
 * Utiliza ListItem y Menu de Material-UI para estructurar el submenú y los elementos
 * individuales dentro de él. El estado de apertura del submenú se maneja mediante
 * un componente de estado local.
 * 
 * Al hacer clic en el título del submenú, se despliega un menú con opciones adicionales,
 * cada una implementada como un enlace con NextLink. Los íconos KeyboardArrowDown y
 * KeyboardArrowUp de Material Icons indican visualmente el estado del submenú (abierto o cerrado).
 * 
 * Cada elemento del submenú es un enlace que, al hacer clic, navega a su ruta respectiva
 * y cierra el menú lateral.
 * 
 * @param {function} toggleSideMenu - Función para alternar la visibilidad del menú lateral.
 * @param {string} id - Identificador único del submenú.
 * @param {string} path - Ruta asociada con el submenú (no siempre utilizada).
 * @param {string} pathname - Ruta actual en la aplicación.
 * @param {string} name - Nombre del submenú.
 * @param {array} submenu - Arreglo de elementos que pertenecen al submenú.
 * 
 * @example
 * <SideMenuSubmenu 
 *   toggleSideMenu={toggleFunc}
 *   id="submenu-1"
 *   path="/category"
 *   pathname={currentPathname}
 *   name="Categoría"
 *   submenu={[{ id: "1", name: "SubItem 1", path: "/subitem1" }]}
 * />
 * 
 * @returns {React.Component} Un submenú desplegable para el menú lateral de la aplicación.
 */
export const SideMenuSubmenu = ({
  toggleSideMenu,
  id,
  path,
  pathname,
  name,
  submenu
}) => {
  const [ anchorEl, setAnchorEl ] = useState( null );
  const open = Boolean( anchorEl );

  const handleClick = ( event ) => {
    setAnchorEl( event.currentTarget );
  };
  const handleClose = () => {
    setAnchorEl( null );
  };

  return (
    <>
      <ListItem
        key={ id }
        id="basic-button"
        aria-controls={ open ? 'basic-menu' : undefined }
        aria-haspopup="true"
        aria-expanded={ open ? 'true' : undefined }
        onClick={ handleClick }
      >
        <Link
          ml={ 2 }
          fontSize='20px'
          sx={{ ':hover': { color: '#1FBEE8', cursor: 'pointer' } }}
          color={ 
            ( open )
              ? 'primary'
              : 'secondary'
          }
        >
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
          >
            { name } 

            {
              ( open )
                ? ( <KeyboardArrowUp /> )
                : ( <KeyboardArrowDown /> )
            }
          </Box>
        </Link>
        </ListItem>
      <Menu
        id="basic-menu"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          submenu.map( ({ id, name, path }) => (
            <MenuItem key={ id }>
              <NextLink
                href={ `${ path }` }
                passHref
                legacyBehavior
              >
                <Typography
                  onClick={ toggleSideMenu }
                  className='cursor-pointer'
                  color='secondary'
                  border='none'
                  sx={{ ':hover': { color: '#1FBEE8' } }}
                >
                  { name }
                </Typography>
              </NextLink>
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );
}

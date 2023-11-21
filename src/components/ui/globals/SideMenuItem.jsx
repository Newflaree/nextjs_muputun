// Next.js
import NextLink from 'next/link';
// Material UI
import { Link, ListItem } from '@mui/material';

/**
 * `SideMenuItem` Component
 * 
 * Componente individual para un elemento del menú lateral en la aplicación.
 * Representa un enlace de navegación simple dentro del Drawer del menú lateral.
 * 
 * Utiliza ListItem de Material-UI para estructurar el elemento del menú y Link de Next.js
 * para manejar la navegación. El estilo y comportamiento del enlace se personaliza con
 * propiedades de Material-UI.
 * 
 * El color del enlace cambia según si la ruta actual coincide con el path del elemento
 * del menú, proporcionando una retroalimentación visual al usuario sobre su ubicación
 * actual en la aplicación.
 * 
 * El componente recibe props para controlar la navegación, la ruta actual, y la información
 * del elemento del menú, como el ID, el nombre y la ruta de destino.
 * 
 * @param {function} toggleSideMenu - Función para alternar la visibilidad del menú lateral.
 * @param {string} id - Identificador único del elemento del menú.
 * @param {string} path - Ruta de navegación del elemento del menú.
 * @param {string} pathname - Ruta actual en la aplicación.
 * @param {string} name - Nombre visible del elemento del menú.
 * 
 * @example
 * <SideMenuItem 
 *   toggleSideMenu={toggleFunc} 
 *   id="menu-item-1" 
 *   path="/home" 
 *   pathname={currentPathname} 
 *   name="Inicio" 
 * />
 * 
 * @returns {React.Component} Un elemento individual del menú lateral para la navegación.
 */
export const SideMenuItem = ({
  toggleSideMenu,
  id,
  path,
  pathname,
  name
}) => {
  return (
    <ListItem
      key={ id }
      onClick={ toggleSideMenu }
    >
      <NextLink
        href={ path }
        passHref
        legacyBehavior
      >
        <Link
          ml={ 2 }
          fontSize='20px'
          sx={{ ':hover': { color: '#1FBEE8' } }}
          color={ 
            ( pathname === path )
              ? 'primary'
              : 'secondary'
          }
        >
          { name }
        </Link>
      </NextLink>
    </ListItem>
  );
}

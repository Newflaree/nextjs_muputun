// React
import React, { useContext } from 'react';
// Next.js
import { useRouter } from 'next/router';
// Material UI
import {
  Box,
  Drawer,
  List,
} from '@mui/material';
// Components
import {
  SideMenuItem,
  SideMenuSubmenu
} from './';
// Context
import { UIContext } from '@/context';
// Database
import { menuPaths } from '@/database';

/**
 * `SideMenu` Component
 * 
 * Componente de menú lateral desplegable para la navegación en la aplicación.
 * Utiliza Drawer de Material-UI para proporcionar un panel deslizable que contiene enlaces
 * de navegación, implementados a través de los componentes SideMenuItem y SideMenuSubmenu.
 * 
 * La estructura de navegación se define en el arreglo `menuPaths` proveniente de una base
 * de datos o archivo de configuración. Cada elemento del menú puede ser un enlace simple
 * o un submenú con más opciones.
 * 
 * La visibilidad del menú se controla mediante el contexto UIContext, que proporciona
 * una función para abrir y cerrar el menú. Esto permite una navegación fluida y adaptable
 * a diferentes tamaños de pantalla.
 * 
 * El menú es sensible al contexto de la ruta actual, permitiendo una interacción dinámica
 * con la navegación de la aplicación.
 * 
 * @example
 * <SideMenu />
 * 
 * @returns {React.Component} El componente de menú lateral para la navegación en la aplicación.
 */
export const SideMenu = () => {
  const { toggleSideMenu, isMenuOpen } = useContext( UIContext );
  const { pathname } = useRouter();

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
      <Box sx={{ width: 300, paddingTop: 5 }}>
        <List >
          {
            menuPaths.map( ({
              id,
              name,
              path,
              submenu
            }) => (
              <React.Fragment key={ id }>
                {
                  ( submenu.length > 0 )
                    ? (
                      <SideMenuSubmenu
                        id={ id }
                        name={ name }
                        path={ path }
                        pathname={ pathname }
                        submenu={ submenu }
                        toggleSideMenu={ toggleSideMenu } 
                      /> 
                    )
                    : ( 
                      <SideMenuItem
                        id={ id }
                        name={ name }
                        path={ path }
                        pathname={ pathname }
                        toggleSideMenu={ toggleSideMenu } 
                      /> 
                    )
                }
              </React.Fragment>
            ))
          }
        </List>
      </Box>
    </Drawer>
  );
}

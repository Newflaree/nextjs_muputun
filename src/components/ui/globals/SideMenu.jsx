// React
import React, { useContext } from 'react';
// NextJS
import { useRouter } from 'next/router';
// Material UI
import {
  Box,
  Drawer,
  List,
} from '@mui/material';

// Components
import { SideMenuItem, SideMenuSubmenu } from './';
// Context
import { UIContext } from '@/context';
// Database
import { menuPaths } from '@/database';


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

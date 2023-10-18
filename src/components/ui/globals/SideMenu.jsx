// React
import { useContext } from 'react';
// NextJS
import NextLink from 'next/link';
import { useRouter } from 'next/router';
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
                  <Link
                    ml={ 2 }
                    fontSize='20px'
                    color={ ( pathname === path ) ? 'primary' : 'secondary' }
                  >
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

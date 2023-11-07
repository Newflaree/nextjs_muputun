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

  const closeAll = () => {
    toggleSideMenu();
    setAnchorEl( null );
  }

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
          sx={{ ':hover': { color: '#1FBEE8' } }}
          color={ 
            ( pathname === path )
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
          submenu.map( ({ id, name }) => (
            <MenuItem key={ id }>
              <NextLink
                href='/'
                passHref
                legacyBehavior
              >
                <Typography
                  onClick={ toggleSideMenu }
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

// NextJS
import NextLink from 'next/link';
// Material UI
import { Link, ListItem } from '@mui/material';


export const SideMenuItem = ({ toggleSideMenu, id, path, pathname, name }) => {
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

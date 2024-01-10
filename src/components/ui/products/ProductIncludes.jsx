import { List, ListItem } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';


export const ProductIncludes = ({ items }) => {
  console.log( items );
  return (
    <List sx={{ marginLeft: 3 }}>
      {
        items.map( ({ name }) => (
          <ListItem key={ name }>
            <FiberManualRecord sx={{ mr: 2 }} />
            { name }
          </ListItem>
        ))
      }
    </List>
  );
}

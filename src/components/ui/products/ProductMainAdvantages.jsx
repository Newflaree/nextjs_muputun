// Material UI
import {
  Box,
  List,
  ListItem,
  Typography
} from '@mui/material';
// Material Icons
import { FiberManualRecord } from '@mui/icons-material';


export const ProductMainAdvantages = ({ mainAdv }) => {
  return (
    <Box my={ 10 }>
      <Typography
        variant='h5'
        textAlign='center'
        paragraph
      >
        Principales Ventajas
      </Typography>

      <List>
        {
          mainAdv.map( ({ advItem }) =>(
            <ListItem key={ advItem }>
              <FiberManualRecord sx={{ mr: 2 }}/>
              { advItem }
            </ListItem>
          ))
        }
      </List>
    </Box>
  );
}

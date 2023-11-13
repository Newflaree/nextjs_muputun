// Material UI
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
// Material Icons
import { FiberManualRecord } from '@mui/icons-material';


export const ProductTechSpecs = ({ techSpecs }) => {
  return (
    <Paper
      elevation={ 4 }
      sx={{
        backgroundColor: '#5C5D5F',
        color: 'white',
        p: '16px',
        mt: '16px',
        pb: '20px'
      }}
    >
      <Typography
        variant='h2'
        component='h2'
        textAlign='center'
        my={ 4 }
      >
        Especificaciones Técnicas
      </Typography>
      <List>
        {
          techSpecs.map( ({ primary, secondary }) => (
            <ListItem key={ primary }>
              <ListItemText
                primary={ primary }
                secondary={ (<>
                  { 
                    secondary.map( ({ spec }) => (
                      <ListItem key={ spec } sx={{ color: 'white' }}>
                        <FiberManualRecord sx={{ mr: 2 }}/>
                        { spec }
                      </ListItem>
                    ))
                  }
                  </>)
                }
              />
            </ListItem>
          ))
        }
      </List>
    </Paper>
  );
}

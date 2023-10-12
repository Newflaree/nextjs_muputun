// Material UI
import { Box, Typography } from '@mui/material';
// Material Icons
import ConstructionIcon from '@mui/icons-material/Construction';

export const InBuilding = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='calc( 100vh - 100px )'
    >
      <Typography
        variant='h4'
        component='h4'
        fontSize={ 30 }
        fontWeight={ 300 }
      >
        Sitio en
      </Typography>

      <Typography
        variant='h1'
        component='h1'
        fontSize={ 50 }
        fontWeight={ 500 }
        ml={ 1 }
      >
        Construcción
      </Typography>

      <ConstructionIcon
        fontSize='large'
        color='primary'
        sx={{ fontSize: 200 }}
      />
    </Box>
  );
}

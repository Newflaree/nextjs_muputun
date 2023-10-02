import {Box, Typography} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
// Layouts
import { MainLayout } from '@/components/layouts';

export const InBuilding = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='calc( 100vh - 100px )'
      sx={{
        flexDirection:{ xs: 'column', sm: 'row' }
      }}
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

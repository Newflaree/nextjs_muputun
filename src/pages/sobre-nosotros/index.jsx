// Material UI
import {
  Box,
  Typography
} from '@mui/material';

// Layouts
import { MainLayout } from '@/components/layouts';


const AboutPage = () => {
  return (
    <MainLayout
      pageTitle="Quiénes Somos"
      pageDesc="Conoce más sobre nosotros"
    > 
      <Box
        height={ 'calc( 100vh - 100px )' }
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h3'>AboutPage</Typography>
      </Box>
    </MainLayout>
  );
};

export default AboutPage;

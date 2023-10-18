// Material UI
import { Box, Typography } from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';
import {SlideShow} from '@/components/ui/home';


const HomePage = () => {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc=''
    >
      <Box>
        <SlideShow />
      </Box>
    </MainLayout>
  );
}

export default HomePage;

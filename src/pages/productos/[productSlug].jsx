// Material UI
import {
  Box,
  Typography
} from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';


const ProductPage = () => {
  return (
    <MainLayout
      pageTitle='Nuestros Productos'
    >
      <Box
        height={'calc( 100vh - 100px )'}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h3'>ProductPage</Typography>
      </Box>
    </MainLayout>
  );
}

export default ProductPage;

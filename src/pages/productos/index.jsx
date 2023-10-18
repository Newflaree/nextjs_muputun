// Material UI
import {
  Box,
  Typography
} from "@mui/material";

// Layouts
import { MainLayout } from "@/components/layouts";


const ProductsPage = () => {
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
        <Typography variant='h3'>ProductsPage</Typography>
      </Box>
    </MainLayout>
  );
}

export default ProductsPage;

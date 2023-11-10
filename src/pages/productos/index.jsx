// Material UI
import {
  Box,
  Grid,
} from '@mui/material';

// Components
import { ProductCard } from '@/components/ui';
// Layouts
import { MainLayout } from '@/components/layouts';
import {ProductsCategory} from '@/components/ui/products/ProductsCategory';


const ProductsPage = () => {
  return (
    <MainLayout
      pageTitle='Nuestros Productos'
    >
      <Box pt={ 7 } />
      <ProductsCategory cateTitle='Dispositivos GNSS X5' />
      <ProductsCategory cateTitle='Software y Servicios' />
      <ProductsCategory cateTitle='Combos' />
    </MainLayout>
  );
}

export default ProductsPage;

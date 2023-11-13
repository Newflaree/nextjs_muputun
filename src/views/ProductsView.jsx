// Material UI
import { Box } from '@mui/material';
// Components
import { ProductsCategory } from '@/components/ui';


export const ProductsView = () => {
  return (
    <>
      <Box pt={ 7 } />

      <ProductsCategory cateTitle='Dispositivos GNSS X5' />
      <ProductsCategory cateTitle='Software y Servicios' />
      <ProductsCategory cateTitle='Combos' />
    </>
  );
}

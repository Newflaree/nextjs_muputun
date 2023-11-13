// Material UI
import { Box } from '@mui/material';
// Components
import { ProductsCategory } from '@/components/ui';
import {prdMethods} from '@/database';


export const ProductsView = () => {
  const gnssProducts = prdMethods.getProductByCategory( 'gnss-x5' );
  const softProducts = prdMethods.getProductByCategory( 'soft-se' );
  const combosProducts = prdMethods.getProductByCategory( 'combos' );

  return (
    <>
      <Box pt={ 7 } />

      <ProductsCategory
        cateTitle='Dispositivos GNSS X5'
        filteredProducts={ gnssProducts }
      />

      <ProductsCategory
        cateTitle='Software y Servicios'
        filteredProducts={ softProducts }
      />

      <ProductsCategory
        cateTitle='Combos'
        filteredProducts={ combosProducts }
      />
    </>
  );
}

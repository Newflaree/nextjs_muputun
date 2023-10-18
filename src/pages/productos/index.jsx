// Material UI
import {
  Grid,
} from '@mui/material';

// Components
import { ProductCard } from '@/components/ui';
// Layouts
import { MainLayout } from '@/components/layouts';


const testProductData = [
  { id: '01', name: 'Test Product 1' },
  { id: '02', name: 'Test Product 2' },
  { id: '03', name: 'Test Product 3' },
  { id: '04', name: 'Test Product 4' },
  { id: '05', name: 'Test Product 5' },
  { id: '06', name: 'Test Product 6' },
]


const ProductsPage = () => {
  return (
    <MainLayout
      pageTitle='Nuestros Productos'
    >
      <Grid
        my={10}
        pb={ 10 }
        container
        spacing={ 4 }
      >
        {
          testProductData.map( ({ id, name }) => (
            <Grid
              key={ id }
              item
              xs={ 12 }
              sm={ 4 }
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              {/*TODO: Replace for ProductCard*/}
              <ProductCard />
            </Grid>
          ))
        }
      </Grid>
    </MainLayout>
  );
}

export default ProductsPage;

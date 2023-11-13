// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { ProductsView } from '@/views';


const ProductsPage = () => {
  return (
    <MainLayout
      pageTitle='Nuestros Productos'
    >
      <ProductsView />
    </MainLayout>
  );
}

export default ProductsPage;

// Components
import {
  HomeSlider,
  HomeSliderMobile,
  HomeVideo,
  //HomeSlideVideos,
  ProductGrid,
  Title
} from '../../components';
// Database
import { homeProducts } from '@/database';
// Layouts
import { ShopLayout } from '../../layouts';


export const HomeView = () => {
  const products = homeProducts;

  return (
    <ShopLayout pageTitle='Inicio'>
      <HomeSlider />
      <HomeSliderMobile />

      <Title label='Contenido' />
      <HomeVideo />

      <Title label='Equipos X5' />
      <ProductGrid products={ products } />
    </ShopLayout>
  );
}

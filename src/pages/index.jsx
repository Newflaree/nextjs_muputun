// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import {HomeView} from '@/views';


const HomePage = () => {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc=''
    >
      <HomeView />
    </MainLayout>
  );
}

export default HomePage;

// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { RTKDronesWorkView } from '@/views/blogs';


const BlogPage = () => {
  return (
    <MainLayout
      pageTitle='Flujo de Trabajo con Drones RTK' 
    >
      <RTKDronesWorkView />
    </MainLayout>
  );
}

export default BlogPage;

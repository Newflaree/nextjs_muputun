// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { RTKDronesWorkView } from '@/views/blogs';


const BlogPage = () => {
  return (
    <MainLayout
      pageTitle='HOLA' 
    >
      <RTKDronesWorkView />
    </MainLayout>
  );
}

export default BlogPage;

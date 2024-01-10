// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import {CanalesGNSSView} from '@/views/blogs';


const BlogPage = () => {
  return (
    <MainLayout
      pageTitle='Canales GNSS' 
    >
      <CanalesGNSSView />
    </MainLayout>
  );
}

export default BlogPage;

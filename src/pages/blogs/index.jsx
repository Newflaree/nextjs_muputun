// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { BlogsView } from '@/views';


const BlogsPage = () => {
  return (
    <MainLayout
      pageTitle='Blogs' 
    >
      <BlogsView />
    </MainLayout>
  );
}

export default BlogsPage;

// Database
import { blogsDatabase } from '@/database';
// Views
import { BlogsView } from '@/ui/views';


const data = blogsDatabase;

const BlogsPage = () => {
  return <BlogsView blogs={ data } />
}

export default BlogsPage;

import { BlogsView, useBlogs } from '@/presentation';

const BlogsPage = () => {
  const { blogs } = useBlogs();

  return <BlogsView blogs={ blogs } />
}

export default BlogsPage;

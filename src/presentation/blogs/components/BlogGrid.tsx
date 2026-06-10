// Components
import { BlogCard } from './';
import type { Blog } from '@/core';

type BlogGridProps = {
  blogs: Blog[];
};

export const BlogGrid = ({ blogs }: BlogGridProps) => {
  return (
    <div className='space-y-10'>
      {
        blogs.map( (blog, index) => (
          <BlogCard
            key={ blog.id }
            blog={ blog }
            index={ index }
          />
        ))
      }
    </div>
  );
}

// Database
import { blogsDatabase } from './'


export const getBlogBySlug = ( slug = '' ) => {
  const blogBySlug = blogsDatabase.find(
    blog => blog.slug === slug
  );

  return blogBySlug;
}

export const getAllBlogSlugs = () => {
  const slugs = blogsDatabase.map( blog => blog.slug );

  return slugs;
}

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  BlogView,
  getBlogBySlugFromBackend,
} from '@/presentation/shop/blogs';
import type { Blog } from '@/core';

type BlogPageProps = {
  blog: Blog;
};

const BlogPage = ({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <BlogView initialBlog={ blog } />
}

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const blog = await getBlogBySlugFromBackend( slug );

  if ( !blog ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      blog
    },
  }
}

export default BlogPage;

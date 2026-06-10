import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  BlogView,
  getBlogBySlugFromBackend,
  useBlogDetail,
} from '@/presentation';
import type { Blog } from '@/core';

type BlogPageProps = {
  blog: Blog;
};

const BlogPage = ({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const blogDetail = useBlogDetail({ initialBlog: blog });

  return <BlogView
    blog={ blogDetail.blog }
  />
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

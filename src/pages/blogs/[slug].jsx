// Database
import {
  getAllBlogSlugs,
  getBlogBySlug
} from '@/database';
// Views
import { BlogView } from '@/ui/views';


const BlogPage = ({ blog }) => {
  return <BlogView
    blog={ blog }
  />
}

export const getStatickPaths = async ( ctx ) => {
  const blogIds = getAllBlogSlugs();

  return {
    paths: blogIds.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

export const getServerSideProps = async ({ params }) => {
  const { slug = '' } = params;

  const blog = getBlogBySlug( slug );

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

// Database
import {
  getAllProductSlugs,
  getProductBySlug
} from '@/database';
// Hooks
import { useFileDownload } from '@/hooks';
// Views
import { ProductView } from '@/ui/views';


const ProductPage = ({ product }) => {
  const { handleDownload } = useFileDownload();

  return <ProductView
    product={ product }
    handleDownload={ handleDownload }
  />
}

export const getStatickPaths = async ( ctx ) => {
  const productSlugs = await getAllProductSlugs();

  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

export const getServerSideProps = async ({ params }) => {
  const { slug = '' } = params;

  const product = await getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
  }
}


export default ProductPage;

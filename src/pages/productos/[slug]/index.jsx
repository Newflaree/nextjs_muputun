// Database
import { prdMethods } from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { ProductView } from '@/views';


const ProductPage = ({ product }) => {
  const { name, desc, doc } = product;

  const handleDownload = ( fileName = '' ) => {
    const link = document.createElement( 'a' );
    link.href = `/docs/${ fileName }`;
    link.download = fileName;
    link.click();
    link.remove();
  }

  return (
    <MainLayout
      pageTitle={ name }
      pageDesc={ desc }
    >
      <ProductView
        product={ product } 
        handleDownload={ handleDownload }
      />
    </MainLayout>
  );
}

export const getStatickPaths = async ( ctx ) => {
  const productSlugs = prdMethods.getAllProductSlugs();

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

  const product = prdMethods.getProductBySlug( slug );

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

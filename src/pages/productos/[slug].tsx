import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  getProductBySlugFromBackend,
  ProductView,
  useProductDetail,
} from '@/presentation';
import type { Product } from '@/core';

type ProductPageProps = {
  product: Product;
};

const ProductPage = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const productDetail = useProductDetail({ initialProduct: product });

  return <ProductView
    product={ productDetail.product }
    handleDownload={ productDetail.handleDownload }
  />
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const product = await getProductBySlugFromBackend( slug );

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

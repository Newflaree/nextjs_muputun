import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  getProductBySlugFromBackend,
  ProductView,
} from '@/presentation/shop/products';
import type { Product } from '@/core';

type ProductPageProps = {
  product: Product;
};

const ProductPage = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <ProductView initialProduct={ product } />
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

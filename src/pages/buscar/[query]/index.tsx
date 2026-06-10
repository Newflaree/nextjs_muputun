import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  SearchView,
  searchProductsFromBackend,
  useSearchResults,
} from '@/presentation';
import type { Product } from '@/core';

type SearchPageProps = {
  products: Product[];
  productsExists: boolean;
  query: string;
};

const SearchPage = ({
  products,
  productsExists,
  query
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const searchResults = useSearchResults({
    query,
    initialProducts: products,
    initialProductsExists: productsExists,
  });

  return <SearchView
    products={ searchResults.products }
    productsExists={ searchResults.productsExists }
    query={ searchResults.query }
  />
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({ params }) => {
  const query = typeof params?.query === 'string' ? params.query : '';

  if ( query.length === 0 ) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  const searchResult = await searchProductsFromBackend( query );

  return {
    props: {
      products: searchResult.products,
      productsExists: searchResult.productsExists,
      query
    },
  }
}

export default SearchPage;

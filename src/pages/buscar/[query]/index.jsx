// Database
import {
  getAllProducts,
  getProductsBySearchTerm
} from '@/database';
// Views
import { SearchView } from '@/ui/views';


const SearchPage = ({
  products,
  productsExists,
  query
}) => {
  return <SearchView
    products={ products }
    productsExists={ productsExists }
    query={ query }
  />
}

export const getServerSideProps = async ({ params }) => {
  const { query = '' } = params;

  if ( query.length === 0 ) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  let products = await getProductsBySearchTerm( query );
  const productsExists = products.length > 0;

  if ( !productsExists ) {
    products = await getAllProducts();
  }

  return {
    props: {
      products,
      productsExists,
      query
    },
  }
}

export default SearchPage;

// Components
import { ProductGrid } from '../../components';
// Layouts
import { ShopLayout } from '../../layouts';


export const SearchView = ({
  products,
  productsExists,
  query
}) => {

  return (
    <ShopLayout pageTitle='Búsqueda'>
      <h1 className="mx-4 sm:mx-0 text-4xl font-bold mt-6">Buscar Producto</h1>

      {
        productsExists 
          ? (
            <h2 className="mx-4 sm:mx-0 text-2xl mt-4 mb-10">Resultados para <span className='text-mupu'>{ query }</span></h2>
          ) 
          : (
            <div className="sm:flex items-center mt-4 mb-5 flex-col sm:flex-row">
              <h2 className="mx-4 sm:mx-0 text-2xl sm:mr-3">No encontramos ningún producto:</h2>
              <h2 className="mx-4 sm:mx-0 text-2xl text-mupu">{ query }</h2>
            </div>
          )
      }

      {
        !productsExists && <h1 className='mx-4 sm:mx-0 text-2xl mt-2 mb-10'>Estos productos podrían interesarte</h1>
      }

      <ProductGrid products={ products } />
    </ShopLayout>
  );
}

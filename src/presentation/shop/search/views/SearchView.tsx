import { ProductGrid } from '@/presentation/shop/products';
import { ShopLayout } from '@/presentation/shop';
import type { Product } from '@/core';
import { useSearchResults } from '../hooks';

type SearchViewProps = {
  initialProducts: Product[];
  initialProductsExists: boolean;
  query: string;
};

export const SearchView = ({
  initialProducts,
  initialProductsExists,
  query,
}: SearchViewProps) => {
  const { products, productsExists } = useSearchResults({
    query,
    initialProducts,
    initialProductsExists,
  });

  return (
    <ShopLayout
      pageTitle='Búsqueda'
      pageDesc='Busca receptores GNSS X5, soluciones RTK, PPK, NTRIP, CORS, radio LoRa y accesorios para topografía, GIS y drones RTK.'
    >
      <section className='relative isolate overflow-hidden bg-white px-6 py-24 lg:px-8'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(31,190,232,0.12),transparent_30rem),linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)]' />
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 rounded-[2.5rem] bg-white/48 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-10'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              Buscar soluciones GNSS
            </p>
            <h1 className='mt-4 text-5xl font-semibold tracking-normal text-slate-950 sm:text-6xl'>
              Catálogo técnico X5.
            </h1>

      {
        productsExists 
          ? (
            <h2 className='mt-5 text-lg leading-8 text-slate-600'>Resultados para <span className='font-semibold text-cyan-700'>{ query }</span>.</h2>
          ) 
          : (
            <p className='mt-5 text-lg leading-8 text-slate-600'>
              No encontramos coincidencias exactas para <span className='font-semibold text-cyan-700'>{ query }</span>.
            </p>
          )
      }

      {
        !productsExists && <p className='mt-3 text-sm leading-6 text-slate-500'>Revisa estas alternativas X5 para RTK, PPK, NTRIP, CORS o accesorios de campo.</p>
      }
          </div>

          <ProductGrid products={ products } />
        </div>
      </section>
    </ShopLayout>
  );
}

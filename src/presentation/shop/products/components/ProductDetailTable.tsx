// Components
import { ProductTableSubitems } from './';
import type { ProductTechSpec } from '@/core';

type ProductDetailTableProps = {
  techSpecs: ProductTechSpec[];
};

export const ProductDetailTable = ({ techSpecs }: ProductDetailTableProps) => {
  if ( !techSpecs || techSpecs.length === 0 ) return null;

  return (
    <div className='grid gap-4'>
      {
        techSpecs.map( ( item ) => (
          <article
            key={ item.primary }
            className='grid gap-5 rounded-[2rem] bg-white/52 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_22px_70px_rgba(15,23,42,0.07)] backdrop-blur-2xl md:grid-cols-[220px_1fr] md:p-6'
          >
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600'>
                Especificación
              </p>
              <h3 className='mt-3 text-2xl font-semibold text-slate-950'>
                { item.primary }
              </h3>
            </div>

            <ProductTableSubitems subitems={ item.secondary } />
          </article>
        ))
      }
    </div>
  );
}

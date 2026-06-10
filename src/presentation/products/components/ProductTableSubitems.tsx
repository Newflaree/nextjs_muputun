// React Icons
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import type { ProductTechSpecItem } from '@/core';

type ProductTableSubitemsProps = {
  subitems: ProductTechSpecItem[];
};

export const ProductTableSubitems = ({ subitems }: ProductTableSubitemsProps) => {
  return (
    <div className='grid gap-3 sm:grid-cols-2'>
      {
        subitems.map( ( item ) => (
          <div
            key={ item.spec }
            className='flex items-start gap-3 rounded-2xl bg-white/42 px-4 py-3 text-sm leading-6 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)] backdrop-blur-2xl'
          >
            <IoCheckmarkCircleOutline
              className='mt-1 shrink-0 text-cyan-600'
              size={ 16 }
            />

            <span>{ item.spec }</span>
          </div>
        ))
      }
    </div>
  );
}

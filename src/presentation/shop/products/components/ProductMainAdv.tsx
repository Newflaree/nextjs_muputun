// React Icons
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import type { ProductMainAdvantage } from '@/core';

type ProductMainAdvProps = {
  mainAdv: ProductMainAdvantage[];
};

export const ProductMainAdv = ({ mainAdv }: ProductMainAdvProps) => {
  if (mainAdv.length === 0) return null;

  return (
    <div>
      <div className='mb-10 max-w-3xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
          Ventajas
        </p>
        <h2 className='mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl'>
          Ventajas para terreno, oficina y postproceso.
        </h2>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {
          mainAdv.map( ( item ) => (
          <div
            key={ item.advItem }
            className='group rounded-[2rem] bg-white/48 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/62 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_28px_76px_rgba(8,145,178,0.12)]'
          >
            <div className='flex items-start gap-4'>
              <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400/18 text-cyan-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl'>
                <IoCheckmarkCircleOutline size={ 22 } />
              </span>
              <p className='text-base font-semibold leading-7 text-slate-800'>
                { item.advItem }
              </p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
}

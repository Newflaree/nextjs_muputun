// Next
import Image from 'next/image';
import NextLink from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';
// Components
import {
  ProductToContactBtn
} from './';
// Utils
import { currencyFormat } from '@/presentation/shared';
import type { HomeProduct, Product } from '@/core';

type ProductCardProps = {
  product: Product | HomeProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className='group relative flex h-[560px] overflow-hidden rounded-[2.5rem] bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.36),0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.48),0_34px_110px_rgba(8,145,178,0.18)] sm:h-[580px]'>
      <Image
        src='/images/product-card-x5rt-bg.png'
        alt=''
        fill
        sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
        className='absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]'
      />
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.08)_38%,rgba(255,255,255,0.24)_100%)]' />
      <div className='pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent' />
      <div className='pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-transparent via-white/55 to-transparent' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/70 via-white/30 to-transparent' />

      <div className='relative z-10 flex min-h-0 w-full flex-col'>
        <div className='flex items-center justify-between px-5 pt-5'>
          <span className='rounded-full bg-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-2xl'>
            GNSS X5
          </span>
          <NextLink
            href={ `/productos/${ product.slug }` }
            className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/35 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition hover:bg-white/75 hover:text-cyan-600'
            aria-label={ `Ver ${ product.name }` }
          >
            <IoArrowForwardOutline size={ 18 } />
          </NextLink>
        </div>

        <NextLink
          href={ `/productos/${ product.slug }` }
          className='relative mx-4 mt-2 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[2rem]'
          aria-label={ `Ver ${ product.name }` }
        >
          <div className='absolute bottom-8 left-1/2 h-14 w-4/5 -translate-x-1/2 rounded-full bg-slate-900/12 blur-2xl transition duration-700 group-hover:w-[88%] group-hover:bg-cyan-700/16' />
          <Image
            src='/images/product-card-x5rt-product.png'
            alt={ product.name }
            className='relative z-10 h-full w-full object-contain px-2 transition duration-700 group-hover:scale-[1.05]'
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 62%, rgba(0, 0, 0, 0.86) 78%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse at center, black 62%, rgba(0, 0, 0, 0.86) 78%, transparent 100%)',
            }}
            width={ 500 }
            height={ 500 }
          />
        </NextLink>

        <div className='relative mx-4 mb-4 flex h-[188px] shrink-0 flex-col overflow-hidden rounded-[2rem] bg-white/42 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:h-[196px]'>
          <div className='pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent' />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-white/24 via-transparent to-white/8' />
          <div className='relative flex h-full flex-col'>
            <NextLink
              href={ `/productos/${ product.slug }` }
              className='line-clamp-2 min-h-[3.25rem] text-xl font-semibold leading-tight tracking-normal text-slate-950 transition hover:text-cyan-600'
            >
              { product.name }
            </NextLink>

            <span className='mt-3 inline-flex h-8 w-fit max-w-full items-center truncate rounded-full bg-cyan-50/80 px-3 text-sm font-semibold text-cyan-700 backdrop-blur'>
              { product.price === 0 ? 'Cotización personalizada' : `$${ currencyFormat( product.price ) }` }
            </span>

            <ProductToContactBtn
              className='mt-auto w-full !bg-slate-950/90 !shadow-slate-950/10 hover:!bg-cyan-500'
              product={ product }
            />
          </div>
        </div>
      </div>
    </article>
  );
}

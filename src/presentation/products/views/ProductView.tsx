// Components
import {
  IoCheckmarkCircleOutline,
  IoChevronForwardOutline,
} from 'react-icons/io5';
import {
  ProductDetailTable,
  ProductDocs,
  ProductMainAdv,
  ProductSlideshow,
  ProductMobileSlideshow,
  ProductToContactBtn
} from '../components';
import { ShopLayout } from '@/presentation/shop';
import {
  MupuButton,
  currencyFormat,
} from '@/presentation/shared';
import type { Product } from '@/core';
import type { FileDownloadHandler } from '../hooks';

type ProductViewProps = {
  product: Product;
  handleDownload: FileDownloadHandler;
};

export const ProductView = ({ product, handleDownload }: ProductViewProps) => {
  return (
    <ShopLayout
      pageTitle={ product.name }
    >
      <main className='relative isolate overflow-hidden bg-white'>
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_42%,#ffffff_100%)]' />
        <div className='absolute left-1/2 top-16 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-200/18 blur-3xl' />

        <section className='mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(380px,0.65fr)] lg:px-8 lg:pb-28 lg:pt-20'>
          <div className='min-w-0'>
            <ProductMobileSlideshow
              title={ product.name }
              images={ product.imgs }
              className='block md:hidden'
            />

            <ProductSlideshow
              title={ product.name }
              images={ product.imgs }
              className='hidden md:block'
            />
          </div>

          <aside className='relative self-start rounded-[2.5rem] bg-white/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_28px_90px_rgba(15,23,42,0.10)] backdrop-blur-2xl lg:sticky lg:top-28 lg:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              Producto Müpütun
            </p>

            <h1 className='mt-4 text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl'>
              { product.name }
            </h1>

            {
              product.price > 0 && (
                <p className='mt-5 text-3xl font-semibold text-slate-950'>
                  ${ currencyFormat( product.price ) }
                </p>
              )
            }

            <p className='mt-6 text-base leading-7 text-slate-600'>
              { product.desc }
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col'>
              <ProductToContactBtn
                product={ product }
                className='w-full'
              />
              <MupuButton
                href='/contacto'
                iconRight={ <IoChevronForwardOutline size={ 18 } /> }
                size='lg'
                variant='glass'
                className='w-full'
              >
                Hablar con ventas
              </MupuButton>
            </div>

            <div className='mt-7 rounded-[1.5rem] bg-white/46 p-4 text-sm leading-6 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl'>
              Entrega sujeta a stock disponible y región de destino.
            </div>

            {
              product.includes.length > 0 && (
                <div className='mt-8'>
                  <h2 className='text-sm font-semibold uppercase tracking-[0.22em] text-slate-500'>
                    Incluye
                  </h2>
                  <div className='mt-4 grid gap-2'>
                    {
                      product.includes.map(({ name }) => (
                        <div
                          key={ name }
                          className='flex items-start gap-3 rounded-2xl bg-white/44 px-4 py-3 text-sm leading-5 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.68)] backdrop-blur-2xl'
                        >
                          <IoCheckmarkCircleOutline
                            className='mt-0.5 shrink-0 text-cyan-600'
                            size={ 18 }
                          />
                          <span>{ name }</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }
          </aside>
        </section>

        <section className='mx-auto max-w-7xl px-6 pb-24 lg:px-8'>
          <ProductMainAdv mainAdv={ product.mainAdv } />
        </section>

        <section className='mx-auto max-w-7xl px-6 pb-24 lg:px-8'>
          <div className='mb-10 max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              Ficha técnica
            </p>
            <h2 className='mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl'>
              Especificaciones claras para decidir.
            </h2>
          </div>

          <ProductDetailTable
            techSpecs={ product.techSpecs }
          />
        </section>

        {
          product.doc.length > 0 && (
            <section className='mx-auto max-w-7xl px-6 pb-28 lg:px-8'>
              <ProductDocs
                doc={ product.doc }
                handleDownload={ handleDownload }
              />
            </section>
          )
        }
      </main>
    </ShopLayout>
  );
}

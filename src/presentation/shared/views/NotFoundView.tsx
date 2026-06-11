import Image from 'next/image';
import {
  IoArrowBackOutline,
  IoHomeOutline,
} from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import { ShopLayout } from '@/presentation/shop';


export const NotFoundView = () => {
  return (
    <ShopLayout
      pageTitle='Página no encontrada'
      pageDesc='La página solicitada no existe o fue movida.'
    >
      <section className='relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-white px-6 py-24 lg:px-8'>
        <Image
          src='/images/product-card-x5rt-bg.png'
          alt=''
          fill
          sizes='100vw'
          className='absolute inset-0 -z-10 h-full w-full object-cover opacity-55'
          priority
        />
        <div className='absolute inset-0 -z-10 bg-white/68' />
        <div className='absolute left-1/2 top-20 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-200/18 blur-3xl' />

        <div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1fr]'>
          <div className='relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-[3rem] bg-white/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-2xl'>
            <div className='absolute inset-6 rounded-[2.5rem] bg-slate-950/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]' />
            <div className='relative text-center'>
              <p className='text-[6rem] font-semibold leading-none tracking-normal text-white sm:text-[7rem]'>
                404
              </p>
              <p className='mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300'>
                Sin señal
              </p>
            </div>
          </div>

          <div className='rounded-[2.5rem] bg-white/52 p-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_28px_90px_rgba(15,23,42,0.10)] backdrop-blur-2xl sm:p-10 lg:text-left'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              Página no encontrada
            </p>
            <h1 className='mt-5 text-5xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-6xl'>
              Esta coordenada no existe.
            </h1>
            <p className='mt-6 text-lg leading-8 text-slate-600'>
              La ruta pudo cambiar, quedar incompleta o salir del mapa. Volvamos a un punto seguro para seguir explorando soluciones GNSS.
            </p>

            <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start'>
              <MupuButton
                href='/'
                iconLeft={ <IoHomeOutline size={ 18 } /> }
                variant='solid'
              >
                Ir al inicio
              </MupuButton>
              <MupuButton
                href='/gnss-x5'
                iconLeft={ <IoArrowBackOutline size={ 18 } /> }
                variant='glass'
              >
                Ver catálogo
              </MupuButton>
            </div>
          </div>
        </div>
      </section>
    </ShopLayout>
  );
}

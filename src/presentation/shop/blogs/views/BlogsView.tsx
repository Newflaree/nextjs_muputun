import Image from 'next/image';
import { IoArrowForwardOutline } from 'react-icons/io5';
// Components
import {
  BlogGrid,
} from '../components';
import { MupuButton } from '@/presentation/shared';
// Layouts
import { ShopLayout } from '@/presentation/shop';
import { useBlogs } from '../hooks';

export const BlogsView = () => {
  const { blogs } = useBlogs();
  const featuredBlog = blogs[0];
  const listBlogs = blogs.slice(1);

  return (
    <ShopLayout
      pageTitle='Blogs'
      pageDesc='Blog técnico de Müpütun sobre GNSS multibanda, RTK, PPK, NTRIP Local, drones, calibración NGS/NOAA, canales y precisión geoespacial.'
    >
      <section className='relative isolate overflow-hidden bg-white py-24 lg:py-28'>
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)]' />
        <div className='absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl' />

        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              Blog técnico
            </p>
            <h1 className='mt-5 text-5xl font-semibold tracking-normal text-slate-950 sm:text-6xl lg:text-7xl'>
              Criterios técnicos para medir mejor.
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600'>
              Lecturas claras sobre GNSS multibanda, drones RTK, calibración de antenas, canales y decisiones que afectan la precisión real en campo.
            </p>
          </div>

          <div className='relative mt-14 overflow-hidden rounded-[2.75rem] shadow-[0_34px_110px_rgba(15,23,42,0.14)]'>
            <Image
              src={ featuredBlog?.img ?? '/images/product-card-x5rt-bg.png' }
              alt={ featuredBlog?.title ?? 'Blog Müpütun' }
              width={ 1400 }
              height={ 620 }
              className='aspect-[16/8] w-full object-cover sm:aspect-[16/7] lg:aspect-[16/6]'
              priority
            />
            <div className='absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.76)_0%,rgba(15,23,42,0.34)_42%,rgba(255,255,255,0.06)_100%)]' />
            <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/28 to-transparent' />
            <div className='absolute bottom-5 left-5 right-5 max-w-2xl rounded-[2rem] bg-white/46 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:right-auto lg:p-7'>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700'>
                Lectura destacada
              </p>
              <h2 className='mt-3 text-2xl font-semibold leading-tight text-slate-950'>
                { featuredBlog?.title ?? 'Biblioteca técnica Müpütun' }
              </h2>
              {featuredBlog && (
                <MupuButton
                  className='mt-5'
                  href={ `/blogs/${ featuredBlog.slug }` }
                  iconRight={ <IoArrowForwardOutline size={ 18 } /> }
                  size='lg'
                  variant='solid'
                >
                  Leer más
                </MupuButton>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mb-12 max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              Artículos
            </p>
            <h2 className='mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl'>
              Más lecturas para tomar mejores decisiones.
            </h2>
            <p className='mt-5 text-lg leading-8 text-slate-600'>
              Casos y fundamentos explicados para comparar receptores, planificar vuelos RTK, entender NTRIP y evaluar la precisión antes de invertir.
            </p>
          </div>

          <BlogGrid blogs={ listBlogs.length > 0 ? listBlogs : blogs } />
        </div>
      </section>
    </ShopLayout>
  );
}

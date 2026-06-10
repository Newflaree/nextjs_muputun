import Image from 'next/image';
import NextLink from 'next/link';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
// Layouts
import { ShopLayout } from '@/presentation/shop';
import type { Blog } from '@/core';

type BlogViewProps = {
  blog: Blog;
};

export const BlogView = ({ blog }: BlogViewProps) => {
  return (
    <ShopLayout
      pageTitle={ blog.title }
      pageDesc={ blog.desc }
    >
      <article className='relative isolate overflow-hidden bg-white py-24 lg:py-28'>
        <Image
          src={ blog.img }
          alt={ blog.title }
          fill
          sizes='100vw'
          className='absolute inset-0 -z-10 h-full w-full object-cover opacity-18'
          priority
        />
        <div className='absolute inset-0 -z-10 bg-white/82' />

        <div className='mx-auto max-w-5xl px-6 lg:px-8'>
          <MupuButton
            href='/blogs'
            iconLeft={ <IoArrowBackOutline size={ 18 } /> }
            size='md'
            variant='glass'
          >
            Volver al blog
          </MupuButton>

          <header className='mt-8 overflow-hidden rounded-[2.5rem] bg-white/46 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl'>
            <div className='relative aspect-[16/8] overflow-hidden rounded-[2.5rem] bg-slate-950'>
              <Image
                src={ blog.img }
                alt={ blog.title }
                fill
                sizes='(min-width: 1024px) 900px, 100vw'
                className='h-full w-full object-cover'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent' />
            </div>

            <div className='p-7 sm:p-10'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
                Blog técnico
              </p>
              <h1 className='mt-5 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl'>
                { blog.title }
              </h1>
              <p className='mt-6 text-lg leading-8 text-slate-600'>
                { blog.desc }
              </p>
            </div>
          </header>

          <section className='mt-8 rounded-[2.5rem] bg-white/46 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-10'>
            <p className='text-base leading-8 text-slate-600'>
              Este artículo forma parte de la biblioteca técnica de Müpütun. En las siguientes iteraciones integraremos el contenido extendido con el mismo sistema visual.
            </p>
            <NextLink href='/contacto' className='mt-6 inline-flex text-sm font-semibold text-cyan-700 transition hover:text-cyan-500'>
              Conversar con un especialista
            </NextLink>
          </section>
        </div>
      </article>
    </ShopLayout>
  );
}

import type { ReactNode } from 'react';
import Image from 'next/image';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import { ShopLayout } from '@/presentation/shop';

type BlogArticleLayoutProps = {
  children: ReactNode;
  description?: string;
  image: string;
  pageTitle?: string;
  title: string;
};

export const BlogArticleLayout = ({
  children,
  description,
  image,
  pageTitle,
  title,
}: BlogArticleLayoutProps) => {
  return (
    <ShopLayout
      pageTitle={ pageTitle ?? title }
      pageDesc={ description }
    >
      <article className='relative isolate overflow-hidden bg-white'>
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_36rem,#ffffff_100%)]' />
        <div className='absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-200/18 blur-3xl' />

        <header className='mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-20'>
          <MupuButton
            href='/blogs'
            iconLeft={ <IoArrowBackOutline size={ 18 } /> }
            size='md'
            variant='glass'
          >
            Volver al blog
          </MupuButton>

          <div className='mt-8 grid items-end gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(420px,1fr)]'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
                Blog técnico
              </p>
              <h1 className='mt-5 text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl'>
                { title }
              </h1>
              {description && (
                <p className='mt-6 text-lg leading-8 text-slate-600'>
                  { description }
                </p>
              )}
            </div>

            <div className='relative min-h-[360px] overflow-hidden rounded-[2.75rem] bg-slate-950 shadow-[0_34px_110px_rgba(15,23,42,0.14)] sm:min-h-[460px] lg:min-h-[560px]'>
              <Image
                src={ image }
                alt={ title }
                fill
                sizes='(min-width: 1024px) 620px, 100vw'
                className='h-full w-full object-cover'
                priority
              />
              <div className='absolute inset-0 bg-[linear-gradient(150deg,rgba(2,6,23,0.18)_0%,rgba(15,23,42,0.06)_44%,rgba(255,255,255,0.18)_100%)]' />
              <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/30 to-transparent' />
            </div>
          </div>
        </header>

        <section className='mx-auto max-w-4xl px-6 pb-28 lg:px-8'>
          <div className='blog-article-content rounded-[2.5rem] bg-white/52 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-9 lg:p-11'>
            { children }
          </div>
        </section>
      </article>
    </ShopLayout>
  );
};

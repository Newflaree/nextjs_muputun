import type { ReactNode } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

type AuthLayoutProps = {
  children: ReactNode;
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export const AuthLayout = ({
  children,
  eyebrow,
  subtitle,
  title,
}: AuthLayoutProps) => {
  return (
    <main className='relative isolate min-h-screen overflow-hidden bg-white px-6 py-10 text-slate-950'>
      <Image
        src='/images/product-card-x5rt-bg.png'
        alt=''
        fill
        sizes='100vw'
        className='absolute inset-0 -z-10 h-full w-full object-cover opacity-50'
        priority
      />
      <div className='absolute inset-0 -z-10 bg-white/64' />

      <div className='mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center'>
        <section className='grid w-full gap-8 lg:grid-cols-[0.9fr_0.8fr] lg:items-center'>
          <div>
            <NextLink href='/' className='inline-flex'>
              <Image
                src='/logo.png'
                alt='mupütun'
                className='h-14 w-auto'
                width={ 180 }
                height={ 90 }
                priority
              />
            </NextLink>
            {eyebrow && (
              <p className='mt-12 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
                { eyebrow }
              </p>
            )}
            <h1 className={`${ eyebrow ? 'mt-5' : 'mt-12' } max-w-2xl text-5xl font-semibold tracking-normal sm:text-6xl`}>
              { title }
            </h1>
            <p className='mt-6 max-w-xl text-lg leading-8 text-slate-600'>
              { subtitle }
            </p>
          </div>

          <div className='rounded-[2.5rem] bg-white/46 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur-2xl sm:p-8'>
            { children }
          </div>
        </section>
      </div>
    </main>
  );
};

// Next.js
import Image from 'next/image';
import NextLink from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import type { Blog } from '@/core';

type BlogCardProps = {
  blog: Blog;
  index?: number;
};

export const BlogCard = ({ blog, index = 0 }: BlogCardProps) => {
  const isReversed = index % 2 === 1;
  const articleNumber = String(index + 2).padStart(2, '0');

  return (
    <article className='group relative h-[620px] overflow-hidden rounded-[2.75rem] bg-white/10 shadow-[0_28px_92px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_38px_120px_rgba(8,145,178,0.18)] sm:h-[600px] lg:h-[560px]'>
      <NextLink
        href={ `/blogs/${ blog.slug }` }
        className='absolute inset-0'
        aria-label={ `Leer ${ blog.title }` }
      >
        <Image
          className='h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]'
          src={ blog.img }
          alt={ blog.title }
          fill
          sizes='(min-width: 1280px) 1180px, 100vw'
        />
        <div className={`absolute inset-0 ${ isReversed ? 'bg-[linear-gradient(250deg,rgba(2,6,23,0.74)_0%,rgba(15,23,42,0.24)_48%,rgba(255,255,255,0.08)_100%)]' : 'bg-[linear-gradient(110deg,rgba(2,6,23,0.74)_0%,rgba(15,23,42,0.24)_48%,rgba(255,255,255,0.08)_100%)]' }`} />
        <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,transparent_34%,rgba(103,232,249,0.12)_100%),linear-gradient(180deg,transparent_45%,rgba(255,255,255,0.18)_100%)]' />
      </NextLink>

      <div className='absolute left-5 right-5 top-5 z-10 flex items-center justify-between lg:left-8 lg:right-8 lg:top-8'>
        <span className='rounded-full bg-white/42 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_10px_28px_rgba(15,23,42,0.10)] backdrop-blur-2xl'>
          Lectura { articleNumber }
        </span>
        <span className='hidden rounded-full bg-slate-950/26 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_10px_28px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:inline-flex'>
          Blog técnico
        </span>
      </div>

      <div className={`absolute bottom-5 z-10 flex h-[340px] flex-col rounded-[2.15rem] bg-white/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_24px_78px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition duration-500 group-hover:bg-white/58 sm:h-[318px] lg:bottom-8 lg:h-[330px] lg:max-w-2xl lg:p-8 ${ isReversed ? 'left-5 right-5 lg:left-8 lg:right-auto' : 'left-5 right-5 lg:left-auto lg:right-8' }`}>
        <div className='min-h-0'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700'>
            Lectura técnica
          </p>
          <h3 className='line-clamp-3 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl lg:text-[2rem]'>
            { blog.title }
          </h3>
          <p className='mt-4 line-clamp-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7'>
            { blog.desc }
          </p>
        </div>

        <MupuButton
          className='mt-auto w-fit'
          href={ `/blogs/${ blog.slug }` }
          iconRight={ <IoArrowForwardOutline size={ 18 } /> }
          size='lg'
          variant='solid'
        >
          Leer más
        </MupuButton>
      </div>
    </article>
  );
}

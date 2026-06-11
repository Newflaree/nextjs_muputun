// Next
import NextLink from 'next/link';


export const BlogMettaLink = () => {
  return (
    <div className='mt-12 rounded-[2rem] bg-slate-950/90 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]'>
      <p className='m-0 text-base leading-7 text-slate-200'>
        Contenido facilitado por{' '}
        <NextLink
          href='https://mettatec.com/es/'
          className='font-semibold text-cyan-300 transition hover:text-white'
          target='_blank'
        >
          Mettatec
        </NextLink>.
      </p>
    </div>
  );
}

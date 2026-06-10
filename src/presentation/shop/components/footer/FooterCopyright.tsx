// Next
import NextLink from 'next/link';


export const FooterCopyright = () => {
  return (
    <div className='px-6 py-6 text-center text-xs text-slate-400'>
      <NextLink href='/' className='transition hover:text-cyan-300'>
        <span className='font-semibold'>NWFL </span>
        <span>| Desarrollo de Software | </span>
        <span>© { new Date().getFullYear() }</span>
      </NextLink>
    </div>
  );
}

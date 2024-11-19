// Next
import NextLink from 'next/link';


export const FooterCopyright = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10 hover:text-cyan-600 transition-all'>
      <NextLink href='/'>
        <span className={ `antialiased font-bold` }>NWFL </span>
        <span>| Desarrollo de Software </span>
        <span>© { new Date().getFullYear() }</span>
      </NextLink>
    </div>
  );
}

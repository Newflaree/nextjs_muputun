// Next
import Head from 'next/head';
// Components
import {
  Footer,
  ParticlesBackground,
  Sidebar,
  TopMenu,
} from '../../components';


export const ShopLayout = ({
  children,

  pageTitle = '',
  pageDesc = '',
  pageKeywords = '',
  pageImage = '',
}) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;

  return (
    <div className='min-h-screen'>
      <Head>
        <title>{ layoutPageTitle }</title>
        <meta name='description' content={ pageDesc } />
        <meta name='keywords' content={ pageKeywords } />
        <meta name='robots' content='index' />
        <meta name='language' content='es' />

        <meta property='og:title' content={ layoutPageTitle } />
        <meta property='og:description' content={ pageDesc } />
        <meta property='og:image' content={ pageImage } />
        <meta property='og:url' content='' />
      </Head>

      <TopMenu />
      <ParticlesBackground />
      
      {/*TODO: ButtonsBox*/}

      <Sidebar />

      <main className='sm:px-10 sm:w-[1080px] m-auto pt-10'>
        { children }
      </main>

      <Footer />
    </div>
  );
}

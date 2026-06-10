// Next
import Head from 'next/head';
// Components
import {
  Footer,
  Sidebar,
  TopMenu,
} from '../components';
import type { WithChildren } from '@/core';

export const ShopLayout = ({
  children,
  pageTitle = '',
  pageDesc = '',
  pageKeywords = '',
  pageImage = '',
}: WithChildren & {
  pageTitle?: string;
  pageDesc?: string;
  pageKeywords?: string;
  pageImage?: string;
}) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;

  return (
    <div className='min-h-screen overflow-hidden bg-slate-50 text-slate-950'>
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
      <Sidebar />

      <main className='pt-20'>
        { children }
      </main>

      <Footer />
    </div>
  );
}

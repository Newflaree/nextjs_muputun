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
  const metaDescription = pageDesc || 'Müpütun ofrece receptores GNSS X5, soluciones RTK, PPK, NTRIP, CORS, radio LoRa y accesorios para topografía, GIS y drones RTK en Chile.';
  const metaKeywords = pageKeywords || 'GNSS, RTK, PPK, NTRIP, CORS, LoRa, topografía, drones RTK, Müpütun, Mettatec, X5';
  const metaImage = pageImage || '/logo-muputun-store.png';

  return (
    <div className='min-h-screen overflow-hidden bg-slate-50 text-slate-950'>
      <Head>
        <title>{ layoutPageTitle }</title>
        <meta name='description' content={ metaDescription } />
        <meta name='keywords' content={ metaKeywords } />
        <meta name='robots' content='index' />
        <meta name='language' content='es' />
        <meta name='theme-color' content='#f8fafc' />

        <meta property='og:title' content={ layoutPageTitle } />
        <meta property='og:description' content={ metaDescription } />
        <meta property='og:image' content={ metaImage } />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={ layoutPageTitle } />
        <meta name='twitter:description' content={ metaDescription } />
        <meta name='twitter:image' content={ metaImage } />
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

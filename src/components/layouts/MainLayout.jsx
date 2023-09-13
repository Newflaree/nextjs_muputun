// Next.js
import Head from 'next/head';
import {ButtonsBox, Footer, NavBar, SideMenu, WSPPBtn } from '../ui';
// Components


export const MainLayout = ({ pageTitle = '', pageDesc = '', children }) => {
  return (
    <>
      <Head>
        <title>Bustagrand | { pageTitle }</title>
        <link rel='icon' href={ process.env.NEXT_PUBLIC_LOGO || '' } />
        <meta name='description' content={ pageDesc } />
      </Head>

    {
      /*
      <WSPPBtn />
      * */
    }
    <ButtonsBox />

      <nav>
        <NavBar />
      </nav>

      <SideMenu />

      <main
        style={{
          margin: 'auto',
          marginTop: '35px',
          maxWidth: '1440px',
          padding: '0px'
        }}
      >
        { children }
      </main>

      <Footer />
    </>
  );
}

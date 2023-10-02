// Next.js
import Head from 'next/head';
// Components
import {
  ButtonsBox,
  Footer,
  NavBar,
  SideMenu
} from '../ui';


export const MainLayout = ({ pageTitle = '', pageDesc = '', children }) => {
  return (
    <>
      <Head>
        <title>Müputun | { pageTitle }</title>
        <link rel='icon' href={ process.env.NEXT_PUBLIC_LOGO || 'https://res.cloudinary.com/newflare/image/upload/v1694636551/demos/muputun/logotipo_color_png-fotor-2_zww9vj.png' } />
        <meta name='description' content={ pageDesc } />
      </Head>

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

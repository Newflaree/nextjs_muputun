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
        <title>müpütun | { pageTitle }</title>
        <link rel='icon' href={ process.env.NEXT_PUBLIC_LOGO || 'https://res.cloudinary.com/newflare/image/upload/v1696360940/demos/muputun/phdxc7fmejyjaiibkehy.svg' } />
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

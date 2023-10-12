// Next.js
import Head from 'next/head';
// Components
import {
  ButtonsBox,
  Footer,
  NavBar,
  SideMenu
} from '../ui';


export const MainLayout = ({ pageTitle, pageDesc, children }) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;

  return (
    <>
      <Head>
        <title>{ layoutPageTitle }</title>
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
          maxWidth: '1080px',
          padding: '0px',
          marginBottom: '40px'
          
        }}
      >
        { children }
      </main>

      <Footer />
    </>
  );
}

// React
import {
  useEffect,
  useState
} from 'react';
// Next.js
import Head from 'next/head';

// Components
import {
  ButtonsBox,
  Footer,
  LoadingPage,
  NavBar,
  ParticlesBackground,
  SideMenu
} from '../ui';


export const MainLayout = ({
  pageTitle,
  pageDesc,
  pageKeywords,
  pageImage,
  children
}) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;
  const [ isLoading, setIsLoading ] = useState( true );

  useEffect( () => {
    loadingControl();
  }, [] );

  const loadingControl = () => {
    setTimeout( () => {
      setIsLoading( false );
    }, 500 );
  }


  return (
    <>
      <Head>
        <title>{ layoutPageTitle }</title>
        <link rel='icon' href={ process.env.NEXT_PUBLIC_LOGO || 'https://res.cloudinary.com/newflare/image/upload/v1696360940/demos/muputun/phdxc7fmejyjaiibkehy.svg' } 
        /> 
        <meta name='description' content={ pageDesc } />
        <meta name="keywords" content={ pageKeywords } />
        <meta name="robots" content="index" />
        <meta name="language" content="es" />

        <meta property="og:title" content={ layoutPageTitle } />
        <meta property="og:description" content={ pageDesc } />
        <meta property="og:image" content={ pageImage } />
        <meta property="og:url" content={ '' } />
      </Head>

      
      <ParticlesBackground />
      <ButtonsBox />

      <nav>
        <NavBar />
      </nav>

      <SideMenu />

      <main
        className='fadeIn'
        style={{
          margin: 'auto',
          marginTop: '35px',
          maxWidth: '1080px',
          padding: '0px',
          marginBottom: '40px'
        }}
      >
        {
          ( isLoading )
            ? <LoadingPage />
            : <>
                { children }
              </>
        }
      </main>

      <Footer />
    </>
  );
}

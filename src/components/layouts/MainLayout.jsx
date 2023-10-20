// React
import {useEffect, useState} from 'react';

// Next.js
import Head from 'next/head';

// Components
import {
  ButtonsBox,
  Footer,
  LoadingPage,
  NavBar,
  SideMenu
} from '../ui';


export const MainLayout = ({ pageTitle, pageDesc, children }) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;
  const [ isLoading, setIsLoading ] = useState( true );

  useEffect( () => {
    loadingControl();
  }, [] );

  const loadingControl = () => {
    setTimeout( () => {
      setIsLoading( false );
    }, 600 );
  }


  return (
    <>
      <Head>
        <title>{ layoutPageTitle }</title>
        <link rel='icon' href={ process.env.NEXT_PUBLIC_LOGO || 'https://res.cloudinary.com/newflare/image/upload/v1696360940/demos/muputun/phdxc7fmejyjaiibkehy.svg' } 
        /> 
          {/*
        <meta name='description' content={ pageDesc } />
        <meta name="keywords" content={ keywordsPage } />
        <meta name="robots" content="index" />
        <meta name="language" content="es" />

        <meta property="og:title" content={ titlePage } />
        <meta property="og:description" content={ descPage } />
        <meta property="og:image" content={ '' } />
        <meta property="og:url" content={ '' } />
              */}
      </Head>

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
            : <>{ children }</>
        }
      </main>

      <Footer />
    </>
  );
}

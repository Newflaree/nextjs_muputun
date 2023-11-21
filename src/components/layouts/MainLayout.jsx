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

/**
 * `MainLayout` Component
 * 
 * Componente de diseño principal utilizado en páginas Next.js. Integra elementos como
 * NavBar, SideMenu, ButtonsBox, Footer, y un área para contenido dinámico (children).
 * Incluye también un efecto de carga y un fondo de partículas.
 * 
 * Gestiona el título, descripción, palabras clave e imagen de la página para SEO 
 * utilizando Head de Next.js. Muestra una página de carga hasta que se complete
 * el tiempo de espera configurado.
 * 
 * @param {string} pageTitle - Título de la página para el tag <title> y SEO.
 * @param {string} pageDesc - Descripción de la página para SEO.
 * @param {string} pageKeywords - Palabras clave de la página para SEO.
 * @param {string} pageImage - URL de la imagen para la etiqueta og:image de SEO.
 * @param {React.ReactNode} children - Contenido dinámico a ser renderizado dentro del layout.
 * 
 * @example
 * <MainLayout 
 *   pageTitle="Inicio" 
 *   pageDesc="Descripción de la página de inicio" 
 *   pageKeywords="inicio, muputun, principal"
 *   pageImage="https://example.com/image.jpg"
 * >
 *   <HomePageContent />
 * </MainLayout>
 * 
 * @returns {React.Component} El componente de diseño principal para las páginas de la aplicación.
 */
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

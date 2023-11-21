// Database
import { prdMethods } from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { ProductView } from '@/views';

/**
 * `ProductPage` Page Component
 * 
 * Página dedicada a mostrar información detallada sobre un producto específico.
 * Ideal para proporcionar a los usuarios una vista en profundidad de las características,
 * especificaciones y documentos relacionados con el producto.
 * 
 * Utiliza `MainLayout` para mantener la consistencia en el diseño y estructura general
 * de la aplicación, incluyendo elementos de navegación y pie de página.
 * 
 * `ProductView` es el componente encargado de presentar la información detallada del producto,
 * incluyendo descripción, especificaciones técnicas y documentación. Se maneja la descarga
 * de documentos mediante `handleDownload`.
 * 
 * La página utiliza técnicas de generación estática y servidor (Static Generation y Server-Side
 * Rendering) para pre-renderizar la página con datos específicos del producto basados en la ruta.
 * 
 * `getStaticPaths` y `getServerSideProps` son funciones de Next.js que facilitan la generación
 * de rutas dinámicas y la obtención de datos específicos del producto en tiempo de compilación
 * y en cada solicitud, respectivamente.
 * 
 * @example
 * // Ruta definida en un router de Next.js
 * <Route path="/productos/:slug" element={<ProductPage />} />
 * 
 * @returns {React.Component} Una página con información detallada de un producto.
 */
const ProductPage = ({ product }) => {
  const { name, desc } = product;

  const handleDownload = ( fileName = '' ) => {
    const link = document.createElement( 'a' );
    link.href = `/docs/${ fileName }`;
    link.download = fileName;
    link.click();
    link.remove();
  }

  return (
    <MainLayout
      pageTitle={ name }
      pageDesc={ desc }
    >
      <ProductView
        product={ product } 
        handleDownload={ handleDownload }
      />
    </MainLayout>
  );
}

export const getStatickPaths = async ( ctx ) => {
  const productSlugs = prdMethods.getAllProductSlugs();

  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

export const getServerSideProps = async ({ params }) => {
  const { slug = '' } = params;

  const product = prdMethods.getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
  }
}

export default ProductPage;

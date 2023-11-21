// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { HomeView } from '@/views';
// Database
import { seoDatabase } from '@/database';

/**
 * `HomePage` Page Component
 * 
 * Página principal de la aplicación, diseñada para ser el punto de entrada para los usuarios
 * y ofrecer una visión general de lo que la aplicación tiene para ofrecer.
 * 
 * Utiliza `MainLayout` para mantener una estructura y diseño coherentes con el resto de la
 * aplicación, incluyendo elementos comunes como la barra de navegación y el pie de página.
 * 
 * El componente `HomeView` se encarga de presentar el contenido principal de la página de inicio,
 * que puede incluir información destacada, enlaces a productos o servicios, y cualquier otro
 * contenido relevante para los usuarios al ingresar a la aplicación.
 * 
 * La página obtiene los datos de SEO como título, descripción, palabras clave e imagen de la página
 * de una base de datos (`seoDatabase`), asegurando que la información sea relevante y optimizada
 * para motores de búsqueda.
 * 
 * Esta página es crucial para causar una primera impresión positiva y para dirigir a los usuarios
 * hacia áreas de interés dentro de la aplicación.
 * 
 * @example
 * // Ruta definida en un router
 * <Route path="/" element={<HomePage />} />
 * 
 * @returns {React.Component} La página de inicio de la aplicación.
 */
const HomePage = () => {
  const {
    pageTitle,
    pageDesc,
    pageKeywords,
    pageImage
  } = seoDatabase.homePage;

  return (
    <MainLayout
      pageTitle={ pageTitle }
      pageDesc={ pageDesc }
      pageKeywords={ pageKeywords }
      pageImage={ pageImage }
    >
      <HomeView />
    </MainLayout>
  );
}

export default HomePage;

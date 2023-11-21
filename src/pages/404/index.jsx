// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { NotFoundView } from '@/views';

/**
 * `NotFoundPage` Page Component
 * 
 * Página para manejar situaciones donde el usuario navega a una ruta inexistente o a una página que no se encuentra.
 * Muestra un mensaje de error 404, informando al usuario de que la página solicitada no existe.
 * 
 * Utiliza el componente `MainLayout` para mantener la consistencia en el diseño general de la aplicación,
 * incluyendo elementos comunes como la barra de navegación y el pie de página.
 * 
 * El componente `NotFoundView` se encarga de presentar el contenido específico de la página de error,
 * proporcionando una experiencia de usuario clara y útil en caso de que se encuentre con una URL no válida.
 * 
 * @example
 * // Ruta definida en un router
 * <Route path="*" element={<NotFoundPage />} />
 * 
 * @returns {React.Component} Una página de error 404 para indicar que la ruta solicitada no existe.
 */
const NotFoundPage = () => {
  return (
    <MainLayout
      pageTitle="404"
      pageDesc="La página requerida no existe en nuestro sitio"
    >
      <NotFoundView />
    </MainLayout>
  );
}

export default NotFoundPage;

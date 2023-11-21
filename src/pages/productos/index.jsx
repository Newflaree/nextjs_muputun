// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { ProductsView } from '@/views';

/**
 * `ProductsPage` Page Component
 * 
 * Página dedicada a mostrar una colección o catálogo de productos disponibles en la aplicación.
 * Diseñada para que los usuarios exploren y descubran los diferentes productos ofrecidos.
 * 
 * Utiliza `MainLayout` para mantener la coherencia en el diseño y estructura de la aplicación,
 * incluyendo elementos comunes como la barra de navegación y el pie de página.
 * 
 * El componente `ProductsView` se encarga de presentar los productos. Este componente puede
 * incluir lógica para filtrar, ordenar o buscar productos específicos, ofreciendo una experiencia
 * de usuario interactiva y enfocada en la exploración de productos.
 * 
 * La página es ideal para ser el punto de entrada para los usuarios interesados en navegar
 * por el catálogo de productos, proporcionando una vista general y accesible de lo que la
 * aplicación tiene para ofrecer.
 * 
 * @example
 * // Ruta definida en un router
 * <Route path="/productos" element={<ProductsPage />} />
 * 
 * @returns {React.Component} Una página para explorar y descubrir productos.
 */
const ProductsPage = () => {
  return (
    <MainLayout
      pageTitle='Nuestros Productos'
    >
      <ProductsView />
    </MainLayout>
  );
}

export default ProductsPage;

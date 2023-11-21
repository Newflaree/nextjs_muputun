// Components
import {
  HomeProductsGrid,
  HomeSlideHeader
} from '@/components/ui';

/**
 * `HomeView` Component
 * 
 * Componente de vista diseñado para presentar el contenido principal de la página de inicio de la aplicación.
 * Proporciona una visión general de los productos y servicios ofrecidos, destacando elementos clave para atraer
 * el interés de los usuarios.
 * 
 * Combina múltiples componentes de la UI para crear una experiencia de usuario rica y visualmente atractiva.
 * 
 * `HomeSlideHeader` se utiliza para mostrar un carrusel de diapositivas en la parte superior de la página,
 * ofreciendo una presentación dinámica de contenido destacado, como promociones, productos o servicios especiales.
 * 
 * `HomeProductsGrid` muestra una cuadrícula de productos destacados, permitiendo a los usuarios explorar
 * rápidamente los productos más populares o nuevos.
 * 
 * Este componente es clave para capturar la atención de los usuarios desde el momento en que entran a la
 * aplicación, guiándolos hacia áreas de interés y fomentando la exploración de lo que la aplicación tiene
 * para ofrecer.
 * 
 * @returns {React.Component} Un componente de vista para la página de inicio de la aplicación.
 */
export const HomeView = () => {
  return (
    <>
      <HomeSlideHeader />
      <HomeProductsGrid />
    </>
  );
}

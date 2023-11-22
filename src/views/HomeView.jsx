// React
import { useContext } from 'react';
// Components
import {
  CountdownTimer,
  HomeProductsGrid,
  HomeSlideHeader
} from '@/components/ui';
// Context
import { UIContext } from '@/context';

/**
 * `HomeView` Component
 * 
 * Componente de vista diseñado para presentar el contenido principal de la página de inicio de la aplicación.
 * Combina múltiples componentes de UI para crear una experiencia de usuario rica y visualmente atractiva.
 * 
 * `CountdownTimer` se muestra condicionalmente, basado en el estado `showCountdownTimer` obtenido del `UIContext`.
 * Este componente proporciona una cuenta regresiva para un evento importante, generando expectación.
 * 
 * `HomeSlideHeader` presenta un carrusel de diapositivas en la parte superior de la página, mostrando contenido
 * destacado como promociones o servicios especiales.
 * 
 * `HomeProductsGrid` muestra una cuadrícula de productos destacados, permitiendo a los usuarios explorar
 * rápidamente los productos más populares o nuevos.
 * 
 * Este componente es clave para capturar la atención de los usuarios desde el momento en que entran a la
 * aplicación y para guiarlos hacia áreas de interés y fomentar la exploración de lo que la aplicación tiene
 * para ofrecer.
 * 
 * @returns {React.Component} Un componente de vista para la página de inicio de la aplicación.
 */
export const HomeView = () => {
  const { showCountdownTimer } = useContext( UIContext );

  return (
    <>
      {
        showCountdownTimer && <CountdownTimer />
      }
      <HomeSlideHeader />
      <HomeProductsGrid />
    </>
  );
}

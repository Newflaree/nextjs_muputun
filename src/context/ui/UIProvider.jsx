// React
import { useReducer } from 'react';
// Context
import { UIContext, uiReducer } from './';

/**
 * `UIProvider` Component
 * 
 * Proveedor del contexto `UIContext` que envuelve la aplicación o una parte de ella para proporcionar
 * un estado global de la interfaz de usuario (UI). Utiliza `useReducer` para manejar el estado y las
 * acciones relacionadas con la UI, como la visibilidad del menú lateral y la cuenta regresiva.
 * 
 * Incluye dos acciones principales: `toggleSideMenu` para abrir o cerrar el menú lateral y
 * `hideCountdownTimer` para ocultar el temporizador de cuenta regresiva una vez que el evento
 * ha ocurrido o la fecha objetivo ha sido alcanzada.
 * 
 * El estado inicial incluye dos propiedades: `isMenuOpen`, que controla la visibilidad del menú
 * lateral, y `showCountdownTimer`, que determina si el temporizador de cuenta regresiva debe mostrarse.
 * 
 * @param {React.ReactNode} children - Componentes hijos que tendrán acceso al contexto.
 * 
 * @example
 * <UIProvider>
 *   <App />
 * </UIProvider>
 * 
 * @returns {React.Component} Un proveedor de contexto para la interfaz de usuario.
 */
const UI_INITIAL_STATE = {
  isMenuOpen: false,
  showCountdownTimer: true
}

export const UIProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

  const toggleSideMenu = () => {
    dispatch({
      type: '[UI] - Toggle Menu'
    });
  }

  const hideCountdownTimer = () => {
    dispatch({
      type: '[UI] - Hide Countdown Timer'
    });
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSideMenu,
        hideCountdownTimer
      }}
    >
      { children }
    </UIContext.Provider>
  );
};

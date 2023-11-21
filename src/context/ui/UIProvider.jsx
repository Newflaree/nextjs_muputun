// React
import { useReducer } from 'react';
// Context
import { UIContext, uiReducer } from './';

/**
 * `UIProvider`
 * 
 * Proveedor del contexto `UIContext` que envuelve la aplicación o una parte de ella para proporcionar
 * un estado global de la UI. Utiliza un `useReducer` para manejar el estado y las acciones relacionadas
 * con la UI, como la visibilidad del menú lateral.
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
  isMenuOpen: false
}

export const UIProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

  const toggleSideMenu = () => {
    dispatch({
      type: '[UI] - Toggle Menu'
    });
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSideMenu
      }}
    >
      { children }
    </UIContext.Provider>
  );
};

import { createContext } from 'react';

/**
 * `UIContext`
 * 
 * Contexto de React utilizado para gestionar el estado global de la interfaz de usuario (UI) en la aplicación.
 * Permite un manejo centralizado y eficiente de aspectos como la visibilidad del menú lateral y otros
 * estados de la UI que requieren ser compartidos entre múltiples componentes.
 * 
 * Este contexto se inicializa sin un valor predeterminado, y se espera que sea provisto por el componente
 * `UIProvider`.
 * 
 * @example
 * import { UIContext } from 'path/to/UIContext';
 * 
 * const { isMenuOpen, toggleSideMenu } = useContext(UIContext);
 */
export const UIContext = createContext();

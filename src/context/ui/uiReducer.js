/**
 * `uiReducer`
 * 
 * Reductor para el contexto `UIContext` que maneja las acciones relacionadas con el estado de la UI.
 * Define cómo el estado debe cambiar en respuesta a ciertas acciones, permitiendo un manejo consistente
 * y predecible del estado de la UI.
 * 
 * @param {Object} state - Estado actual de la UI.
 * @param {Object} action - Acción a ejecutar, que incluye un tipo y posiblemente un payload.
 * 
 * @example
 * const newState = uiReducer(state, { type: '[UI] - Toggle Menu' });
 * 
 * @returns {Object} El nuevo estado de la UI después de aplicar la acción.
 */
export const uiReducer = ( state, action ) => {
  switch ( action.type ) {
    case '[UI] - Toggle Menu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }

    default: 
      return state;
  }
};

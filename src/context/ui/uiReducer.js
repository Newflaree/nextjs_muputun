/**
 * `uiReducer`
 * 
 * Reductor para el contexto `UIContext` que maneja las acciones relacionadas con el estado de la UI.
 * Define cómo el estado debe cambiar en respuesta a ciertas acciones, permitiendo un manejo consistente
 * y predecible del estado de la UI en la aplicación.
 * 
 * Incluye casos de acción para:
 * - '[UI] - Toggle Menu': Alterna la visibilidad del menú lateral. Cambia el estado de `isMenuOpen`.
 * - '[UI] - Hide Countdown Timer': Oculta el temporizador de cuenta regresiva. Cambia el estado de `showCountdownTimer`.
 * 
 * Cualquier otra acción no especificada simplemente devuelve el estado actual, asegurando que el reductor
 * solo responda a las acciones reconocidas.
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

    case '[UI] - Hide Countdown Timer':
      return {
        ...state,
        showCountdownTimer: false
      }

    default: 
      return state;
  }
};

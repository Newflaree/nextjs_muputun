export const currencyFormat = ( number = 0 ) => {
  return new Intl.NumberFormat(
    'es-ES',
    {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }
  ).format( number );
}

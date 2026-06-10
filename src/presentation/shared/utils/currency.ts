export const currencyFormat = (number = 0) => {
  return new Intl.NumberFormat("es-CL").format(number);
};


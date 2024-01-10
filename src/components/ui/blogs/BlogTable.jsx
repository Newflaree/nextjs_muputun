import {Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Portadora', 'Señal sinusoidal de radiofrecuencia a una frecuencia determinada.'),
  createData('Código de rango', 'Secuencias de 0 y 1 (ceros y unos), que permiten al receptor determinar el tiempo de viaje de la señal de radio desde el satélite al receptor. Se denominan secuencias de ruido pseudoaleatorio (PRN) o códigos PRN.'),
  createData('Datos de navegación', 'Un mensaje codificado en binario que proporciona información sobre las efemérides del satélite (elementos keplerianos o posición y velocidad del satélite), parámetros de polarización del reloj, almanaque (con un conjunto de datos de efemérides de precisión reducida), estado de salud del satélite y otra información complementaria.'),
];

export const BlogTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export const GNSSTable = () => {
  const data = [
    { Constelacion: 'GPS', TotalSatelitesOrbita: 24, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'GLONASS', TotalSatelitesOrbita: 21, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'GALILEO', TotalSatelitesOrbita: 27, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'BEIDOU', TotalSatelitesOrbita: 30, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Constelación</TableCell>
            <TableCell>Total de Satélites en órbita</TableCell>
            <TableCell>Satélites sobre el Punto de Medición</TableCell>
            <TableCell>Cantidad de Frecuencias usadas por satélite</TableCell>
            <TableCell>Número de Canales requeridos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((fila, index) => (
            <TableRow key={index}>
              <TableCell>{fila.Constelacion}</TableCell>
              <TableCell>{fila.TotalSatelitesOrbita}</TableCell>
              <TableCell>{fila.SatelitesPuntoMedicion}</TableCell>
              <TableCell>{fila.FrecuenciasSatelite}</TableCell>
              <TableCell>{fila.CanalesRequeridos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

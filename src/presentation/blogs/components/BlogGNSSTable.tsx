import React from 'react';


export const GNSSTable = () => {
  const data = [
    { Constelacion: 'GPS', TotalSatelitesOrbita: 24, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'GLONASS', TotalSatelitesOrbita: 21, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'GALILEO', TotalSatelitesOrbita: 27, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'BEIDOU', TotalSatelitesOrbita: 30, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-6 py-3 text-left font-semibold">Constelación</th>
            <th className="px-6 py-3 text-left font-semibold">Total de Satélites en órbita</th>
            <th className="px-6 py-3 text-left font-semibold">Satélites sobre el Punto de Medición</th>
            <th className="px-6 py-3 text-left font-semibold">Cantidad de Frecuencias usadas por satélite</th>
            <th className="px-6 py-3 text-left font-semibold">Número de Canales requeridos</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map( (fila, index) => (
              <tr
                key={ index }
                className={ `${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-t border-gray-300` }
              >
                <td className="px-6 py-4">{fila.Constelacion}</td>
                <td className="px-6 py-4">{fila.TotalSatelitesOrbita}</td>
                <td className="px-6 py-4">{fila.SatelitesPuntoMedicion}</td>
                <td className="px-6 py-4">{fila.FrecuenciasSatelite}</td>
                <td className="px-6 py-4">{fila.CanalesRequeridos}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

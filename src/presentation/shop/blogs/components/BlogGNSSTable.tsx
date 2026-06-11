export const GNSSTable = () => {
  const data = [
    { Constelacion: 'GPS', TotalSatelitesOrbita: 24, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'GLONASS', TotalSatelitesOrbita: 21, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'GALILEO', TotalSatelitesOrbita: 27, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
    { Constelacion: 'BEIDOU', TotalSatelitesOrbita: 30, SatelitesPuntoMedicion: 10, FrecuenciasSatelite: 4, CanalesRequeridos: 40 },
  ];

  return (
    <div className="my-10 overflow-hidden rounded-[2rem] bg-white/54 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
      <div className='overflow-x-auto'>
      <table className="min-w-[920px] w-full">
        <thead>
          <tr className="bg-slate-950/90 text-white">
            <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.14em]">Constelación</th>
            <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.14em]">Total de Satélites</th>
            <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.14em]">Satélites sobre punto</th>
            <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.14em]">Frecuencias</th>
            <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.14em]">Canales requeridos</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map( (fila, index) => (
              <tr
                key={ index }
                className={ index % 2 === 0 ? 'bg-white/56' : 'bg-cyan-50/32' }
              >
                <td className="px-5 py-4 font-semibold text-slate-950">{fila.Constelacion}</td>
                <td className="px-5 py-4 text-slate-600">{fila.TotalSatelitesOrbita}</td>
                <td className="px-5 py-4 text-slate-600">{fila.SatelitesPuntoMedicion}</td>
                <td className="px-5 py-4 text-slate-600">{fila.FrecuenciasSatelite}</td>
                <td className="px-5 py-4 font-semibold text-cyan-700">{fila.CanalesRequeridos}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

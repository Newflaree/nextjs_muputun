const rows = [
  { name: 'Portadora', description: 'Señal sinusoidal de radiofrecuencia a una frecuencia determinada.' },
  { name: 'Código de rango', description: 'Secuencias de 0 y 1 (ceros y unos), que permiten al receptor determinar el tiempo de viaje de la señal de radio desde el satélite al receptor. Se denominan secuencias de ruido pseudoaleatorio (PRN) o códigos PRN.' },
  { name: 'Datos de navegación', description: 'Un mensaje codificado en binario que proporciona información sobre las efemérides del satélite (elementos keplerianos o posición y velocidad del satélite), parámetros de polarización del reloj, almanaque (con un conjunto de datos de efemérides de precisión reducida), estado de salud del satélite y otra información complementaria.' },
];

export const BlogTable = () => {
  return (
    <div className="my-10 overflow-hidden rounded-[2rem] bg-white/54 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
      <div className='overflow-x-auto'>
      <table className="min-w-[720px] w-full">
        <thead>
          <tr>
            <th className="bg-slate-950/90 px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.18em] text-white">Nombre</th>
            <th className="bg-slate-950/90 px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.18em] text-white">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => (
              <tr
                key={ row.name }
                className={ index % 2 === 0 ? "bg-white/56" : "bg-cyan-50/32" }
              >
                <td className="px-5 py-4 font-semibold text-slate-950">{ row.name }</td>
                <td className="px-5 py-4 leading-7 text-slate-600">{ row.description }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

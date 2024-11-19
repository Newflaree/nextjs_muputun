const rows = [
  { name: 'Portadora', description: 'Señal sinusoidal de radiofrecuencia a una frecuencia determinada.' },
  { name: 'Código de rango', description: 'Secuencias de 0 y 1 (ceros y unos), que permiten al receptor determinar el tiempo de viaje de la señal de radio desde el satélite al receptor. Se denominan secuencias de ruido pseudoaleatorio (PRN) o códigos PRN.' },
  { name: 'Datos de navegación', description: 'Un mensaje codificado en binario que proporciona información sobre las efemérides del satélite (elementos keplerianos o posición y velocidad del satélite), parámetros de polarización del reloj, almanaque (con un conjunto de datos de efemérides de precisión reducida), estado de salud del satélite y otra información complementaria.' },
];

export const BlogTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="bg-black text-white px-4 py-2 text-left">Nombre</th>
            <th className="bg-black text-white px-4 py-2 text-left">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => (
              <tr
                key={ row.name }
                className={ index % 2 === 0 ? "bg-gray-100" : "bg-white" }
              >
                <td className="border px-4 py-2 font-medium">{ row.name }</td>
                <td className="border px-4 py-2 text-right">{ row.description }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

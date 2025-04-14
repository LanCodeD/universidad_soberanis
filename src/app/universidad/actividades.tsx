'use client';

import { useEffect, useState } from 'react';
import { getUltimasActividades } from './accion'; // asegúrate que sea una función server-safe

export default function ActividadesTabla() {
  const [actividades, setActividades] = useState<any[]>([]); // puedes tipar mejor si tienes interfaz

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUltimasActividades();
      setActividades(data);
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto bg-white p-4 rounded shadow">
      <h1 className="text-black text-2xl font-bold mb-4">Últimas 5 actividades registradas</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-black border px-4 py-2">ID</th>
            <th className="text-black border px-4 py-2">Nombre</th>
            <th className="text-black border px-4 py-2">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {actividades.map((actividad) => (
            <tr key={actividad.actividad_id}>
              <td className="text-black border px-4 py-2">{actividad.actividad_id}</td>
              <td className="text-black border px-4 py-2">{actividad.nombre}</td>
              <td className="text-black border px-4 py-2">{actividad.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

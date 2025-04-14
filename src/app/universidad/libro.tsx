'use client';

import { useEffect, useState } from 'react';
import { getUltimosLibros } from './accion'; // asegúrate que sea una función server-safe

export default function LibroTabla() {
  const [actividades, setActividades] = useState<any[]>([]); // puedes tipar mejor si tienes interfaz

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUltimosLibros();
      setActividades(data);
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto bg-white p-4 rounded shadow">
      <h1 className="text-2xl text-black font-bold mb-4">Últimos 5 Libros registrados</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-black border px-4 py-2">ID</th>
            <th className="text-black border px-4 py-2">Titulo</th>
            <th className="text-black border px-4 py-2">Cantidad de Ejemplares</th>
          </tr>
        </thead>
        <tbody>
          {actividades.map((actividad) => (
            <tr key={actividad.libro_id}>
              <td className="text-black border px-4 py-2">{actividad.libro_id}</td>
              <td className="text-black border px-4 py-2">{actividad.titulo}</td>
              <td className="text-black border px-4 py-2">{actividad.cantidad_ejemplares}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

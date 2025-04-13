'use client';

import { useEffect, useState } from 'react';
import { obtenerLibrosMasPrestados, LibroPrestado } from '@/app/universidad/conocer_libro/(controlador)/accion';

export default function LibrosMasPrestados() {
  const [libros, setLibros] = useState<LibroPrestado[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const datos = await obtenerLibrosMasPrestados();
      setLibros(datos);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📚 Libros Más Prestados en el Último Semestre</h2>

      {libros.length === 0 ? (
        <p className="text-gray-500">No se encontraron préstamos en el último semestre.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-black text-amber-50">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Título</th>
              <th className="border px-4 py-2">Autor</th>
              <th className="border px-4 py-2">Total de Préstamos</th>
            </tr>
          </thead>
          <tbody>
            {libros.map((libro) => (
              <tr key={libro.libro_id}>
                <td className="border px-4 py-2">{libro.libro_id}</td>
                <td className="border px-4 py-2">{libro.titulo}</td>
                <td className="border px-4 py-2">{libro.autor}</td>
                <td className="border px-4 py-2">{libro.total_prestamos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

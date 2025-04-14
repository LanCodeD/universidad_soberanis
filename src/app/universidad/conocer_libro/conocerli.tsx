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
<main className="max-h-full bg-gray-100 flex items-center justify-center px-4">
  <div className="w-full bg-white p-4 rounded-2xl shadow-md border">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">📚 Libros Más Prestados en el Último Semestre</h2>

    {libros.length === 0 ? (
      <p className="text-gray-500 text-center">No se encontraron préstamos en el último semestre.</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-gray-900 to-gray-700 text-amber-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Título</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Autor</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Total de Préstamos</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
            {libros.map((libro) => (
              <tr key={libro.libro_id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2">{libro.libro_id}</td>
                <td className="px-4 py-2">{libro.titulo}</td>
                <td className="px-4 py-2">{libro.autor}</td>
                <td className="px-4 py-2 font-medium text-blue-700">{libro.total_prestamos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</main>

  );
}

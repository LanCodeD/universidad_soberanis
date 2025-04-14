'use client';

import { useState } from 'react';
import { registrarPrestamoLibro } from './(controlador)/accion';

export default function PrestamoForm() {
  const [idEstudiante, setIdEstudiante] = useState('');
  const [idLibro, setIdLibro] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    const res = await registrarPrestamoLibro(Number(idEstudiante), Number(idLibro));
    setMensaje(res);
    setCargando(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-md border w-full">
      <h2 className="text-2xl font-semibold text-gray-800">Registrar Préstamo de Libro</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ID Estudiante</label>
        <input
          type="number"
          value={idEstudiante}
          onChange={(e) => setIdEstudiante(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ID Libro</label>
        <input
          type="number"
          value={idLibro}
          onChange={(e) => setIdLibro(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition duration-200 disabled:bg-blue-300"
        disabled={cargando}
      >
        {cargando ? 'Registrando...' : 'Registrar Préstamo'}
      </button>

      {mensaje && (
        <div className="mt-4 text-blue-700 font-medium">
          {mensaje}
        </div>
      )}
    </form>

  );
}

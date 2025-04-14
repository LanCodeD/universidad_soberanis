'use client';

import { useState } from 'react';
import { actualizarCapacidad } from '../aulas/(controlador)/accion';

export default function ActualizarCapacidadAula() {
  const [capacidad, setCapacidad] = useState('');
  const [aula_id, setAula] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    const cap = Number(capacidad);
    const aul = Number(aula_id);

    const respuesta = await actualizarCapacidad(cap, aul);
    setMensaje(respuesta);
    setEnviando(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-md border w-full">
      <h2 className="text-2xl font-semibold text-gray-800">Actualizar Capacidad del Aula</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ID del Aula</label>
        <input
          type="number"
          value={aula_id}
          onChange={(e) => setAula(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nueva Capacidad</label>
        <input
          type="number"
          value={capacidad}
          onChange={(e) => setCapacidad(e.target.value)}
          step="0.1"
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="30"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition duration-200 disabled:bg-blue-300"
        disabled={enviando}
      >
        {enviando ? 'Actualizando...' : 'Actualizar Capacidad'}
      </button>

      {mensaje && (
        <p className="mt-4 text-blue-700 font-medium">
          {mensaje}
        </p>
      )}
    </form>


  );
}

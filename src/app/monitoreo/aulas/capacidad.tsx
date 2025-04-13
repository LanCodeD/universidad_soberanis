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
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Actualizar Calificación</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Aula id: </label>
          <input
            type="number"
            value={aula_id}
            onChange={(e) => setAula(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label>Nueva Capacidad del Aula:</label>
          <input
            type="number"
            value={capacidad}
            onChange={(e) => setCapacidad(e.target.value)}
            step="0.1"
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={enviando}
        >
          {enviando ? 'Actualizando...' : 'Actualizar Calificación'}
        </button>
      </form>
      {mensaje && <p className="mt-4 font-semibold">{mensaje}</p>}
    </div>
  );
}

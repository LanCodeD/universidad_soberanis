'use client';

import { useState } from 'react';
import { actualizarCalificacion } from '../actualizar_cali/(controlador)/accion';

export default function ActualizarCalificacionForm() {
  const [historialId, setHistorialId] = useState('');
  const [calificacion, setCalificacion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    const id = Number(historialId);
    const cal = parseFloat(calificacion);

    const respuesta = await actualizarCalificacion(id, cal);
    setMensaje(respuesta);
    setEnviando(false);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Actualizar Calificación</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>ID del historial:</label>
          <input
            type="number"
            value={historialId}
            onChange={(e) => setHistorialId(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label>Nueva calificación:</label>
          <input
            type="number"
            value={calificacion}
            onChange={(e) => setCalificacion(e.target.value)}
            step="0.1"
            //min="0"
            //max="10"
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

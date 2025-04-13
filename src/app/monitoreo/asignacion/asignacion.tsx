'use client';

import { useState } from 'react';
import { insertarAsignacion } from '../asignacion/(controlador)/accion';

export default function AsignarProfesor() {
  const [profesorId, setProfesorId] = useState('');
  const [horarioId, setHorarioId] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    const profId = Number(profesorId);
    const horId = Number(horarioId);

    const respuesta = await insertarAsignacion(profId, horId);
    setMensaje(respuesta);
    setEnviando(false);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Asignar Profesor a Horario</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>ID del Profesor:</label>
          <input
            type="number"
            value={profesorId}
            onChange={(e) => setProfesorId(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label>ID del Horario:</label>
          <input
            type="number"
            value={horarioId}
            onChange={(e) => setHorarioId(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
          disabled={enviando}
        >
          {enviando ? 'Asignando...' : 'Asignar'}
        </button>
      </form>
      {mensaje && <p className="mt-4 font-semibold">{mensaje}</p>}
    </div>
  );
}

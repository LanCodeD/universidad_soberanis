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
   <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-md border w-full">
        <h2 className="text-2xl font-semibold text-gray-800">Asignar Profesor a Horario</h2>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ID del Profesor</label>
          <input
            type="number"
            value={profesorId}
            onChange={(e) => setProfesorId(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="0"
            required
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ID del Horario</label>
          <input
            type="number"
            value={horarioId}
            onChange={(e) => setHorarioId(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="0"
            required
          />
        </div>
  
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition duration-200 disabled:bg-green-300"
          disabled={enviando}
        >
          {enviando ? 'Asignando...' : 'Asignar'}
        </button>
  
        {mensaje && (
          <p className="mt-4 text-green-700 font-medium">
            {mensaje}
          </p>
        )}
      </form>  );
}

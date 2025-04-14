'use client';

import { useState } from 'react';
import { simularInscripcionEvento } from '@/app/universidad/evento/(controlador)/accion';

export default function SimulacionForm() {
  const [eventoId, setEventoId] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const respuesta = await simularInscripcionEvento(Number(eventoId));
    setMensaje(respuesta);
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-md border w-full">
        <h2 className="text-2xl font-semibold text-gray-800">Simular Inscripción a Evento</h2>
  
        <div>
          <label htmlFor="eventoId" className="block text-sm font-medium text-gray-700 mb-1">
            ID del Evento
          </label>
          <input
            type="number"
            id="eventoId"
            value={eventoId}
            onChange={(e) => setEventoId(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
            required
          />
        </div>
  
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition duration-200"
        >
          Simular Inscripción
        </button>
  
        {mensaje && (
          <div className="mt-4 text-blue-700 font-medium">
            {mensaje}
          </div>
        )}
      </form>

  );
}

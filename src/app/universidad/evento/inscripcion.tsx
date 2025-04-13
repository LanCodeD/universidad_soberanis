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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="eventoId" className="block text-sm font-medium text-gray-700">
          ID del Evento
        </label>
        <input
          type="number"
          id="eventoId"
          value={eventoId}
          onChange={(e) => setEventoId(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Simular Inscripción
      </button>

      {mensaje && (
        <div className="mt-4 text-sm font-semibold text-green-700">
          {mensaje}
        </div>
      )}
    </form>
  );
}

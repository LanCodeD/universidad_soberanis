// app/universidad/consultas.tsx
'use client';

import { useState } from 'react';
import { registrarPrestamo } from '../universidad/(controlador)/accion';

export default function Consultas() {
  const [idEstudiante, setIdEstudiante] = useState('');
  const [idLibro, setIdLibro] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resultado = await registrarPrestamo(Number(idEstudiante), Number(idLibro));
    setMensaje(resultado);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Registrar Préstamo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="ID Estudiante"
          value={idEstudiante}
          onChange={(e) => setIdEstudiante(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="ID Libro"
          value={idLibro}
          onChange={(e) => setIdLibro(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Registrar
        </button>
      </form>
      {mensaje && <p className="mt-4 font-semibold">{mensaje}</p>}
    </div>
  );
}

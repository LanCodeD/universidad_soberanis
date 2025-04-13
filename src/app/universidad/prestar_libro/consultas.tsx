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
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label>ID Estudiante:</label>
        <input
          type="number"
          value={idEstudiante}
          onChange={(e) => setIdEstudiante(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label>ID Libro:</label>
        <input
          type="number"
          value={idLibro}
          onChange={(e) => setIdLibro(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        disabled={cargando}
      >
        {cargando ? 'Registrando...' : 'Registrar Préstamo'}
      </button>
      {mensaje && <p className="mt-4 font-semibold">{mensaje}</p>}
    </form>
  );
}

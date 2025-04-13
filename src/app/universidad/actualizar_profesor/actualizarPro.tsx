// src/app/universidad/actualizar-contacto/page.tsx
'use client';

import { useState } from 'react';
import { actualizarContactoProfesor } from '../actualizar_profesor/(controlador)/accion';

export default function FormActualizarContacto() {
  const [profesorId, setProfesorId] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await actualizarContactoProfesor(
      Number(profesorId),
      email,
      telefono
    );
    setMensaje(res);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md">
      <div>
        <label>ID Profesor:</label>
        <input
          type="number"
          value={profesorId}
          onChange={(e) => setProfesorId(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label>Nuevo Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label>Nuevo Teléfono:</label>
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Actualizar Contacto
      </button>

      {mensaje && <p className="mt-4 font-semibold">{mensaje}</p>}
    </form>
  );
}

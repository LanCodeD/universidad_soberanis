'use client';

import { useState, FormEvent } from 'react';
import { registrarActividad } from '@/app/universidad/actividad/(controlador)/accion';

export default function ActividadRegistro() {
  const [mensaje, setMensaje] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await registrarActividad(formData.nombre, formData.descripcion);
    setMensaje(res);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-black text-amber-50 p-4 rounded shadow max-w-md">
      <div>
        <label className="block font-semibold">Nombre</label>
        <input
          type="text"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Descripción</label>
        <textarea
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Registrar Actividad
      </button>
      {mensaje && <p className="mt-4 text-green-600 font-medium">{mensaje}</p>}
    </form>
  );
}

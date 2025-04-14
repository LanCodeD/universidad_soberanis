"use client";

import { useState, FormEvent } from "react";
import { registrarActividad } from "@/app/universidad/actividad/(controlador)/accion";

export default function ActividadRegistro() {
  const [mensaje, setMensaje] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await registrarActividad(formData.nombre, formData.descripcion);
    setMensaje(res);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-2xl shadow-md border w-full"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Nueva Actividad Extracurricular
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          type="text"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Taller"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          value={formData.descripcion}
          onChange={(e) =>
            setFormData({ ...formData, descripcion: e.target.value })
          }
          className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Descripción"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition duration-200"
      >
        Registrar Actividad
      </button>

      {mensaje && <p className="mt-4 text-green-600 font-medium">{mensaje}</p>}
    </form>
  );
}

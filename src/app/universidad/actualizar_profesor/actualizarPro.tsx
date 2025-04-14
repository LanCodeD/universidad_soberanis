// src/app/universidad/actualizar-contacto/page.tsx
"use client";

import { useState } from "react";
import { actualizarContactoProfesor } from "../actualizar_profesor/(controlador)/accion";

export default function FormActualizarContacto() {
  const [profesorId, setProfesorId] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

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

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-md border w-full"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Actualizar Información de Contacto
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID Profesor
            </label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nuevo Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="ejemplo@valladolid.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nuevo Teléfono
            </label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="9991234567"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition duration-200"
          >
            Actualizar Contacto
          </button>

          {mensaje && (
            <p className="mt-4 text-green-600 font-medium">{mensaje}</p>
          )}
        </form>

  );
}

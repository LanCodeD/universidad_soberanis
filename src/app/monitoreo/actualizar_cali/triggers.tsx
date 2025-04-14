"use client";

import { useState } from "react";
import { actualizarCalificacion } from "../actualizar_cali/(controlador)/accion";

export default function ActualizarCalificacionForm() {
  const [historialId, setHistorialId] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    const id = Number(historialId);
    const cal = parseFloat(calificacion);

    const respuesta = await actualizarCalificacion(id, cal);
    setMensaje(respuesta);
    setEnviando(false);
  };

  return (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-md border w-full"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Actualizar Calificación
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID del Historial
            </label>
            <input
              type="number"
              value={historialId}
              onChange={(e) => setHistorialId(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nueva Calificación
            </label>
            <input
              type="number"
              value={calificacion}
              onChange={(e) => setCalificacion(e.target.value)}
              step="0.1"
              className="w-full border border-gray-300 p-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="8.5"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition duration-200 disabled:bg-blue-300"
            disabled={enviando}
          >
            {enviando ? "Actualizando..." : "Actualizar Calificación"}
          </button>

          {mensaje && (
            <div className="mt-4 text-blue-700 font-medium">{mensaje}</div>
          )}
        </form>
  );
}

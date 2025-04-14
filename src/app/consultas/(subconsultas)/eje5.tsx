import { obtenerEjercicio5} from '../(controlador)/accion';
import { FacultadDepartamento } from "@/app/types/subconsultas";

export default async function Ejercicio5() {
  const facultad: FacultadDepartamento[] = await obtenerEjercicio5();

  return (
<section className="p-6 max-h-full mb-4 mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-800 mb-6"> Facultades con al menos un Departamento</h2>

  {facultad.length === 0 ? (
    <p className="text-gray-500 text-center">No se encontraron registros.</p>
  ) : (
    <ul className="space-y-4">
      {facultad.map((departamento) => (
        <li
          key={departamento.facultad_id}
          className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-blue-700">
            Departamento: {departamento.nombre}
          </h3>
          <p className="text-sm text-gray-700 mt-1">
            Descripción: <span className="font-medium">{departamento.descripcion}</span>
          </p>
        </li>
      ))}
    </ul>
  )}
</section>

  );
}
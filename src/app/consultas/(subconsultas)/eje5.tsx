import { obtenerEjercicio5} from '../(controlador)/accion';
import { FacultadDepartamento } from "@/app/types/subconsultas";

export default async function Ejercicio5() {
  const facultad: FacultadDepartamento[] = await obtenerEjercicio5();

  return (
    <section className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Encontrar Facultades con al menos un Departamento</h2>
      {facultad.length === 0 ? (
        <p className="text-gray-600">No se encontraron registros.</p>
      ) : (
        <ul className="space-y-2">
          {facultad.map((departamento) => (
            <li key={departamento.facultad_id} className="border-b pb-2">
              <strong>Departamento: {departamento.nombre}</strong><br />
              <p>Descripcion: {departamento.descripcion}</p><br />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
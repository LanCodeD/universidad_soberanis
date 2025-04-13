import { obtenerEjercicio4} from '../(controlador)/accion';
import { EstudiantesInscritos } from "@/app/types/subconsultas";

export default async function Ejercicio4() {
  const estudiante: EstudiantesInscritos[] = await obtenerEjercicio4();

  return (
    <section className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Cursos con más estudiantes inscritos que el promedio de inscripción general de cursos</h2>
      {estudiante.length === 0 ? (
        <p className="text-gray-600">No se encontraron registros.</p>
      ) : (
        <ul className="space-y-2">
          {estudiante.map((inscrito) => (
            <li key={inscrito.curso_id} className="border-b pb-2">
              <strong>Estudiante: {inscrito.nombre}</strong><br />
              <p>Número de Estudiante: {inscrito.numero_estudiantes}</p><br />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
import { obtenerEjercicio2} from '../(controlador)/accion';
import { CursoNoAprobado } from "@/app/types/subconsultas";

export default async function Ejercicio2() {
  const cursos: CursoNoAprobado[] = await obtenerEjercicio2();

  return (
    <section className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Cursos que ningún estudiante ha aprobado</h2>
      {cursos.length === 0 ? (
        <p className="text-gray-600">No se encontraron registros.</p>
      ) : (
        <ul className="space-y-2">
          {cursos.map((curso) => (
            <li key={curso.curso_id} className="border-b pb-2">
              <strong>Nombre: {curso.nombre}</strong><br />
              <p>Código: {curso.codigo}</p><br />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

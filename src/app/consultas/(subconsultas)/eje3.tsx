import { obtenerEjercicio3} from '../(controlador)/accion';
import { CursoProfesor } from "@/app/types/subconsultas";

export default async function Ejercicio3() {
  const cursop: CursoProfesor[] = await obtenerEjercicio3();

  return (
    <section className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Profesores que han impartido al menos un curso que ningún otro profesor ha impartido</h2>
      {cursop.length === 0 ? (
        <p className="text-gray-600">No se encontraron registros.</p>
      ) : (
        <ul className="space-y-2">
          {cursop.map((cursopr) => (
            <li key={cursopr.profesor_id} className="border-b pb-2">
              <strong>Profesor: {cursopr.nombre} {cursopr.apellido}</strong><br />
              <p>Curso: {cursopr.nombres_cursos}</p><br />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
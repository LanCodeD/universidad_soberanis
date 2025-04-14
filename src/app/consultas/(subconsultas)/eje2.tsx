import { obtenerEjercicio2} from '../(controlador)/accion';
import { CursoNoAprobado } from "@/app/types/subconsultas";

export default async function Ejercicio2() {
  const cursos: CursoNoAprobado[] = await obtenerEjercicio2();

  return (
<section className="p-6 max-h-full mb-4 mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-800 mb-6"> Cursos que Ningún Estudiante ha Aprobado</h2>

  {cursos.length === 0 ? (
    <p className="text-gray-500 text-center">No se encontraron registros.</p>
  ) : (
    <ul className="space-y-4">
      {cursos.map((curso) => (
        <li
          key={curso.curso_id}
          className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-blue-700"> {curso.nombre}</h3>
          <p className="text-sm text-gray-700 mt-1">Código del curso: <span className="font-medium">{curso.codigo}</span></p>
        </li>
      ))}
    </ul>
  )}
</section>

  );
}

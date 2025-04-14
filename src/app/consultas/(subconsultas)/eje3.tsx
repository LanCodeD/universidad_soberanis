import { obtenerEjercicio3} from '../(controlador)/accion';
import { CursoProfesor } from "@/app/types/subconsultas";

export default async function Ejercicio3() {
  const cursop: CursoProfesor[] = await obtenerEjercicio3();

  return (
<section className="p-6 max-h-full mb-4 mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-800 mb-6"> Profesores con Cursos Únicos</h2>

  {cursop.length === 0 ? (
    <p className="text-gray-500 text-center">No se encontraron registros.</p>
  ) : (
    <ul className="space-y-4">
      {cursop.map((cursopr) => (
        <li
          key={cursopr.profesor_id}
          className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-blue-700">{cursopr.nombre} {cursopr.apellido}</h3>
          <p className="text-sm text-gray-700 mt-1">Curso impartido exclusivamente: <span className="font-medium">{cursopr.nombres_cursos}</span></p>
        </li>
      ))}
    </ul>
  )}
</section>

  );
}
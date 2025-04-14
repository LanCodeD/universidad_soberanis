import { obtenerEjercicio4} from '../(controlador)/accion';
import { EstudiantesInscritos } from "@/app/types/subconsultas";

export default async function Ejercicio4() {
  const estudiante: EstudiantesInscritos[] = await obtenerEjercicio4();

  return (
<section className="p-6 max-h-full mb-4 mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-800 mb-6"> Cursos con Inscripción Superior al Promedio</h2>

  {estudiante.length === 0 ? (
    <p className="text-gray-500 text-center">No se encontraron registros.</p>
  ) : (
    <ul className="space-y-4">
      {estudiante.map((inscrito) => (
        <li
          key={inscrito.curso_id}
          className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-blue-700">Curso: {inscrito.nombre}</h3>
          <p className="text-sm text-gray-700 mt-1">Número de estudiantes inscritos: <span className="font-medium">{inscrito.numero_estudiantes}</span></p>
        </li>
      ))}
    </ul>
  )}
</section>

  );
}
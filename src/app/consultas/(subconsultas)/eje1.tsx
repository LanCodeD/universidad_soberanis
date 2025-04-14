import { obtenerEjercicio1} from '../(controlador)/accion';
import { LibroProfesor } from "@/app/types/subconsultas";

export default async function Ejercicio1() {
  const libros: LibroProfesor[] = await obtenerEjercicio1();

  return (
<section className="p-6 max-h-full mb-4 mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-800 mb-6"> Libros Prestados Solo a Profesores</h2>

  {libros.length === 0 ? (
    <p className="text-gray-500 text-center">No se encontraron registros.</p>
  ) : (
    <ul className="space-y-4">
      {libros.map((libro) => (
        <li
          key={libro.libro_id}
          className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-blue-700">{libro.titulo}</h3>
          <p className="text-sm text-gray-700 mt-1">
            Prestado por: <span className="font-medium">{libro.nombre_prestamista} {libro.apellido ?? ''}</span>
            <br />
            Título académico: <span className="italic">{libro.titulo_academico ?? 'N/A'}</span>
          </p>
        </li>
      ))}
    </ul>
  )}
</section>

  );
}

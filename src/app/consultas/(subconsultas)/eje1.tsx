import { obtenerEjercicio1} from '../(controlador)/accion';
import { LibroProfesor } from "@/app/types/subconsultas";

export default async function Ejercicio1() {
  const libros: LibroProfesor[] = await obtenerEjercicio1();

  return (
    <section className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">📚 Libros prestados solo a profesores</h2>
      {libros.length === 0 ? (
        <p className="text-gray-600">No se encontraron registros.</p>
      ) : (
        <ul className="space-y-2">
          {libros.map((libro) => (
            <li key={libro.libro_id} className="border-b pb-2">
              <strong>{libro.titulo}</strong><br />
              Prestado por: {libro.nombre_prestamista} {libro.apellido ?? ''} — {libro.titulo_academico ?? 'N/A'}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

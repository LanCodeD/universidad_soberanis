import Link from "next/link";
import ActividadesTabla from "./actividades";
import ProfesorTabla from "./profesor";
import EventoTabla from "./eventos";
import LibroTabla from "./libro";

export default function ResumenPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-black mb-4">Base de datos Universidad</h1>
        <nav className="flex justify-center gap-6 text-blue-600 font-medium">
        <Link href="./inicio">Inicio</Link>
        <Link href="/universidad/actividad">Actividades</Link>
        <Link href="/universidad/actualizar_profesor">Actualizar Profesores</Link>
        <Link href="/universidad/conocer_libro">Conocer libro</Link>
        <Link href="/universidad/evento">Evento</Link>
        <Link href="/universidad/prestar_libro">Prestar Libros</Link>
      </nav>
      </header>

      <h1 className="text-2xl text-cyan-800 font-bold mb-6">Resumen General</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActividadesTabla />
        <ProfesorTabla />
        <EventoTabla />
        <LibroTabla />
      </div>
    </main>
  );
}

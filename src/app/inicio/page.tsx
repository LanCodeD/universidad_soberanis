// app/inicio/page.tsx
import Link from 'next/link';
import { obtenerConteos } from './(controlador)/accion';

export default async function InicioPage() {
  const conteos = await obtenerConteos();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-black mb-4">Base de datos Universidad</h1>
        <nav className="flex justify-center gap-6 text-blue-600 font-medium">
          <Link href="/consultas">SubConsultas</Link>
          <Link href="/universidad">Procedimientos Almacenados</Link>
          <Link href="/monitoreo">Triggers</Link>
        </nav>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold text-gray-700">Facultades</h2>
          <p className="text-3xl font-bold text-blue-500">{conteos.facultades}</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold text-gray-700">Departamentos</h2>
          <p className="text-3xl font-bold text-green-500">{conteos.departamentos}</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold text-gray-700">Estudiantes</h2>
          <p className="text-3xl font-bold text-purple-500">{conteos.estudiantes}</p>
        </div>
      </section>
    </div>
  );
}

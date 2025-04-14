import Link from 'next/link';
import { obtenerLogsAcciones } from './actualizar_cali/(controlador)/accion';

export default async function Page() {
  const logs = await obtenerLogsAcciones();

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-black mb-4">Base de datos Universidad</h1>
        <nav className="flex justify-center gap-6 text-blue-600 font-medium">
        <Link href="./inicio">Inicio</Link>
        <Link href="/monitoreo/actualizar_cali">Actualizar Calificacion</Link>
        <Link href="/monitoreo/asignacion">Actualizar Asignacion</Link>
        <Link href="/monitoreo/aulas">Aulas</Link>
      </nav>
      </header>
      
      <h1 className="text-2xl text-cyan-800 font-bold mb-4">Registro de Auditoría</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className='bg-gray-200'>
            <th className="text-black border px-4 py-2">Fecha</th>
            <th className="text-black border px-4 py-2">Tabla</th>
            <th className="text-black border px-4 py-2">Acción</th>
            <th className="text-black border px-4 py-2">ID Registro</th>
            <th className="text-black border px-4 py-2">Antes</th>
            <th className="text-black border px-4 py-2">Después</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i} className="border-t">
              <td className="text-black border px-4 py-2">{new Date(log.fecha).toLocaleString()}</td>
              <td className="text-black border px-4 py-2">{log.tabla_afectada}</td>
              <td className="text-black border px-4 py-2">{log.accion}</td>
              <td className="text-black border px-4 py-2">{log.registro_id}</td>
              <td className="text-black border px-4 py-2">{log.valor_anterior}</td>
              <td className="text-black border px-4 py-2">{log.valor_nuevo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

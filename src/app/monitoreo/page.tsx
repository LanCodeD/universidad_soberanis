import { obtenerLogsAcciones } from './actualizar_cali/(controlador)/accion';

export default async function Page() {
  const logs = await obtenerLogsAcciones();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Registro de Auditoría</h1>
      <table className="min-w-full bg-black text-amber-50 shadow rounded">
        <thead>
          <tr>
            <th className="border px-4 py-2">Fecha</th>
            <th className="border px-4 py-2">Tabla</th>
            <th className="border px-4 py-2">Acción</th>
            <th className="border px-4 py-2">ID Registro</th>
            <th className="border px-4 py-2">Antes</th>
            <th className="border px-4 py-2">Después</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i} className="border-t">
              <td className="border px-4 py-2">{new Date(log.fecha).toLocaleString()}</td>
              <td className="border px-4 py-2">{log.tabla_afectada}</td>
              <td className="border px-4 py-2">{log.accion}</td>
              <td className="border px-4 py-2">{log.registro_id}</td>
              <td className="border px-4 py-2">{log.valor_anterior}</td>
              <td className="border px-4 py-2">{log.valor_nuevo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

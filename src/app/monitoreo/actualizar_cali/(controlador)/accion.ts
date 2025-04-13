'use server';

import { getConnection } from '@/app/_lib/db';

export async function obtenerLogsAcciones() {
  const db = await getConnection();
  const [rows] = await db.query('SELECT * FROM log_acciones ORDER BY fecha DESC');
  await db.end();
  return rows as any[]; // Puedes tiparlo mejor si conoces las columnas
}


export async function actualizarCalificacion(
  historial_id: number,
  nueva_calificacion: number
): Promise<string> {
  try {
    const db = await getConnection();
    await db.query(
      'UPDATE historial_academico SET calificacion = ? WHERE historial_id = ?',
      [nueva_calificacion, historial_id]
    );
    await db.end();
    return 'CALIFICACIÓN ACTUALIZADA CORRECTAMENTE';
  } catch (error: any) {
    return `ERROR AL ACTUALIZAR: ${error.message}`;
  }
}

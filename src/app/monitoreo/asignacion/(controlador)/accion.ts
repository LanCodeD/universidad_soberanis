'use server';

import { getConnection } from '@/app/_lib/db';

export async function insertarAsignacion(
  profesor_id: number,
  horario_id: number
): Promise<string> {
  try {
    const db = await getConnection();
    await db.query(
      'INSERT INTO asignacion_profesores (profesor_id, horario_id) VALUES (?, ?)',
      [profesor_id, horario_id]
    );
    await db.end();
    return 'ASIGNACIÓN REGISTRADA CORRECTAMENTE';
  } catch (error: any) {
    return `ERROR: ${error.message}`;
  }
}

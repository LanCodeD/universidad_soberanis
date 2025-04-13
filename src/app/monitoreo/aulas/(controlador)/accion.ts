'use server';

import { getConnection } from '@/app/_lib/db';

export async function actualizarCapacidad(
  capacidad: number,
  aula_id: number
): Promise<string> {
  try {
    const db = await getConnection();
    await db.query(
      'UPDATE aulas SET capacidad = ? WHERE aula_id = ?',
      [capacidad, aula_id]
    );
    await db.end();
    return 'CAPACIDAD ACTUALIZADA CORRECTAMENTE';
  } catch (error: any) {
    return `ERROR: ${error.message}`;
  }
}

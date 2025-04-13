'use server';

import { getConnection } from '@/app/_lib/db';

export async function actualizarContactoProfesor(
  profesor_id: number,
  email: string,
  telefono: string
): Promise<string> {
  try {
    const db = await getConnection();

    await db.query('CALL ActualizarContactoProfesor(?, ?, ?, @resultado)', [
      profesor_id,
      email,
      telefono,
    ]);

    const [rows] = await db.query<any[]>('SELECT @resultado as resultado');
    await db.end();

    return rows[0]?.resultado || 'Sin respuesta del servidor';
  } catch (error: any) {
    console.error('Error al actualizar contacto:', error);
    return 'Error interno al actualizar contacto';
  }
}

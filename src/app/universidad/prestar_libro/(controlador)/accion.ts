'use server';

import { getConnection } from '@/app/_lib/db'; // Asegúrate de tener esta función bien hecha

export async function registrarPrestamoLibro(
  estudiante_id: number,
  libro_id: number
): Promise<string> {
  try {
    const db = await getConnection();

    // Llamamos al procedimiento almacenado (separando la consulta)
    await db.query('CALL RegistrarPrestamoLibro(?, ?, @resultado)', [estudiante_id, libro_id]);

    // Ahora obtenemos el resultado
    const [rows] = await db.query <any[]>('SELECT @resultado as resultado');

    await db.end();

    return rows[0]?.resultado|| 'Sin respuesta del servidor';
  } catch (error) {
    console.error('Error al registrar el préstamo:', error);
    return 'Error al registrar el préstamo.';
  }
}

'use server';

import { getConnection } from '@/app/_lib/db';

export async function registrarPrestamo(p_id_estudiante: number, p_id_libro: number): Promise<string> {
  try {
    const db = await getConnection();

    // Llamar al procedimiento almacenado
    const [rows]: any = await db.query('CALL RegistrarPrestamoLibro(?, ?, @resultado); SELECT @resultado as resultado;', [
      p_id_estudiante,
      p_id_libro,
    ]);

    const resultado = rows[1][0].resultado;
    await db.end();

    return resultado;
  } catch (error) {
    console.error('Error al registrar el préstamo:', error);
    return 'ERROR DEL SERVIDOR';
  }
}

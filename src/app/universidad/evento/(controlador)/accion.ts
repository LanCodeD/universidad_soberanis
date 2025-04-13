'use server';

import { getConnection } from '@/app/_lib/db';

export async function simularInscripcionEvento(evento_id: number): Promise<string> {
  try {
    const db = await getConnection();


    // Preparamos las variables
    await db.query('CALL SimularInscripcionEvento(?, @resultado)', [evento_id]);

    
    const [rows] = await db.query<any[]>('SELECT @resultado as mensaje');

    await db.end();

    // Accedemos al resultado del SELECT @resultado
    return rows[0]?.mensaje || 'Sin respuesta del servidor';
  } catch (error) {
    console.error('Error al simular inscripción:', error);
    return 'Error al simular la inscripción';
  }
}

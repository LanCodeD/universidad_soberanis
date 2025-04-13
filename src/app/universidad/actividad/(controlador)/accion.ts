'use server';

import { getConnection } from '@/app/_lib/db';

export async function registrarActividad(
  nombre: string,
  descripcion: string,
): Promise<string> {
  try {
    const db = await getConnection();

    await db.query('CALL RegistrarActividadExtracurricular(?, ?)', [nombre, descripcion]);

    await db.end();

    return 'Actividad registrada exitosamente.';
  } catch (error) {
    console.error('Error al registrar la actividad:', error);
    return 'Error al registrar la actividad.';
  }
}

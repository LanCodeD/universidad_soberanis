'use server';

import { getConnection } from '@/app/_lib/db';

export async function obtenerConteos() {
  const db = await getConnection();

  const [facultades] = await db.query('SELECT COUNT(*) AS total FROM facultades');
  const [departamentos] = await db.query('SELECT COUNT(*) AS total FROM departamentos');
  const [estudiantes] = await db.query('SELECT COUNT(*) AS total FROM estudiantes');

  await db.end();

  return {
    facultades: (facultades as any)[0].total,
    departamentos: (departamentos as any)[0].total,
    estudiantes: (estudiantes as any)[0].total,
  };
}

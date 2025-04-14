'use server';

import { getConnection } from '@/app/_lib/db';
import { RowDataPacket } from 'mysql2';

interface Actividad extends RowDataPacket {
  actividad_id: number;
  nombre: string;
  descripcion: string;
}

interface Profesor extends RowDataPacket {
    profesor_id: number;
    nombre: string;
    email: string;
}

interface Evento extends RowDataPacket {
    evento_id: number;
    nombre: string;
    descripcion: string;
}

interface Libro extends RowDataPacket {
    libro_id: number;
    titulo: string;
    cantidad_ejemplares: number;
}

export async function getUltimasActividades(): Promise<Actividad[]> {
  const db = await getConnection();
  const [rows] = await db.query<Actividad[]>(
    'SELECT actividad_id, nombre, descripcion FROM actividades ORDER BY actividad_id DESC LIMIT 5'
  );
  await db.end();
  return rows;
}

export async function getUltimosProfesores(): Promise<Profesor[]> {
    const db = await getConnection();
    const [rows] = await db.query<Profesor[]>(
      'SELECT profesor_id, nombre, email FROM profesores ORDER BY profesor_id DESC LIMIT 5'
    );
    await db.end();
    return rows;
}

export async function getUltimosEventos(): Promise<Evento[]> {
    const db = await getConnection();
    const [rows] = await db.query<Evento[]>(
      'SELECT evento_id, nombre, descripcion FROM eventos ORDER BY evento_id DESC LIMIT 5'
    );
    await db.end();
    return rows;
}

export async function getUltimosLibros(): Promise<Libro[]> {
    const db = await getConnection();
    const [rows] = await db.query<Libro[]>(
      'SELECT libro_id, titulo, cantidad_ejemplares FROM libros ORDER BY libro_id DESC LIMIT 5'
    );
    await db.end();
    return rows;
}
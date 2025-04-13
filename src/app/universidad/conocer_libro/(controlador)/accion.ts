'use server';

import { getConnection } from '@/app/_lib/db';
import { RowDataPacket } from 'mysql2';

export interface LibroPrestado extends RowDataPacket {
  libro_id: number;
  titulo: string;
  autor: string;
  total_prestamos: number;
}

export async function obtenerLibrosMasPrestados(): Promise<LibroPrestado[]> {
  try {
    const db = await getConnection();
    const [result] = await db.query<any[]>('CALL LibrosMasPrestadosUltimoSemestre()');
    const rows = result[0] as LibroPrestado[];
    await db.end();

    return rows;
  } catch (error) {
    console.error('Error al obtener libros más prestados:', error);
    return [];
  }
}

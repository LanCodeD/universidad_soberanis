'use server';

import { getConnection } from '@/app/_lib/db';
import { LibroProfesor, CursoNoAprobado, CursoProfesor,EstudiantesInscritos,FacultadDepartamento } from "@/app/types/subconsultas";


export async function obtenerEjercicio1(): Promise<LibroProfesor[]> {
  const db = await getConnection();
  const [rows] = await db.query<LibroProfesor[]>(`
    SELECT l.libro_id, l.titulo, 
           COALESCE(p.nombre, e.nombre) AS nombre_prestamista, 
           p.apellido, 
           p.titulo_academico
    FROM libros l
    LEFT JOIN prestamos pr ON pr.libro_id = l.libro_id
    LEFT JOIN profesores p ON pr.profesor_id = p.profesor_id
    LEFT JOIN estudiantes e ON pr.estudiante_id = e.estudiante_id
    WHERE EXISTS (
        SELECT 1
        FROM prestamos p1
        WHERE p1.libro_id = l.libro_id
          AND p1.profesor_id IS NOT NULL
    )
    AND NOT EXISTS (
        SELECT 1
        FROM prestamos p2
        WHERE p2.libro_id = l.libro_id
          AND p2.estudiante_id IS NOT NULL
    );
  `);
  await db.end();
  return rows;
}

export async function obtenerEjercicio2(): Promise<CursoNoAprobado[]> {
    const db = await getConnection();
    const [rows] = await db.query<CursoNoAprobado[]>(`
      SELECT c.curso_id, c.nombre, c.codigo
      FROM cursos c
      WHERE NOT EXISTS (
          SELECT 1
          FROM historial_academico ha
          WHERE ha.curso_id = c.curso_id
            AND ha.estado = 'aprobado'
      );
    `);
    await db.end();
    return rows;
}

export async function obtenerEjercicio3(): Promise<CursoProfesor[]> {
    const db = await getConnection();
    const [rows] = await db.query<CursoProfesor[]>(`
        SELECT p.profesor_id, p.nombre, p.apellido, GROUP_CONCAT(DISTINCT c.nombre SEPARATOR ', ') AS nombres_cursos
        FROM profesores p
        JOIN asignacion_profesores ap1 ON ap1.profesor_id = p.profesor_id
        JOIN horarios_cursos hc ON hc.horario_id = ap1.horario_id
        JOIN cursos c ON c.curso_id = hc.curso_id
        WHERE EXISTS (
            SELECT 1
            FROM asignacion_profesores ap1
            WHERE ap1.profesor_id = p.profesor_id
            AND NOT EXISTS (
                SELECT 1
                FROM asignacion_profesores ap2
                WHERE ap2.profesor_id != p.profesor_id
                    AND ap2.horario_id IN (
                        SELECT horario_id
                        FROM asignacion_profesores ap3
                        WHERE ap3.profesor_id = p.profesor_id
                    )
            )
        )
        GROUP BY p.profesor_id, p.nombre, p.apellido;
    `);
    await db.end();
    return rows;
}

export async function obtenerEjercicio4(): Promise<EstudiantesInscritos[]> {
    const db = await getConnection();
    const [rows] = await db.query<EstudiantesInscritos[]>(`
        SELECT c.curso_id, c.nombre,
            (SELECT COUNT(DISTINCT ha.estudiante_id)
                FROM historial_academico ha
                WHERE ha.curso_id = c.curso_id) AS numero_estudiantes
        FROM cursos c
        WHERE (
            SELECT COUNT(DISTINCT ha.estudiante_id)
            FROM historial_academico ha
            WHERE ha.curso_id = c.curso_id
        ) > (
            SELECT AVG(cantidad)
            FROM (
                SELECT COUNT(DISTINCT ha2.estudiante_id) AS cantidad
                FROM cursos c2
                JOIN historial_academico ha2 ON ha2.curso_id = c2.curso_id
                GROUP BY c2.curso_id
            ) AS sub
        );
    `);
    await db.end();
    return rows;
}

export async function obtenerEjercicio5(): Promise<FacultadDepartamento[]> {
    const db = await getConnection();
    const [rows] = await db.query<FacultadDepartamento[]>(`
        SELECT facultad_id, nombre, descripcion
        FROM facultades f
        WHERE EXISTS (
            SELECT 1
            FROM departamentos d
            WHERE d.facultad_id = f.facultad_id
        );
    `);
    await db.end();
    return rows;
}


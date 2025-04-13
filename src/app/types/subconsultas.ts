import { RowDataPacket } from 'mysql2';

export interface LibroProfesor extends RowDataPacket {
    libro_id: number;
    titulo: string;
    nombre_prestamista: string;
    apellido: string | null;
    titulo_academico: string | null;
  }

export interface CursoNoAprobado extends RowDataPacket {
    curso_id: number;
    nombre: string;
    codigo: string;
}

export interface CursoProfesor extends RowDataPacket{
    profesor_id: number;
    nombre: string;
    apellido: string;
    nombres_cursos: string | null;
}

export interface EstudiantesInscritos extends RowDataPacket{
    curso_id: number;
    nombre: string;
    numero_estudiantes: string | null;
}

export interface FacultadDepartamento extends RowDataPacket{
    facultad_id: number;
    nombre: string;
    descripcion: string;
}
export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

export interface Horario {
  dia: string;
  asignatura: string[];
}

export interface Asignatura {
  nombre: string;
  asistencias: number;
  inasistencias: number;
}

export interface Usuario {
  nomUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  tipoUsuario: string;
}

export interface IAsistencia {
  modulo: string;
  seccion: string;
  fecha: string;
  nombre_profesor: string;
  correo_profesor: string;
  alumnos: IAsistenciaAlumno[];
}

export interface IAsistenciaAlumno {
  nombre: string;
  correo: string;
  asistencia: string;
}

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
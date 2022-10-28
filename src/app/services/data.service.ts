import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { Horario } from '../interfaces/interfaces';
import { Asignatura } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getHorarioOpts() {
    return this.http.get<Horario[]>('/assets/data/horario.json');
  }

  getAsignaturas() {
    return this.http.get<Asignatura[]>('/assets/data/asignaturas.json');
  }
}

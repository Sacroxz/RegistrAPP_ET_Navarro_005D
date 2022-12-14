import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAsistencia, IAsistenciaAlumno } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(private http: HttpClient) { }

  listarAsistencias(): Observable<IAsistencia>{
    return this.http.get<IAsistencia>(`${environment.apiURL}/asistencias`);
  }

  crearAsistencia(newAsistencia: IAsistencia): Observable<IAsistencia>{
    return this.http.post<IAsistencia>(`${environment.apiURL}/asistencias`, newAsistencia);
  }

  getAsistencia(modulo: string): Observable<IAsistencia>{
    return this.http.get<IAsistencia>(`${environment.apiURL}/asistencias?modulo=${modulo}`);
  }

  updateAsistencia(asistencia: IAsistencia, id: number): Observable<IAsistencia>{
    return this.http.put<IAsistencia>(`${environment.apiURL}/asistencias/${id}`, asistencia);
  }

  // agregarAlumno(newAlumno: IAsistenciaAlumno, modulo): Observable<IAsistenciaAlumno>{
  //   return this.http.post<IAsistenciaAlumno>(`${environment.apiURL}/asistencias?modulo=${modulo}`, newAlumno);
  // }


}

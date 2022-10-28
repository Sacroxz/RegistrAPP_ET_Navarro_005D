import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  currentYear: number;

  constructor(private http: HttpClient) { }

  getFeriados() {
    return this.http.get('https://api.victorsanmartin.com/feriados/en.json');
  }
}

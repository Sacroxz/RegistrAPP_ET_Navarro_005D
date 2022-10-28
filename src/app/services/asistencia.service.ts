import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Asistencia {
  id: number;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario {
  nomUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  tipoUsuario: string;
}

const USER_KEY = 'usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private _storage: Storage;
  // eslint-disable-next-line @typescript-eslint/member-ordering, @typescript-eslint/consistent-type-assertions
  newUsuario: Usuario = <Usuario>{};

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  async addDatos(dato: Usuario): Promise<any> {
    return this.storage.get(USER_KEY).then((datos: Usuario[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(USER_KEY, datos);
      } else {
        return this.storage.set(USER_KEY, [dato]);
      }
    });
  }

  async getUsuarios(): Promise<Usuario[]> {
    return this.storage.get(USER_KEY);
  }



}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GlobaluserService {

  private userSubject = new Subject<Usuario>();

  publishUser(user: Usuario) {
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }
}

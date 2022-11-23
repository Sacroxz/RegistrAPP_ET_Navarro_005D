import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { GlobaluserService } from 'src/app/services/globaluser.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  nombre: string;
  tipoUsuario: string;

  componentes: Observable<Componente[]>;
  constructor(private dataService: DataService, private globalUser: GlobaluserService) {
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    this.nombre = localStorage.getItem('nomUsuario');
    this.tipoUsuario = localStorage.getItem('tipoUsuario');
    this.globalUser.getUser().subscribe(user => {
      this.nombre = user.nomUsuario;
      this.tipoUsuario = user.tipoUsuario;
    });
  }

  // menuOpened() {
  //   this.nombre = localStorage.getItem('nomUsuario');
  //   this.tipoUsuario = localStorage.getItem('tipoUsuario');
  // }

  logout() {
    localStorage.setItem('ingresado', 'false');
    localStorage.setItem('nomUsuario', null);
    localStorage.setItem('tipoUsuario', null);
    localStorage.setItem('correoUsuario', null);
  }
}

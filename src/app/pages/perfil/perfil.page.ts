import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  correo = localStorage.getItem('correoUsuario');
  tipo = localStorage.getItem('tipoUsuario');
  nombre = localStorage.getItem('nomUsuario');

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  logout() {
    localStorage.setItem('ingresado', 'false');
    localStorage.setItem('nomUsuario', null);
    localStorage.setItem('tipoUsuario', null);
    localStorage.setItem('correoUsuario', null);
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroService, Usuario } from 'src/app/services/registro.service';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  today: number;
  usuarios: Usuario[] | undefined;
  nombre: string | undefined;
  tipoUsuario: string | undefined;
  temp: number | undefined;

  constructor(private menuCtrl: MenuController, private climaService: ClimaService) {
    this.today = Date.now();

    this.climaService.getCurrentWeather().subscribe(resp => {
      this.temp = Math.round(resp['main']['temp']);
    })
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.nombre = localStorage.getItem('nomUsuario');
    this.tipoUsuario = localStorage.getItem('tipoUsuario');
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}

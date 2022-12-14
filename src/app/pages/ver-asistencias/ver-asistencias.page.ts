import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, NavController } from '@ionic/angular';
import { LoadingController, MenuController } from '@ionic/angular';
import { AsistenciasService } from 'src/app/services/asistencias.service';

@Component({
  selector: 'app-ver-asistencias',
  templateUrl: './ver-asistencias.page.html',
  styleUrls: ['./ver-asistencias.page.scss'],
})
export class VerAsistenciasPage implements OnInit {

  asistenciasJSON = [];
  nombre: string | undefined;
  tipoUsuario: string | undefined;
  correo: string | undefined;

  constructor(private asistencias: AsistenciasService, private navCtrl: NavController,
  private loadCtrl: LoadingController, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadAsistencias();
  }

  back() {
    this.navCtrl.back();
  }

  ionViewWillEnter() {
    this.nombre = localStorage.getItem('nomUsuario');
    this.tipoUsuario = localStorage.getItem('tipoUsuario');
    this.correo = localStorage.getItem('correoUsuario');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  async loadAsistencias(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadCtrl.create({
      message: 'Cargando asistencias...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.asistencias.listarAsistencias().subscribe(
      (data) => {
        console.log(data);
        loading.dismiss();
        const listString = JSON.stringify(data);
        this.asistenciasJSON = JSON.parse(listString);
        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.log(error);
        loading.dismiss();
      }
    );
  }

}

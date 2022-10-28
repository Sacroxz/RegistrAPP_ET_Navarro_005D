import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Asignatura } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  asignaturas: Observable<Asignatura[]>;

  constructor(private alertController: AlertController, private menuCtrl: MenuController, private dataService: DataService) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Unirse a un Curso',

      cssClass: 'custom-alert',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Codigo del Curso',
        }
      ],
    });

    await alert.present();
  }
  ngOnInit() {
    this.asignaturas = this.dataService.getAsignaturas();
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}

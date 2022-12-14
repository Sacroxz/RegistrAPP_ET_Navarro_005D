import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { Componente, IAsistencia } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AsistenciasService } from 'src/app/services/asistencias.service';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit, OnDestroy {

  componentes: Componente[] = [];
  asistenciasJSON: IAsistencia[] = [];
  nombreUsuario = localStorage.getItem('nomUsuario');
  correoUsuario = localStorage.getItem('correoUsuario');

  constructor(private menuCtrl: MenuController,
    private loadingCtrl: LoadingController, private router: Router, private navCtrl: NavController,
    private asistenciasService: AsistenciasService) {
      this.startScan();
  }

  back() {
    this.stopScan();
    this.navCtrl.back();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  async showLoading(result) {
    const loading = await this.loadingCtrl.create({
      message: 'Registrando tu asistencia...',
    });
    this.stopScan();
    this.asistenciasService.listarAsistencias().subscribe(
      (data) => {
        const listString = JSON.stringify(data);
        this.asistenciasJSON = JSON.parse(listString);
        loading.dismiss();
        const content = JSON.parse(result.content);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        console.log('Content: ', content);
        console.log('Content modulo: ', content[0].modulo);
        this.asistenciasJSON.map((a)=> {
          if (a.modulo === content[0].modulo && a.seccion === content[0].seccion && a.fecha === content[0].fecha) {
            //TODO: AGREGAR ALUMNO

            a.alumnos.push({nombre: this.nombreUsuario, correo: this.correoUsuario, asistencia: 'Presente'});
            console.log('Updated asistencia: ', JSON.stringify(a));
            this.asistenciasService.updateAsistencia(a, content[0].id).subscribe(
              (dat) => {
                console.log('Asistencia registrada');
              }
            );
          }
        });
      },
      (error) => {
        console.log(error);
        loading.dismiss();
      }
    );
    loading.onDidDismiss().then(() => this.pushToNextScreenWithParams('/asistencia-registrada', result.content));
    loading.present();
  }

  pushToNextScreenWithParams(pageUrl: string, params: any) {
    this.navCtrl.navigateForward(pageUrl, {state: params});
  }

  startScan = async () => {
      await BarcodeScanner.checkPermission({ force: true });
      BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      const result = await BarcodeScanner.startScan();

      if (!result.hasContent) {
        return;
      } else {
        console.log(result);
        this.showLoading(result);
        document.querySelector('body').classList.remove('scanner-active');
      }
  };

  stopScan = () => {
    try {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    } catch (err) {
      console.log('Not implemented in web');
    }
    document.querySelector('body').classList.remove('scanner-active');
  };
}

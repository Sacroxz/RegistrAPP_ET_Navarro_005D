import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit, OnDestroy {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController,
    private loadingCtrl: LoadingController, private router: Router, private navCtrl: NavController) {
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

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Registrando tu asistencia...',
      duration: 2000,
    });

    loading.onDidDismiss().then(() => this.router.navigate(['/asistencia-registrada']));

    loading.present();
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
        this.showLoading();
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

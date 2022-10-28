import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController, private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
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
  onDidDismiss() {
    console.log('hi');
  }
  loaded() {
    console.log('hi');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-qr-create',
  templateUrl: './qr-create.page.html',
  styleUrls: ['./qr-create.page.scss'],
})
export class QrCreatePage implements OnInit {
  formularioQR: FormGroup;

  constructor(private loadingCtrl: LoadingController, private router: Router, private fb: FormBuilder) {
    this.formularioQR = this.fb.group({
        codigo: new FormControl('', Validators.compose(
        [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^\S+$/)
        ]
        )),
        clave: new FormControl('', Validators.compose(
          [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^\S+$/)
          ]
        ))
    });
  }

  ngOnInit() {
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Generando el codigo...',
      duration: 2000,
    });
    loading.onDidDismiss().then(() => this.router.navigate(['/qrcode']));
    loading.present();
  }
}

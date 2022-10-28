import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {
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


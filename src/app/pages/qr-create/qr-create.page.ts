import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IAsistencia } from 'src/app/interfaces/interfaces';
import { AsistenciasService } from 'src/app/services/asistencias.service';
@Component({
  selector: 'app-qr-create',
  templateUrl: './qr-create.page.html',
  styleUrls: ['./qr-create.page.scss'],
})
export class QrCreatePage implements OnInit {
  formularioQR: FormGroup;

  nombreUsuario: string | undefined;
  correoUsuario: string | undefined;

  newAsistencia: IAsistencia = {
    // id: 0,
    modulo: '',
    seccion: '',
    fecha: '',
    nombre_profesor: '',
    correo_profesor: '',
    alumnos: []
  };

  nuevaAsistencia: IAsistencia;

  asistenciaJSON: string;

  constructor(private asistencia: AsistenciasService, private loadingCtrl: LoadingController,
    private router: Router, private fb: FormBuilder, public nav: NavController) {
    this.formularioQR = this.fb.group({
        // id: 1,
        modulo: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^\S{7}$/)
        ])),
        seccion: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^\S{4}$/)
        ])),
        fecha: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^\S{10}$/)
        ])),
        nombre_profesor: localStorage.getItem('nomUsuario'),
        correo_profesor: localStorage.getItem('correoUsuario'),
        asistencia: []
    });
  }

  ngOnInit() {
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Generando el codigo...',
      duration: 2000,
    });
    loading.onDidDismiss().then(() => this.crearAsistencia());

    loading.present();
  }

  async crearAsistencia() {
    // this.newAsistencia.id = 4;
    this.newAsistencia.nombre_profesor = localStorage.getItem('nomUsuario');
    this.newAsistencia.correo_profesor = localStorage.getItem('correoUsuario');
    this.asistencia.crearAsistencia(this.newAsistencia).subscribe(res => {
      console.log(res);
      this.asistencia.getAsistencia(this.newAsistencia.modulo).subscribe(
        (data) => {
          this.nuevaAsistencia = data;
          this.pushToNextScreenWithParams('/qr-created', this.nuevaAsistencia);
        }
      );
    });
  }

  // createClass() {
  //   fetch('https://json-server-registrapp.vercel.app/asistencias', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(this.formularioQR.value)
  //   })
  //   .then(res => {
  //     console.log(res);
  //     this.pushToNextScreenWithParams('/qr-created', this.formularioQR.value);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  pushToNextScreenWithParams(pageUrl: string, params: any) {
    this.nav.navigateForward(pageUrl, {state: params});
  }
}


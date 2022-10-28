import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroService, Usuario } from 'src/app/services/registro.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin: FormGroup;
  usuarios: Usuario[];

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroService,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController) {
                this.formularioLogin = this.fb.group({
                  correo: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                  ])),
                  password: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.minLength(6)
                  ]))
                });
              }
  
  async ingresar(){
    const f = this.formularioLogin.value;
    let a = 0;
    this.registroService.getUsuarios().then(datos => {
      this.usuarios = datos;
      if (datos.length === 0) {
        return null;
      }
      console.log(this.usuarios);
      for (const obj of this.usuarios) {
        if (obj.correoUsuario === f.correo && obj.passUsuario === f.password) {
          a = 1;
          localStorage.setItem('ingresado', 'true');
          localStorage.setItem('tipoUsuario', obj.tipoUsuario);
          localStorage.setItem('nomUsuario', obj.nomUsuario);
          localStorage.setItem('correoUsuario', obj.correoUsuario);
          this.navController.navigateForward('/inicio');
        }
      }
      // for (let obj of this.usuarios){
      //   if (obj.correoUsuario === f.correo && obj.passUsuario === f.password){
      //     a = 1;
      //     console.log('Ingresado');
      //     localStorage.setItem('ingresado', 'true');
      //     this.navController.navigateRoot('inicio');
      //   }
      // }
      console.log(a);
      if (a === 0) {
        this.alertMsg();
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Ingresando...',
      duration: 1000,
      cssClass: 'custom-loading'
    });
    await loading.present();
    loading.onDidDismiss().then(() => this.ingresar());
  }


  async alertMsg() {
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados no son correctos',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return ;
  }

}

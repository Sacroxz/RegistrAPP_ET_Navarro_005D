import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroService, Usuario } from 'src/app/services/registro.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  newUsuario: Usuario = <Usuario>{};
  mail: boolean | undefined;

  constructor(private registroService: RegistroService,
              private alertController: AlertController,
              private toastController: ToastController,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController) {
              this.formularioRegistro = this.fb.group({
                
                nombre: new FormControl('', Validators.compose([
                  Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(20),
                  Validators.pattern('^[a-zA-Z]+$')
                ])),
                correo: new FormControl('', Validators.compose([
                  Validators.required,
                  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                ])),
                password: new FormControl('', Validators.compose([
                  Validators.required,
                  Validators.minLength(6)
                ])),
                tipo: new FormControl('', Validators.required)
                // confirmPass: new FormControl('', Validators.required)
              });
            }

  ngOnInit() {
  }
    
  async crearUsuario() {
    const form = this.formularioRegistro.value;

    await this.validarCorreo(form);
    if (this.mail) {
      const alert = await this.alertController.create({
        header: 'Correo ya existe',
        message: 'El correo ya tiene una cuenta asociada',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes completar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
  }


  this.newUsuario.nomUsuario = form.nombre;
  this.newUsuario.correoUsuario = form.correo;
  this.newUsuario.passUsuario = form.password;
  this.newUsuario.tipoUsuario = form.tipo;
  // this.newUsuario.repassUsuario = form.confirmPass;

  this.registroService.addDatos(this.newUsuario).then(datos => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    localStorage.setItem('ingresado', 'true');
    localStorage.setItem('tipoUsuario', this.newUsuario.tipoUsuario);
    localStorage.setItem('nomUsuario', this.newUsuario.nomUsuario);
    localStorage.setItem('correoUsuario', this.newUsuario.correoUsuario);

    this.newUsuario = <Usuario>{};
    this.navCtrl.navigateRoot('/inicio', {animated: true});
  });
  
  }
  
  async validarCorreo(form) {
    await this.registroService.getUsuarios().then(usuarios => {
      if (usuarios) {
        for (let usuario of usuarios) {
          if (form.correo === usuario.correoUsuario) {
            this.mail = true;
            return;
          } else {
            this.mail = false;
          }
        }
      }
    })
  }
  
  async showToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Ingresando...',
      duration: 1000,
      cssClass: 'custom-loading'
    });
    await loading.present();
    loading.onDidDismiss().then(() => this.crearUsuario());
  }

}

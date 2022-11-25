import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EstudianteGuard } from './guards/estudiante.guard';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { ProfesorGuard } from './guards/profesor.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
    .then( m => m.HomePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
    .then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module')
    .then( m => m.RegisterPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module')
    .then( m => m.ScannerPageModule),
    canActivate: [IngresadoGuard, EstudianteGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module')
    .then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module')
    .then( m => m.PerfilPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'asistencia-registrada',
    loadChildren: () => import('./pages/asistencia-registrada/asistencia-registrada.module')
    .then( m => m.AsistenciaRegistradaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'qr-create',
    loadChildren: () => import('./pages/qr-create/qr-create.module').then( m => m.QrCreatePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'qr-created',
    loadChildren: () => import('./pages/qr-created/qr-created.module').then( m => m.QrCreatedPageModule),
    canActivate: [IngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

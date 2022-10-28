import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaRegistradaPage } from './asistencia-registrada.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaRegistradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaRegistradaPageRoutingModule {}

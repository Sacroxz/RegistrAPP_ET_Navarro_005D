import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionCursoPage } from './descripcion-curso.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionCursoPageRoutingModule {}

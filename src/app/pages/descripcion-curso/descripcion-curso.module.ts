import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionCursoPageRoutingModule } from './descripcion-curso-routing.module';

import { DescripcionCursoPage } from './descripcion-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionCursoPageRoutingModule
  ],
  declarations: [DescripcionCursoPage]
})
export class DescripcionCursoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaRegistradaPageRoutingModule } from './asistencia-registrada-routing.module';

import { AsistenciaRegistradaPage } from './asistencia-registrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaRegistradaPageRoutingModule
  ],
  declarations: [AsistenciaRegistradaPage]
})
export class AsistenciaRegistradaPageModule {}

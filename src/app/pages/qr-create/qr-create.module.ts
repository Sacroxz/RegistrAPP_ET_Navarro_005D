import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneraqrPageRoutingModule } from './qr-create-routing.module';

import { QrCreatePage } from './qr-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GeneraqrPageRoutingModule
  ],
  declarations: [QrCreatePage]
})
export class QrCreatePageModule {}

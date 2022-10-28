import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneraqrPageRoutingModule } from './generaqr-routing.module';

import { GeneraqrPage } from './generaqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GeneraqrPageRoutingModule
  ],
  declarations: [GeneraqrPage]
})
export class GeneraqrPageModule {}

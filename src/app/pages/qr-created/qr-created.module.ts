import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCreatedPageRoutingModule } from './qr-created-routing.module';

import { QrCreatedPage } from './qr-created.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCreatedPageRoutingModule
  ],
  declarations: [QrCreatedPage]
})
export class QrCreatedPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCreatedPageRoutingModule } from './qr-created-routing.module';

import { QrCreatedPage } from './qr-created.page';

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    QrCreatedPageRoutingModule
  ],
  declarations: [QrCreatedPage]
})
export class QrCreatedPageModule {}

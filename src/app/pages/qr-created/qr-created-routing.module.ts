import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCreatedPage } from './qr-created.page';

const routes: Routes = [
  {
    path: '',
    component: QrCreatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCreatedPageRoutingModule {}

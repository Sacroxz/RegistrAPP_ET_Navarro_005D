import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './pages/login/login-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  imports:
    [BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'mydb',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    LoginPageRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

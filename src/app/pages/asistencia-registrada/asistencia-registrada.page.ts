import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia-registrada',
  templateUrl: './asistencia-registrada.page.html',
  styleUrls: ['./asistencia-registrada.page.scss'],
})
export class AsistenciaRegistradaPage implements OnInit {

  pageName: any;
  parsedPageName: any;

  constructor(public router: Router) {
    if (router.getCurrentNavigation().extras.state) {
      this.pageName = this.router.getCurrentNavigation().extras.state;
      this.parsedPageName = JSON.parse(this.pageName);
      console.log(this.pageName);
      console.log(this.parsedPageName);
      // eslint-disable-next-line @typescript-eslint/dot-notation, @typescript-eslint/quotes
      console.log('Modulo: ', this.pageName["modulo"]);
      }
    }

  ngOnInit() {
  }

}

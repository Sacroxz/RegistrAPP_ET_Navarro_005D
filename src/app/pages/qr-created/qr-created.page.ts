import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAsistencia } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-qr-created',
  templateUrl: './qr-created.page.html',
  styleUrls: ['./qr-created.page.scss'],
})
export class QrCreatedPage implements OnInit {

  pageName: string;

  constructor(public router: Router) {
    if (router.getCurrentNavigation().extras.state) {
      this.pageName = JSON.stringify(this.router.getCurrentNavigation().extras.state);
      console.log(this.pageName);
    }
  }

  ngOnInit() {
  }

}

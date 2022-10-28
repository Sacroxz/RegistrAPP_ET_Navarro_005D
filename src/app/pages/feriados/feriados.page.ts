import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FeriadosService } from 'src/app/services/feriados.service';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriado: any;

  constructor(private feriados: FeriadosService, private menuCtrl: MenuController) {
    this.feriados.getFeriados().subscribe(data => {
      this.feriado = data['data'];
      console.log(this.feriado['data']);
    }
    )
    
   }

  ngOnInit() {
    
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

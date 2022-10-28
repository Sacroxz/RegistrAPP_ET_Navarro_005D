import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  
  horario: Observable<Horario[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.horario = this.dataService.getHorarioOpts();
  }

}

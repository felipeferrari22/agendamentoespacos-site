import { Component, OnInit } from '@angular/core';
import { Visualizar } from './visualizar';
import { VisualizarService } from './visualizar.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  exibiragendamentos:Visualizar[]=[];

  constructor(private service: VisualizarService) { }

  ngOnInit(): void {
    this.service.visualizarAgendamentos().subscribe((event)=> {
      this.exibiragendamentos = event.agendamentos as Visualizar[]
      console.log(event)
    })
  }

}

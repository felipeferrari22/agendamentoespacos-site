import { Component, OnInit } from '@angular/core';
import { SolicitacoesConfirmadasService } from './solicitacoes-confirmadas.service';
import { SolicitacoesConfirmadas } from './solicitacoes-confirmadas';

@Component({
  selector: 'app-solicitacoes-confirmadas',
  templateUrl: './solicitacoes-confirmadas.component.html',
  styleUrls: ['./solicitacoes-confirmadas.component.scss']
})
export class SolicitacoesConfirmadasComponent implements OnInit {
  exibirsolicitacoesconfirmadas:SolicitacoesConfirmadas[]=[];
  constructor(private service: SolicitacoesConfirmadasService) { }

  ngOnInit(): void {
    this.service.listarSolicitacoesConfirmadas().subscribe((event)=> {
      this.exibirsolicitacoesconfirmadas = event.agendamentos as SolicitacoesConfirmadas[]
      console.log(event)
    })
  }
  
}
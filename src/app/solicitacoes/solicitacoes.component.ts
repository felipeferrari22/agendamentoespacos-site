import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAceitarComponent } from '../modal-aceitar/modal-aceitar.component';
import { Solicitacoes } from './solicitacoes';
import { SolicitacoesService } from './solicitacoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {

  exibirsolicitacoes:Solicitacoes[]=[];

  constructor(private modalcontroler:ModalController, private service: SolicitacoesService, ) { }
  
  async openModal_aceitar(solicitacao:Solicitacoes){

    const modal = await this.modalcontroler.create({
      component: ModalAceitarComponent, 
      componentProps: {
        solicitacao: solicitacao,
      },
      cssClass: 'modal_aceitar'
    });
    await modal.present();
    if(await modal.onDidDismiss()) {
      this.ngOnInit()
    }
  }

  ngOnInit(): void {
    this.service.listarSolicitacoes().subscribe((event)=> {
      this.exibirsolicitacoes = event.solicitacoes as Solicitacoes[]
      console.log(event)
    })
  }

}

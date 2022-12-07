import { Component, OnInit } from '@angular/core';
import { Solicitacoes } from './solicitacoes';
import { NavParams } from '@ionic/angular';
import { ModalAceitarService } from './modal-aceitar.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-aceitar',
  templateUrl: './modal-aceitar.component.html',
  styleUrls: ['./modal-aceitar.component.scss']
})
export class ModalAceitarComponent implements OnInit {
  
  constructor(private modalcontroler:ModalController, public navParams: NavParams, private service: ModalAceitarService) { }

  exibirSolicitacao:Solicitacoes = this.navParams.get('solicitacao')

  ngOnInit(): void {
  }

  fecharModal(): void {
    this.modalcontroler.dismiss() //Fecha o Modal
  }

  funcaoNot(): void {
    this.service.funcaoNot(this.exibirSolicitacao.id).subscribe((event) => {
      console.log(event)

      // Sucesso
      if(event.message === "Solicitação removida com sucesso") {
        this.fecharModal()
      }
    })
  }

  funcaoYes(): void {
    this.service.funcaoYes(this.exibirSolicitacao.id).subscribe((event) => {
      console.log(event)

      // Sucesso
      if(event.message === "Solicitação aprovada") {
        this.fecharModal()
      }
    })
  }
} 
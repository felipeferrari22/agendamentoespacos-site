import { Component, OnInit, ElementRef } from '@angular/core';
import { Solicitantes } from './solicitantes';
import { NavParams } from '@ionic/angular';
import { ModalDeletarService } from './modal-deletar.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-deletar',
  templateUrl: './modal-deletar.component.html',
  styleUrls: ['./modal-deletar.component.scss']
})
export class ModalDeletarComponent implements OnInit {

  constructor(private modalcontroler:ModalController, public navParams: NavParams, private service: ModalDeletarService) { }

  exibirSolicitante:Solicitantes = this.navParams.get('solicitante')

  ngOnInit(): void {
  }

  fecharModal(): void {
    this.modalcontroler.dismiss() //Fecha o Modal
  }

  deletarUsuario(): void {
    this.service.deletarUsuario(this.exibirSolicitante.id).subscribe((event) => {
      console.log(event)

      // Solicitante
      if(event.message === "Solicitante removido") {
        this.fecharModal()
      }
    })
  }

}

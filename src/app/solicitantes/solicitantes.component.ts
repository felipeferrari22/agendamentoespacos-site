import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDeletarComponent } from '../modal-deletar/modal-deletar.component';
import { Solicitantes } from './solicitantes';
import { SolicitantesService } from './solicitantes.service';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.scss']
})
export class SolicitantesComponent implements OnInit {
  exibirsolicitantes:Solicitantes[]=[];
  constructor(private modalcontroler:ModalController, private service: SolicitantesService) { }
  
  async openModal_deletar(solicitante:Solicitantes){

    const modal = await this.modalcontroler.create({
      component: ModalDeletarComponent,
      componentProps: {
        solicitante: solicitante,
      },
      cssClass: 'modal_deletar'
    });
    await modal.present();
    // Recarrega a página ao fechar o modal
    if(await modal.onDidDismiss()) {
      this.ngOnInit()
    }

  }

  ngOnInit(): void {
    this.service.listarSolicitantes().subscribe((event)=> {
      this.exibirsolicitantes = event.usuarios as Solicitantes[]
      console.log(event)
    })
  }

}

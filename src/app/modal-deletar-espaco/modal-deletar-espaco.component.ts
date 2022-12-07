import { Component, OnInit } from '@angular/core';
import { Espacos } from './espacos';
import { NavParams } from '@ionic/angular';
import { ModalDeletarEspacosService } from './modal-deletar-espaco.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-deletar-espaco',
  templateUrl: './modal-deletar-espaco.component.html',
  styleUrls: ['./modal-deletar-espaco.component.scss']
})
export class ModalDeletarEspacoComponent implements OnInit {

  constructor(private modalcontroler:ModalController, public navParams: NavParams, private service: ModalDeletarEspacosService) { }

  exibirEspaco:Espacos = this.navParams.get('espaco')

  ngOnInit(): void {

  }

  fecharModal(): void {
    this.modalcontroler.dismiss() //Fecha o Modal
  }

  deletarEspaco(): void {
    this.service.deletarEspaco(this.exibirEspaco.id).subscribe((event) => {
      console.log(event)

      // Solicitante
      if(event.message === "Espaço removido com sucesso") {
        this.fecharModal()
      }
    })
  }

}

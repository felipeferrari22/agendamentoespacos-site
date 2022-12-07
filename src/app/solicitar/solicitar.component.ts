import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Modal1Component } from '../modal1/modal1.component';
import { SolicitarService } from './solicitar.service';
import { Espaco } from './espaco';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss']
})

export class SolicitarComponent implements OnInit {
  espacos: Espaco[] = []
  espacoSelecionado: string = "0"
  data: string = ""
  horario_entrada: string = ""
  horario_saida: string = ""
  descricao: string = ""
  constructor(private modalcontroler:ModalController, private solicitarService: SolicitarService) { }

  async openModal1(){
    const modal = await this.modalcontroler.create({
      component: Modal1Component, 
      cssClass: 'modal1'
    });
    await modal.present();
    const res = await modal.onDidDismiss();
  }

  ngOnInit(): void {
    this.solicitarService.listarEspacos().subscribe((event) => {
      this.espacos = event.espaco
    })
  } 

  solicitar(): void{

    // Verifica se os dados inseridos são válidos
    if(parseInt(this.espacoSelecionado) <= 0
    || this.data == ""
    || this.horario_entrada == ""
    || this.horario_saida == ""
    || this.descricao == "")
    return;


    this.solicitarService.solicitar(
      parseInt(this.espacoSelecionado),
      this.data, 
      this.horario_entrada,
      this.horario_saida, 
      this.descricao
    ).subscribe((event) => {
      console.log(event)

      // Sucesso
      if(event.message === "Solicitação realizada") {

        // Reset dos Inputs
        this.espacoSelecionado = "0"
        this.data = "" 
        this.horario_entrada = ""
        this.horario_saida = "" 
        this.descricao = ""

        // Abre o modal de confirmação
        this.openModal1()
      }
    })
  }
}

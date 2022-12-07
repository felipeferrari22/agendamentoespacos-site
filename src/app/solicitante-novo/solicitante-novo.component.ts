import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal2Component } from '../modal2/modal2.component';
import { Solicitante } from './solicitante-novo';
import { SolicitanteNovoService } from './solicitante-novo.service';

@Component({
  selector: 'app-solicitante-novo',
  templateUrl: './solicitante-novo.component.html',
  styleUrls: ['./solicitante-novo.component.scss']
})
export class SolicitanteNovoComponent implements OnInit {

  solicitante:Solicitante = {
    nome: "",
    email: "",
    empresa: "",
    senha: "",
    cargo: "",
    telefone: ""
  }

  constructor(private modalcontroler:ModalController, private service: SolicitanteNovoService) { }
  async openModal2(){
    const modal = await this.modalcontroler.create({
      component: Modal2Component,
      cssClass: 'modal1'
    });
    await modal.present();
    const res = await modal.onDidDismiss();
  }

  ngOnInit(): void {

  } 

  cadastrarSolicitante(): void {

    // Valida se os inputs estão preenchidos
    if(this.solicitante.nome === ""
    ||this.solicitante.email === ""
    ||this.solicitante.empresa === ""
    ||this.solicitante.senha === ""
    ||this.solicitante.cargo === ""
    ||this.solicitante.telefone === "")
    return;

    this.service.cadastrarSolicitante(this.solicitante).subscribe((event) => {
      console.log(event)

      // Sucesso
      if(event.message === "Usuário Cadastrado") {

        // Reset dos Inputs
        this.solicitante.nome = ""
        this.solicitante.email = ""
        this.solicitante.empresa = ""
        this.solicitante.senha = ""
        this.solicitante.cargo = ""
        this.solicitante.telefone = ""

        // Abre o modal de confirmação
        this.openModal2()
      }
    })
  }
}

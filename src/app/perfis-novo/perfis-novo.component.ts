import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal3Component } from '../modal3/modal3.component';
import { Perfil } from './perfil';
import { PerfisNovoService } from './perfis-novo.service';
@Component({
  selector: 'app-perfis-novo',
  templateUrl: './perfis-novo.component.html',
  styleUrls: ['./perfis-novo.component.scss']
})
export class PerfisNovoComponent implements OnInit {

  perfil:Perfil = {
    nome: "",
    email: "",
    empresa: "",
    senha: "",
    telefone: ""
  }

  constructor(private modalcontroler:ModalController, private service: PerfisNovoService) { }
  async openModal3(){
    const modal = await this.modalcontroler.create({
      component: Modal3Component,
      cssClass: 'modal3'
    });
    await modal.present();
    const res = await modal.onDidDismiss();
  }

  ngOnInit(): void {

  }

  cadastrarPerfil(): void {

    if(this.perfil.nome === ""
    ||this.perfil.email === ""
    ||this.perfil.empresa === ""
    ||this.perfil.senha === ""
    ||this.perfil.telefone === "")
    return;

    this.service.cadastrarPerfil(this.perfil).subscribe((event) => {
      console.log(event)

      // Sucesso
      if(event.message === "Administrador Cadastrado") {

        // Reset dos Inputs
        this.perfil.nome = ""
        this.perfil.email = ""
        this.perfil.empresa = ""
        this.perfil.senha = ""
        this.perfil.telefone = ""

        // Abre o modal de confirmação
        this.openModal3()
      }
    })
  }
}

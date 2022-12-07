import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';
import { SolicitanteNovoComponent } from './solicitante-novo/solicitante-novo.component';
import { PerfisComponent } from './perfis/perfis.component';
import { PerfisNovoComponent } from './perfis-novo/perfis-novo.component';
import { EspacosComponent } from './espacos/espacos.component';
import { EspacosNovoComponent } from './espacos-novo/espacos-novo.component';
import { RouteReuseStrategy } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Modal1Component } from './modal1/modal1.component';
import { Modal2Component } from './modal2/modal2.component';
import { Modal3Component } from './modal3/modal3.component';
import { Modal4Component } from './modal4/modal4.component';
import { ModalAceitarComponent } from './modal-aceitar/modal-aceitar.component';
import { ModalDeletarComponent } from './modal-deletar/modal-deletar.component';
import { ModalDeletarEspacoComponent } from './modal-deletar-espaco/modal-deletar-espaco.component';
import { SolicitacoesConfirmadasComponent } from './solicitacoes-confirmadas/solicitacoes-confirmadas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavParams } from '@ionic/angular';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolicitarComponent,
    VisualizarComponent,
    SolicitacoesComponent,
    SolicitantesComponent,
    SolicitanteNovoComponent,
    PerfisComponent,
    PerfisNovoComponent,
    EspacosComponent,
    EspacosNovoComponent,
    Modal1Component,
    Modal2Component,
    Modal3Component,
    Modal4Component,
    ModalAceitarComponent,
    ModalDeletarComponent,
    ModalDeletarEspacoComponent,
    SolicitacoesConfirmadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }

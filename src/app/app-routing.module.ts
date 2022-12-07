import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacosNovoComponent } from './espacos-novo/espacos-novo.component';
import { EspacosComponent } from './espacos/espacos.component';
import { LoginComponent } from './login/login.component';
import { PerfisNovoComponent } from './perfis-novo/perfis-novo.component';
import { PerfisComponent } from './perfis/perfis.component';
import { SolicitacoesConfirmadasComponent } from './solicitacoes-confirmadas/solicitacoes-confirmadas.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { SolicitanteNovoComponent } from './solicitante-novo/solicitante-novo.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'solicitar', component: SolicitarComponent},
  { path: 'visualizar', component: VisualizarComponent},
  { path: 'solicitacoes', component: SolicitacoesComponent},
  { path: 'solicitantes', component: SolicitantesComponent},
  { path: 'solicitante-novo', component: SolicitanteNovoComponent},
  { path: 'perfis', component: PerfisComponent},
  { path: 'perfis-novo', component: PerfisNovoComponent},
  { path: 'espacos', component: EspacosComponent  },
  { path: 'espacos-novo', component: EspacosNovoComponent},
  { path: 'solicitacoes-confirmadas', component: SolicitacoesConfirmadasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

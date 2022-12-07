import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const API = environment.API

@Injectable({
  providedIn: 'root'
})
export class ModalAceitarService {
  private readonly API_AprovarSolicitacoes=`${API}/AprovarSolicitacoes`;
  private readonly API_DeletarSolicitacoes=`${API}/DeletarSolicitacoes`;
  constructor(private http: HttpClient) { }

  funcaoYes(idSolicitacao: number):Observable<any>{
    const token = JSON.parse(localStorage.getItem('accessToken')!)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token['accessToken']}`,
      'auth': token['accessToken']
    })

    return this.http.put<any>(`${this.API_AprovarSolicitacoes}/${idSolicitacao}`, {}, {headers})
  }

  funcaoNot(idSolicitacao: number):Observable<any>{
    const token = JSON.parse(localStorage.getItem('accessToken')!)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token['accessToken']}`,
      'auth': token['accessToken']
    })
    
    return this.http.delete<any>(`${this.API_DeletarSolicitacoes}/${idSolicitacao}`, {headers})
  }
}

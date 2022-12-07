import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class SolicitarService {
  private readonly API_SolicitarAgendamento=`${API}/SolicitarAgendamento`;
  private readonly API_BuscarEspacos=`${API}/BuscarEspacos`;
  constructor(private http: HttpClient) { }

  solicitar(espacoSelecionado:number, data:string, horario_entrada:string, horario_saida:string, descricao:string):Observable<any>{
    const token = JSON.parse(localStorage.getItem('accessToken')!)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token['accessToken']}`,
      'auth': token['accessToken']
    })
    return this.http.post<any>(this.API_SolicitarAgendamento, {
      espaco_id: espacoSelecionado, 
      data: data, 
      horario_entrada: horario_entrada, 
      horario_saida: horario_saida, 
      descricao: descricao
      }, {headers})
  }

  listarEspacos():Observable<any>{
    const token = JSON.parse(localStorage.getItem('accessToken')!)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token['accessToken']}`,
      'auth': token['accessToken']
    })
    return this.http.get<any>(this.API_BuscarEspacos, { headers })
  }
  
}

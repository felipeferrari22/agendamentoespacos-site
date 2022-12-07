import { Injectable } from '@angular/core';
import { Perfil } from './perfil';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class PerfisNovoService {
  private readonly API=`${API}/CadastroPerfil`;

  constructor(private http: HttpClient) { }

  cadastrarPerfil(perfil:Perfil):Observable<any>{
    const token = JSON.parse(localStorage.getItem('accessToken')!)
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token['accessToken']}`,
            'auth': token['accessToken']
        })

        return this.http.post<any>(this.API, {
            nome: perfil.nome,
            email: perfil.email,
            empresa: perfil.empresa,
            senha: perfil.senha,
            telefone: perfil.telefone
        }, {headers})
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitante } from './solicitante-novo';

const API = environment.API;

@Injectable({
    providedIn: 'root'
})

export class SolicitanteNovoService {
    private readonly API=`${API}/CadastroSolicitante`;
    constructor(private http: HttpClient) { }

    cadastrarSolicitante(solicitante:Solicitante):Observable<any>{
        const token = JSON.parse(localStorage.getItem('accessToken')!)
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token['accessToken']}`,
            'auth': token['accessToken']
        })

        return this.http.post<any>(this.API, {
            nome: solicitante.nome,
            email: solicitante.email,
            empresa: solicitante.empresa,
            senha: solicitante.senha,
            cargo: solicitante.cargo,
            telefone: solicitante.telefone
        }, {headers})
    }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Espaco } from './espaco';

const API = environment.API;

@Injectable({
    providedIn: 'root'
})

export class EspacosNovoService {
    private readonly API=`${API}/CadastroEspaco`;
    constructor(private http: HttpClient) { }

    cadastrarEspaco(espaco:Espaco):Observable<any>{
        const token = JSON.parse(localStorage.getItem('accessToken')!)
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token['accessToken']}`,
            'auth': token['accessToken']
        })

        return this.http.post<any>(this.API, {
            nome: espaco.nome,
            ponto_referencia: espaco.ponto_referencia,
            descricao: espaco.descricao,
        }, {headers})
    }
}

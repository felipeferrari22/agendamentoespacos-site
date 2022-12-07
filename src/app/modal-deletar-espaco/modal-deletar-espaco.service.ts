import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, map } from 'rxjs';

const API = environment.API;

@Injectable({
    providedIn: 'root'
})
export class ModalDeletarEspacosService {
    private readonly API=`${API}/DeletarEspacos`;
    constructor(private http: HttpClient) { }

    deletarEspaco(idEspaco: number):Observable<any>{
        const token = JSON.parse(localStorage.getItem('accessToken')!)
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token['accessToken']}`,
            'auth': token['accessToken']
        })

        return this.http.delete<any>(`${this.API}/${idEspaco}`, {headers})
    }
}

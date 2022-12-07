import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.API;
@Injectable({
  providedIn: 'root'
})
export class EspacosService {
  private readonly API=`${API}/BuscarEspacos`;
  constructor(private http: HttpClient) { }

  listarEspacos():Observable<any>{
    const token = JSON.parse(localStorage.getItem('accessToken')!)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token['accessToken']}`,
      'auth': token['accessToken']
    })
    return this.http.get<any>(this.API, { headers })
  }
}

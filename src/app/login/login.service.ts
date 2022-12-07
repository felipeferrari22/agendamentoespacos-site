import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_login=`${API}/Login`;
  constructor(private http: HttpClient) { }

  login(username:any, password:any):Observable<any>{
    console.log(this.API_login)
    return this.http.post<any>(this.API_login, {email: username, senha: password}) .pipe( map(result => { 
      console.log(result);
      localStorage.setItem('accessToken', JSON.stringify(result)); 
      return true; }) );
  }


}

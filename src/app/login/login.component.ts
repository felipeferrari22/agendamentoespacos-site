import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any = ""
  password: any = ""
  title = 'primeiro_projeto';
  mostrarsenha = false

  constructor(public loginService: LoginService, public router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem('accessToken') //Apaga o JWT do Cache ao carregar tela de login
  }


  visibilidadesenha() {
    this.mostrarsenha = !this.mostrarsenha
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(login => {
      const token = JSON.parse(localStorage.getItem('accessToken')!)
      if (token["tipo"]==="solicitante"){
        this.router.navigate(['solicitar'])
      }
      else{
        this.router.navigate(['solicitacoes'])
      }
      console.log(JSON.parse(localStorage.getItem('accessToken')!))
    }
    )
    console.log("Entrou")
  }

}


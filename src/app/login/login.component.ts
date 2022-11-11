import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class AppComponent {
  title = 'primeiro_projeto';

  mostrarsenha = false

  mostrar(){
    this.mostrarsenha  = !this.mostrarsenha
  }
  
}

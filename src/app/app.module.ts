// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { SolicitarComponent } from './solicitar/solicitar.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDividerModule } from '@angular/material/divider';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations';



// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     SolicitarComponent
  
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatButtonModule,
//     MatIconModule,
//     MatDividerModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

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


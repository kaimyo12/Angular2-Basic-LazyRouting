import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()">Login</button>
      <button (click)="logout()" >Logout</button>
    </p>`
})
export class LoginComponent {

  message: string;

  login()
  {
    this.message = 'Logged-in';
  }

  logout(){
    this.message = 'Logged-out';
  }
}

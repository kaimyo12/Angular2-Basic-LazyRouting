import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()">{{log}}</button>
    </p>`
})
export class LoginComponent {

  message: string = "Logged-out";
  log: string = "Log-in";

  login()
  {
    if(this.message = "Logged-out"){
    this.message = 'Logged-out';
    this.log = 'Log-in'
  }
    else if(this.message = "Logged-in"){
      this.message = 'Logged-in';
      this.log = 'Log-out';
    }
  }
}

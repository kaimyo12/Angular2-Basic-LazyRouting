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
  l: boolean;

  login()
  {
    if(this.l){
    this.message = 'Logged-out';
    this.log = 'Log-in';
    this.l = false;
  }
    if(!this.l){
      this.l = true;
      this.message = 'Logged-in';
      this.log = 'Log-out';
      this.l = false;
    }
  }

}

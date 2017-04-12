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
    let l: number = 0;

    if(l = 0){
    this.message = 'Logged-out';
    this.log = 'Log-in';
    l = 1;
  }
    else if(l = 1){
      this.message = 'Logged-in';
      this.log = 'Log-out';
      l = 0;
    }
  }
}

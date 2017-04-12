import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>
      <button>Log-in</button>
    </p>`
})
export class LoginComponent {

  message: string = "Logged-out";
  log: string = "Log-in";
  l: boolean;
}

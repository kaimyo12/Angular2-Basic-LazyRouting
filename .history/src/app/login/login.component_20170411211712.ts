import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button>Login</button>
      <button>Logout</button>
    </p>`,
})
export class LoginComponent {

}

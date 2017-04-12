import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
  ],

})
export class LoginModule { }
 
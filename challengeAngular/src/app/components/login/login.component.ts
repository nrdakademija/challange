import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/users/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
    selector: 'loginForm',
    template: `  <div class="login" *ngIf="!authenticated">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h4 style="text-align: left">Login</h4>
          <button type="button" class="close" data-dismiss="modal"> &times;</button>
      </div>
      <div class="modal-body">
        <form [formGroup]="loginForm" (ngSubmit)="submitForm(loginForm.value)">
        <div class="form-group" [ngClass]="{'has-error':!loginForm.controls['email'].valid && loginForm.controls['email'].touched}">
          <label for="email" class="label">Email</label>
          <input class="form-control" type="email" placeholder="Email" [formControl]="loginForm.controls['email']">
          <div *ngIf="loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched" class="alert alert-danger">Email is required</div>
        </div>
          <div class="form-group" [ngClass]="{'has-error':!loginForm.controls['password'].valid && loginForm.controls['password'].touched}">
            <label>Password:</label>
            <input class="form-control" type="password" placeholder="Password" [formControl]="loginForm.controls['password']">
            <div *ngIf="loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched" class="alert alert-danger">You must add a password.</div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary" [disabled]="!loginForm.valid">Log in</button>
            <button type="button" class="btn btn-default btn-xs" data-dismiss="modal">Cancel</button>
          </div>
        </form>
    </div>
    </div>
    </div>
    </div>
    <div class="loginForm text-center" *ngIf="authenticated">
      <a (click)="logout()">Logout</a>
    </div>
    `,
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup;
  authenticated: boolean;
  user : Object;


  constructor(formBuilder: FormBuilder, public http: Http) {
    if(localStorage.getItem('jwt')){
      this.authenticated = true;
      // If the jwt key value exists, we’ll know the user is logged in, so we’ll get their profile.
      this.user = JSON.parse(localStorage.getItem('user'));
  }

    this.loginForm = formBuilder.group({
      'email' : [null, Validators.required],
      'password': [null, Validators.required],
    });

  }

  submitForm(value: any){
    console.log("atejo");
    // Once the form is submitted and we get the users email and password we’ll format our request based on the Auth0 API.
    // let form = {
    //   'client_id' : 'YOUR-AUTH0-CLIENTID',
    //   'username' : value.email,
    //   'password' : value.password,
    //   'connection' : 'Username-Password-Authentication',
    //   'grant_type' : 'password',
    //   'scope' : 'openid name email'
    // }
  }

  logout() {}

}


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
    templateUrl: './login.component.html',
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
  //  console.log("atejo");
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


import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/users/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 // user: UserModel = new UserModel;
  registerForm : FormGroup;

  constructor(formBuilder: FormBuilder) {

    this.registerForm = formBuilder.group({
      'fullName' :  [null, Validators.required],
      'username':  [null, Validators.required],
      'email' :  [null, Validators.required],
      'password' : [null, Validators.required],
      'confirmPassword' :  [null, Validators.required],
    })

  }

  openLogin() {
    `<loginForm></loginForm>`
  }

  submitForm(value: any):void{
  //  console.log('Reactive Form Data:  ')
  //  console.log(value);
  }


}


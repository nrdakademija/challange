import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/users/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'registerForm',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 // user: UserModel = new UserModel;
  registerForm : FormGroup;
  user: UserModel = new UserModel;
  temp: any;

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService, 
    private router: Router) {

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
    console.log(this.router.url);
    this.user.fullName = value.fullName;
    this.user.username = value.username;
    this.user.password = value.password;
    this.user.email = value.email;
    this.user.imgUrl = "";
    this.temp = this.userService.getUserByUsername(this.user.username).isEmpty;
      if (this.router.url.match('register')) {
          this.userService.addUser(this.user).subscribe(res => {
          Swal('Registration successful!', 'You can login now', 'success');
          this.router.navigate(['']);
          },
              (err) => {
                  console.log(err);
              });
      }
  }


}


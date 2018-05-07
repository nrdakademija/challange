import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/users/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'loginForm',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  authenticated: boolean;
  user: Object;
  us: UserModel;
  loading = false;
  returnUrl: string;

  constructor(formBuilder: FormBuilder, public http: Http,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {
    if (localStorage.getItem('jwt')) {
      this.authenticated = true;
      // If the jwt key value exists, we’ll know the user is logged in, so we’ll get their profile.
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.loginForm = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
    });

  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitForm(value: any) {
    this.loading = true;
    this.authenticationService.login(value.username, value.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error._body);
          this.loading = false;
        });
  }

  logout() { }

}


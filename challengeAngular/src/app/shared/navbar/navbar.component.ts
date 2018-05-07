import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { Router } from '@angular/router';
import { UserModel } from '../../models/users/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: UserModel;
  users: UserModel[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  logIn() {

  }

  openRegister() {
    this.router.navigate(['register']);
  }

}

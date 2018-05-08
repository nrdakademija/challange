import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('currentUser');
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    if (!localStorage.getItem('currentUser')) {
      return false;
    }
    return true;
  }

}

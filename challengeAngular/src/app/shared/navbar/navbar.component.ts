import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    if (!localStorage.getItem('currentUser')) {
      return false;
    }
    return true;
  }

  logout() {
   this.authenticationService.logout();
  }

}

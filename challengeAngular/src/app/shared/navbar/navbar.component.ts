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

  user;
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
    this.user = JSON.parse( localStorage.getItem('currentUser'));
    return true;
  }

  navigateToUserProfile(id) {
    this.router.navigate(['user/' + id]);
  }

  logout() {
   this.authenticationService.logout();
  }

}

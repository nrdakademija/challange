import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../models/users/user.model';
import { Md5 } from 'ts-md5';

@Component({
  //  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  usersList$: Observable<UserModel[]>;
  md5=  new Md5();
  grav = "";
  ngOnInit() {
    this.userService.getUsersList().subscribe((data: UserModel[]) => {
      this.usersList$ = Observable.of(data);
      this.grav =( this.md5.appendStr(data[0].email.toString()).end()).toString();

  });

  }


}

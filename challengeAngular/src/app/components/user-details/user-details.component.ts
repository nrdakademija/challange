import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserModel } from '../../models/users/user.model';
import { Md5 } from 'ts-md5';

@Component({
  //  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  activeParameter: any;
  usersList$: Observable<UserModel[]>;
  user: UserModel = new UserModel;
  md5 = new Md5();
  grav = "";
  ngOnInit() {

    this.activateRoute.params.subscribe((params: Params) => {
      this.activeParameter = params['id'];
    });

    this.userService.getUser(this.activeParameter).subscribe(data => {
      this.user = data;
      console.log(data);
      this.grav = (this.md5.appendStr(data.email.toString()).end()).toString();
    });

    // this.userService.getUsersList().subscribe((data: UserModel[]) => {
    //   this.usersList$ = Observable.of(data);
    //   this.grav = (this.md5.appendStr(data[0].email.toString()).end()).toString();

    // });

  }


}

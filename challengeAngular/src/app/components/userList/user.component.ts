import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/users/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  page = 4;
  md5 = new Md5();
  gravatar = "";
  users$: Observable<UserModel[]>;
  sortedUsers$: UserModel[];
  constructor(private userService: UserService,
    private router: Router, ) { }

  ngOnInit() {
    this.userService.getUsersList().subscribe((data: UserModel[]) => {
      this.users$ = Observable.of(data);
      let i;
      for (i =0; i< data.length; i++){
        data[i].imgUrl = ( this.md5.appendStr(data[i].email.toString()).end()).toString();
      }
      this.sortedUsers$ = data;
      this.sortedUsers$.sort(this.compare);
    });
  }

  compare(a, b) {
    if (a.level < b.level)
      return -1;
    if (a.level > b.level)
      return 1;
    return 0;
  }

  routeToUser(id) {
    this.router.navigate(['user/' + id]);
  }

}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/users/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  page = 4;
  users$: Observable<UserModel[]>;
  sortedUsers$: UserModel[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersList().subscribe((data: UserModel[])=>{
      this.users$=Observable.of(data);console.log(data);
      this.sortedUsers$=data;
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

}

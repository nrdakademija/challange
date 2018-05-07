import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { NgxCarousel } from 'ngx-carousel';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserModel } from '../../models/users/user.model';
import { Md5 } from 'ts-md5';
import { UserChallengesModel } from '../../models/userChallenges/userchallenges.model';
import { ChallengeService } from '../../services/challenge.service';
import { SubCategoryModel } from '../../models/subcategories/subcategories.model';

@Component({
  //  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private challengeService: ChallengeService) { }

  activeParameter: any;
  userChallengesList$: Observable<UserChallengesModel[]>;
  subCategories$: Observable<SubCategoryModel[]>;
  user: UserModel = new UserModel;
  md5 = new Md5();
  grav = '';
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit() {

    this.activateRoute.params.subscribe((params: Params) => {
      this.activeParameter = params['id'];
    });

    this.getUserInfo();
    this.getUserChallenges();

    this.challengeService.getChallengeSubCategories().subscribe((data: SubCategoryModel[]) => {
      this.subCategories$ = Observable.of(data);
    });
  }

  getUserInfo() {
    this.userService.getUserById(this.activeParameter).subscribe(data => {
      this.user = data;
      this.grav = (this.md5.appendStr(data.email.toString()).end()).toString();
     console.log(data);
    });
  }

  getUserChallenges() {
    this.userService.getUserChallenges(this.activeParameter).subscribe((data: UserChallengesModel[]) => {
      this.userChallengesList$ = Observable.of(data);
    });
  }


  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

  getPoints(p) {
    return p * 100 / (p + 50);
  }

  redirectToChallenge(id) {
    this.router.navigate(['challenge/' + id]);
  }
}

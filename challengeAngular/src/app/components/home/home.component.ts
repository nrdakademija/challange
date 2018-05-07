import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { UserModel } from '../../models/users/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { NgxCarousel } from 'ngx-carousel';
import { Router } from '@angular/router';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { SubCategoryModel } from '../../models/subcategories/subcategories.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: UserModel;

  constructor(private challengeService: ChallengeService,
    private userService: UserService,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  currentRate = 3.14;
  challenges$: Observable<ChallengeModel[]>;
  challengesGrouped: ChallengeModel[];
  subCategories$: Observable<SubCategoryModel[]>;


  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit() {
    this.challengeService.getChallengeList().subscribe((data: ChallengeModel[]) => {
      this.challenges$ = Observable.of(data);
    });

    this.challengeService.getChallengeSubCategories().subscribe((data: SubCategoryModel[]) => {
      this.subCategories$ = Observable.of(data);
    });

    this.challengeService.getChallengeList().subscribe((data: ChallengeModel[]) => {
      this.challengesGrouped = data;
      this.challengesGrouped.sort(this.compare);
    });




    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,

      easing: 'ease'
    };

  }

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

  redirectToChallenge(id) {
    this.router.navigate(['challenge/' + id]);
  }

  compare(a, b) {
    if (a.completedBy < b.completedBy) {
      return 1;
    }
    if (a.completedBy > b.completedBy) {
      return -1;
    }
    return 0;
  }

}


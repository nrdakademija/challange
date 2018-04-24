import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { NgxCarousel } from 'ngx-carousel';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private challengeService: ChallengeService,
  private router: Router) { }

  challenges$: Observable<ChallengeModel[]>;




  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit() {
   this.challengeService.getChallengeList().subscribe((data: ChallengeModel[]) => {
      this.challenges$ = Observable.of(data);
    //  this.heroes.push(this.challenges$[1].imgUrl);

      // this.loading = false;
    });

    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }

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


}


import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/';
import { ChallengeService } from '../../services/challenge.service';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './challenge.component.html',
    styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
  //loading = false;
  challenges$: Observable<ChallengeModel[]>;



  constructor(private router: Router,
    private challengeService: ChallengeService){}

  ngOnInit() {
     // this.loading = true;

      this.challengeService.getChallengeList().subscribe((data: ChallengeModel[]) => {
          this.challenges$ = Observable.of(data);
         // this.loading = false;
      });
  }

  routeToChallenge(id){
    this.router.navigate(['/challenges/' + id]);
  }
}


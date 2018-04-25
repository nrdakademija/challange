import { Component, OnInit } from '@angular/core';
import { ChallengeModel } from '../../../models/challenges/challenge.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ChallengeService } from '../../../services/challenge.service';
import { UserModel } from '../../../models/users/user.model';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: './challenge-details.component.css',
  templateUrl: './challenge-details.component.html'
})

export class ChallengeDetailsComponent implements OnInit {

  challengeInfo: ChallengeModel = new ChallengeModel();
  activeParameter: any;
  usersList$: Observable<UserModel[]>;
  constructor(private router: Router,
    private challengeService: ChallengeService,
    private activeRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.activeParameter = params['id'];
    });
    if (this.activeParameter) {
      this.challengeService.getChallengeById(this.activeParameter).subscribe((response: ChallengeModel) => {
        this.challengeInfo = response;
      });
    }
    else {
      this.challengeInfo = new ChallengeModel();
    }
    console.log(this.challengeInfo);
    // this.loading = false;
  }
  
}

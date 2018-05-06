import { Component, OnInit } from '@angular/core';
import { ChallengeModel } from '../../../models/challenges/challenge.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ChallengeService } from '../../../services/challenge.service';
import { UserModel } from '../../../models/users/user.model';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { SubCategoryModel } from '../../../models/subcategories/subcategories.model';
import { CategoryModel } from '../../../models/categories/categories.model';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { debug } from 'util';
import { UserChallengesModel } from '../../../models/userChallenges/userchallenges.model';

@Component({
  styleUrls: ['./challenge-details.component.css'],
  templateUrl: './challenge-details.component.html'
})

export class ChallengeDetailsComponent implements OnInit {

  // success message shown to user after he accepts the challenge
  succcesMessages = ['Only you can change your life', 'It always seems impossible until it\'s done!',
    'Never give up!', 'If you can dream it you can do it!',
    'Set your goals high and don\'t stop till you get there!',
    'What you do today can improve all your tomorrows!', 'Aim for the moon. If you miss, you may hit a star!',
    'Go for it now. The future is promised to no one!', 'The more things you do, the more you can do!', 'You have to make it happen!'];

  messageRnd = 0;

  challengeInfo: ChallengeModel = new ChallengeModel();
  obj: UserChallengesModel = new UserChallengesModel();
  activeParameter: any;
  usersList$: Observable<UserModel[]>;
  subCategories$: Observable<SubCategoryModel[]>;
  categories$: Observable<CategoryModel[]>;
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
        this.challengeInfo = response; console.log(response);

      });
    }
    else {
      //  this.challengeInfo = new ChallengeModel();
    }

    this.challengeService.getChallengeSubCategories().subscribe((data: SubCategoryModel[]) => {
      this.subCategories$ = Observable.of(data);
    });
    this.challengeService.getChallengeCategories().subscribe((data: CategoryModel[]) => {
      this.categories$ = Observable.of(data);
    });

  }
// TO DO GET USERS ID after he's logged in
  userId = 1;
  startChallenge(challengeId) {

    Swal({
      title: 'Are you ready for a challenge?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, let\'s go!'
    }).then((result) => {
      if (result.value) {
        // Add challenge to users challenges
        this.obj = {
          user_id: this.userId,
          challengeId: challengeId,
          startDate: new Date(2018, 5, 23),
          endDate: new Date(2018, 5, 23),
          challenge: null
        };
        this.messageRnd = Math.floor(Math.random() * 10);
        this.userId = 1; debugger;
        this.userService.acceptChallenge(this.userId, this.obj).subscribe((response) => {
          Swal(
            `${this.succcesMessages[this.messageRnd]}`
          );
          this.router.navigate(['user/userId']); //<---navigate to user where he can see his challenges
        });

      }
    });
  }

}

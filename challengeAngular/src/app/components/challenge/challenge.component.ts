import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/';
import { ChallengeService } from '../../services/challenge.service';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { Router } from '@angular/router';
import { SubCategoryModel } from '../../models/subcategories/subcategories.model';
import { CategoryModel } from '../../models/categories/categories.model';

@Component({
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  // loading = false;
  page = 4;
  challenges$: Observable<ChallengeModel[]>;
  subCategories$: Observable<SubCategoryModel[]>;
  categories$: Observable<CategoryModel[]>;


  constructor(private router: Router,
    private challengeService: ChallengeService) { }

  ngOnInit() {
    // this.loading = true;

    this.challengeService.getChallengeList().subscribe((data: ChallengeModel[]) => {
      this.challenges$ = Observable.of(data);
      // this.loading = false;
    });
    this.challengeService.getChallengeSubCategories().subscribe((data: SubCategoryModel[]) => {
      this.subCategories$ = Observable.of(data);
    });
    this.challengeService.getChallengeCategories().subscribe((data: CategoryModel[]) => {
      this.categories$ = Observable.of(data);
    });
  }

  routeToChallenge(id) {
    this.router.navigate(['challenge/' + id]);
  }
  filterByCategory() {

  }

  public isAuthenticated(): boolean {
    if (!localStorage.getItem('currentUser')) {
      return false;
    }
    return true;
  }

}


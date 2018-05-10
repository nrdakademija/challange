import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/';
import { ChallengeService } from '../../services/challenge.service';
import { Router } from '@angular/router';
import { SubCategoryModel } from '../../models/subcategories/subcategories.model';
import { CategoryModel } from '../../models/categories/categories.model';
import { NgForm } from '@angular/forms';

@Component({
  styleUrls: [`admin.component.css`],
  templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
  constructor(private router: Router,
    private challengeService: ChallengeService) { }

  subCategories$: Observable<SubCategoryModel[]>;
  subCategories: SubCategoryModel[];
  categories$: Observable<CategoryModel[]>;

  ngOnInit() {
    this.challengeService.getChallengeSubCategories().subscribe((data: SubCategoryModel[]) => {
      this.subCategories$ = Observable.of(data);
    });
    this.challengeService.getChallengeCategories().subscribe((data: CategoryModel[]) => {
      this.categories$ = Observable.of(data);
    });
   }

   editSubcategory(id) {

   }

   addSubcategory(id) {

   }

   deleteSubcategory(id) {

   }
}

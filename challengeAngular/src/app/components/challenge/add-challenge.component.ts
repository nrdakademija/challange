import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { ChallengeService } from '../../services/challenge.service';
import { Router } from '@angular/router';
import { CategoryModel } from '../../models/categories/categories.model';
import { SubCategoryModel } from '../../models/subcategories/subcategories.model';

@Component({
  selector: 'add-challenge',
  templateUrl: 'add-challenge.component.html',
  styleUrls: ['challenge.component.css']
})

export class AddChallengeComponent implements OnInit {

  categoriesList$: Observable<CategoryModel[]>;
  subCategoriesList$: Observable<SubCategoryModel[]>;
  challengeInfo: ChallengeModel = new ChallengeModel();
  isPhoto = false;
  triedToSave = false;
  saving = false;

  constructor(private challengeService: ChallengeService, private router: Router) {


  }

  ngOnInit() {

    this.getCategoriesList();
    this.getSubCategoriesList();

   }

  getCategoriesList() {
    this.challengeService.getChallengeCategories().subscribe((response: CategoryModel[]) =>{
       this.categoriesList$ = Observable.of(response);
    });
  }

//TO DO filter subCategories according to chosen category
  getSubCategoriesList() {
    this.challengeService.getChallengeSubCategories().subscribe((response: CategoryModel[]) =>{
       this.subCategoriesList$ = Observable.of(response);
    });
  }

  addChallenge(value: any) {
    console.log('Reactive Form Data:  ')
    console.log(value);
    if (value.imgUrl.endsWith(".jpg") || value.imgUrl.endsWith(".jpeg") || value.imgUrl.endsWith(".png")) {
      this.isPhoto = true;
    }
    else {
      this.isPhoto = false;

    }
  }

  save(form) {};



}

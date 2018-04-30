import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { ChallengeService } from '../../services/challenge.service';
import { Router } from '@angular/router';
import { CategoryModel } from '../../models/categories/categories.model';
import { SubCategoryModel } from '../../models/subcategories/subcategories.model';
import Swal from 'sweetalert2';

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

  constructor(private challengeService: ChallengeService, private router: Router) {


  }

  ngOnInit() {

    this.getCategoriesList();
    this.getSubCategoriesList();

  }

  getCategoriesList() {
    this.challengeService.getChallengeCategories().subscribe((response: CategoryModel[]) => {
      this.categoriesList$ = Observable.of(response);
    });
  }

  //TO DO filter subCategories according to chosen category
  getSubCategoriesList() {
    this.challengeService.getChallengeSubCategories().subscribe((response: CategoryModel[]) => {
      this.subCategoriesList$ = Observable.of(response);
    });
  }

  isImageUrl(url) {debugger;
    if (url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".png")) {
      return this.isPhoto = true;
    }
    else {
      return this.isPhoto = false;
    }
  }


  save(form: NgForm) {
    this.challengeInfo.category = "User created";
    if (form.valid) {
      this.triedToSave = false;
        this.challengeService.postChallenge(this.challengeInfo).subscribe((response) => {
          Swal('Yaaay!', 'Successfull', 'success');
          this.router.navigate(['/challenges']);
        });
    }
    else {
      this.triedToSave = true;
      Swal('Ooop!', 'Error', 'error');
    }
  }



}

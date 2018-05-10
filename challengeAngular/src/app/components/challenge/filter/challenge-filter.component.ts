import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SubCategoryModel } from '../../../models/subcategories/subcategories.model';
import { CategoryModel } from '../../../models/categories/categories.model';

@Component({
  selector: 'app-filter',
  template: `
<<<<<<< HEAD
  <div class="container" style="margin-top: 5px">
    <button type="button" class="btn btn-primary"
    (click)="setSubcategory()"> All</button>
    <button *ngFor="let t of subcategories$ | async" type="button" class="btn btn-primary mr-1"
    (click)="setSubcategory(t.id)">{{t.title}}</button>
=======
  <div>
    <div>
      Category
      <button type="radio" class="btn btn-primary"
      (click)="setCategory(0)"> All</button>
      <button *ngFor="let t of categories$ | async" type="radio" class="btn btn-primary mr-1"
      (click)="setCategory(t.id)">{{t.title}}</button>


    <div style="margin-top: 10px;">
      Subcategory
      <button type="button" class="btn btn-primary"
      (click)="setSubcategory(0)"> All</button>
      <button *ngFor="let t of subcategories$ | async" type="button" class="btn btn-primary mr-1"
      (click)="setSubcategory(t.id)">{{t.title}}</button>
  </div>
>>>>>>> af63ce64376fcd82bfa1e5ecb070665cc265282b
</div>
    `
})

export class ChallengeFilterComponent implements OnInit {

  @Input() subcategories$: Observable<SubCategoryModel[]>;
  @Input() categories$: Observable<CategoryModel[]>;
  @Output() filterEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  setSubcategory(id ) {
    this.filterEvent.emit(id);
  }
  setCategory(id:number) {
    this.filterEvent.emit(id + 100);
  }

}

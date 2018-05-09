import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SubCategoryModel } from '../../../models/subcategories/subcategories.model';

@Component({
  selector: 'app-filter',
  template: `
    <div class="container">
        <button type="button" class="btn btn-primary"
        (click)="setSubcategory()"> All</button>
        <button *ngFor="let t of subcategories$ | async" type="button" class="btn btn-primary mr-1"
        (click)="setSubcategory(t.id)">{{t.title}}</button>
    </div>
    `
})

export class ChallengeFilterComponent implements OnInit {

  @Input() subcategories$: Observable<SubCategoryModel[]>;
  @Output() filterEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  setSubcategory(id) {
    this.filterEvent.emit(id);
  }

}

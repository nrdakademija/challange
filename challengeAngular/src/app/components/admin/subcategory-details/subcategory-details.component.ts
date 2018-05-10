import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  template: `<div class="modal-content">
  <div class="modal-header">
    <h4 style="text-align: left">Subcategory</h4>
    <button type="button" class="close" data-dismiss="modal"> &times;</button>
  </div>
  <div class="modal-body">
    // <form (ngSubmit)="addSubcategory()" #subcategoryForm="ngForm" novalidate>
    //   <div class="form-group" [class.has-danger]="title.invalid">
    //     <label class="form-control-label" for="name">Subcategory title</label>
    //     <input #title="ngModel" type="text" maxlength="10" [(ngModel)]="title" required name="firstName" class="form-control"
    //       id="title" placeholder="Enter title">
    //     <small *ngIf="title.invalid " class="form-text text-muted text-danger">Title is required</small>
    //   </div>
    //   <div class="form-group">
    //     <button type="submit" class="btn btn-primary">Save</button>
    //         <button routerLink="/admin" type="button" class="btn btn-default">Back</button>
    //   </div>
    // </form>
  </div>
</div>`
})

export class SubcategoryDetailsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  addSubcategory() {}

}

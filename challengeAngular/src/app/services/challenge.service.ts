import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Http, Response } from '@angular/http';
import { ChallengeModel } from '../models/challenges/challenge.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CategoryModel } from '../models/categories/categories.model';
import { SubCategoryModel } from '../models/subcategories/subcategories.model';

@Injectable()
export class ChallengeService {

  url = 'http://localhost:3000/challenges';
  categoriesUrl = '';
  subcategoriesUrl = '';

  constructor(private http: Http) { }

  //Challenges
  getChallengeList(): Observable<ChallengeModel[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json() as ChallengeModel[])
      .catch((error: any) => Observable.throw(error));
  }

  getChallengeById(id): Observable<ChallengeModel> {
    return this.http.get(this.url + '/' + id)
      .map((res: Response) => res.json() as ChallengeModel)
      .catch((error: any) => Observable.throw(error));
  }

  postChallenge(data): Observable<ChallengeModel> {
    return this.http.post(this.url, data)
      .map((res: Response) => res.json() as ChallengeModel)
      .catch((error: any) => Observable.throw(error));
  }

  updateChallenge(data): Observable<ChallengeModel> {
    return this.http.put(this.url + '/' + data.id, data)
      .map((res: Response) => res.json() as ChallengeModel[])
      .catch((error: any) => Observable.throw(error));
  }


  deleteChallenge(id): Observable<ChallengeModel[]> {
    return this.http.delete(this.url + '/' + id)
      .map((res: Response) => res.json() as ChallengeModel)
      .catch((error: any) => Observable.throw(error));
  }


  //Challenge categories
  getChallengeCategoriest(): Observable<CategoryModel[]> {
    return this.http.get(this.url + '/' + 'challenges-categories')
      .map((res: Response) => res.json() as CategoryModel[])
      .catch((error: any) => Observable.throw(error));
  }

  getChallengeCategoriesById(id): Observable<CategoryModel> {
    return this.http.get(this.url + '/' + 'challenges-categories')
      .map((res: Response) => res.json() as CategoryModel)
      .catch((error: any) => Observable.throw(error));
  }
  //Challenge subcategories
  getChallengeSubCategoriest(): Observable<SubCategoryModel[]> {
    return this.http.get(this.url + '/' + 'challenges-subcategories')
      .map((res: Response) => res.json() as SubCategoryModel[])
      .catch((error: any) => Observable.throw(error));
  }

  getChallengeSubCategoriesById(id): Observable<SubCategoryModel> {
    return this.http.get(this.url + '/' + 'challenges-subcategories')
      .map((res: Response) => res.json() as SubCategoryModel)
      .catch((error: any) => Observable.throw(error));
  }

  postChallengeSubCategories(data): Observable<SubCategoryModel> {
    return this.http.post(this.url, data)
      .map((res: Response) => res.json() as SubCategoryModel)
      .catch((error: any) => Observable.throw(error));
  }
}

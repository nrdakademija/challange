import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Http, Response } from '@angular/http';
import { ChallengeModel } from '../models/challenges/challenge.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

saveChallenge(item): Observable<any> {
    return this.http.post(this.url, item)
        .map((res: Response) => res.json() as any[])
        .catch((error: any) => Observable.throw(error));
}

updateChallenge(item): Observable<any> {
    return this.http.put(this.url + '/' + item.id, item)
        .map((res: Response) => res.json() as any[])
        .catch((error: any) => Observable.throw(error));
}


deleteChallenge(id): Observable<any[]> {
    return this.http.delete(this.url + '/' + id)
        .map((res: Response) => res.json() as any)
        .catch((error: any) => Observable.throw(error));
}


//Challenge categories

//Challenge subcategories

}

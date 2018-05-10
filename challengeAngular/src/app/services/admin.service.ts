import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdminService {

  http: any;
  constructor() { }

  saveSubcategory(item): Observable<any> {
    return this.http.post('http://localhost:59372/Subcategory', item)
        .map((res: Response) => res.json() as any[])
        .catch((error: any) => Observable.throw(error));
}

  updateSubcategory(sub): Observable<any> {
    return this.http.put('http://localhost:59372/Subcategory' + '/' + sub.id, sub)
      .map((res: Response) => res.json() as any[])
      .catch((error: any) => Observable.throw(error));
  }


  deleteSubcategory(id): Observable<any[]> {
    return this.http.delete('http://localhost:59372/Subcategory' + '/' + id)
      .map((res: Response) => res.json() as any)
      .catch((error: any) => Observable.throw(error));
  }
}

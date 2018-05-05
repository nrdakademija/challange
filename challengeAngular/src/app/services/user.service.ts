import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserModel } from '../models/users/user.model';
import { UserChallengesModel } from '../models/userChallenges/userchallenges.model';
import { ChallengeModel } from '../models/challenges/challenge.model';

@Injectable()
export class UserService {

  url = 'http://localhost:59372/users';
  urlUserChallenges = 'http://localhost:59372/userchallenges/';

  constructor(private http: Http) { }

  // Users
  getUsersList(): Observable<UserModel[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json() as UserModel[])
      .catch((error: any) => Observable.throw(error));
  }

  // TO DO add valid url
  acceptChallenge(userId, challengeId): Observable<UserChallengesModel[]> {
    console.log(this.url + '/' + userId , challengeId);
      return this.http.post(this.url + '/' + userId, challengeId)
      .map((res: Response) => res.json() as UserChallengesModel)
      .catch((error: any) => Observable.throw(error));
  }


  // Single user
  getUser(id): Observable<UserModel> {
    return this.http.get(this.url + '/' + id)
      .map((res: Response) => res.json() as UserModel)
      .catch((error: any) => Observable.throw(error));
  }

  editUser(data, id): Observable<UserModel> {
    return this.http.put(this.url + '/' + id, data)
      .map((res: Response) => res.json() as UserModel)
      .catch((error: any) => Observable.throw(error));
  }

  addUser(data): Observable<UserModel> {
    return this.http.post(this.url, data)
      .map((res: Response) => res.json() as UserModel)
      .catch((error: any) => Observable.throw(error));
  }

  deleteUserChallenge(userId, challengeId): Observable<UserChallengesModel[]> {
    return this.http.delete(this.url + '/' + userId, challengeId)
      .map((res: Response) => res.json() as UserChallengesModel)
      .catch((error: any) => Observable.throw(error));
  }

  getUserChallenges(id): Observable<UserChallengesModel[]> {
    return this.http.get(this.urlUserChallenges + id)
      .map((res: Response) => res.json() as UserChallengesModel[])
      .catch((error: any) => Observable.throw(error));
  }

  // TO DO
  authenticateUser() { }


}

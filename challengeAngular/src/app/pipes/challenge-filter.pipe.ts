import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/';
import { ChallengeModel } from '../models/challenges/challenge.model';

@Pipe({
  name: 'challengeFilter'
})

export class ChallengeCategoriesFilterPipe implements PipeTransform {
  transform(challenge: Observable<ChallengeModel>, filter:ChallengeModel): any {
      if (challenge == null){
        return [];
      }
      // filter challenge array, challenges which match and return true will be kept, false will be filtered out
      return challenge.filter((challenge: ChallengeModel) => this.applyFilter(challenge, filter));
  }

  applyFilter(challenge: ChallengeModel, filter: ChallengeModel): boolean {

    return true;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/';

@Pipe({
  name: 'challengeFilter'
})

export class ChallengeCategoriesFilterPipe implements PipeTransform {
  transform(items: Observable<any>, typeFilter: any): any {
    if (items == null) {
      return [];
    }

    if (typeFilter) {
      return items.filter(i => i.type === typeFilter);
    }

    return items;
  }
}

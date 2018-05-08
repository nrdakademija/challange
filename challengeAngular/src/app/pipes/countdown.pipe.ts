import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const days: number = Math.floor(hours / 24);
    const minutes: number = Math.floor((value % 3600) / 60);
    return ('00' + days).slice(-2) + ':' + ('00' + hours).slice(-2) + ':' +
    ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }

}
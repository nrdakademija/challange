import {
 Component,ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';

import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import { ChallengeService } from '../../services/challenge.service';
import Swal from 'sweetalert2';
import { UserChallengesModel } from '../../models/userChallenges/userchallenges.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class ChallengeCalendarComponent implements OnInit {
  title = 'app';

  calendarOptions:Object = {
      height: 'parent',
      fixedWeekCount : false,
      defaultDate: Date.now(),
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-09-01'
        },
        {
          title: 'Long Event',
          start: '2016-09-07',
          end: '2016-09-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-09-11',
          end: '2016-09-13'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T10:30:00',
          end: '2016-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-09-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-09-28'
        }
      ]
    };

    onCalendarInit(initialized: boolean) {
      console.log('Calendar initialized');
    }


 constructor( private router: Router, private userService: UserService) { }
 id = 1;
  userChallenges$: Observable<UserChallengesModel[]>;
  ngOnInit() {
    this.getUserChallenges(this.id);
  }

  refreshList() {

  }

  getUserChallenges(id) {
    this.userService.getUserChallenges(id).subscribe((response: UserChallengesModel[]) => {
      this.userChallenges$ = Observable.of(response);
   
    });
  }

}
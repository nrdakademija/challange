import {
  Component, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ChallengeService } from '../../services/challenge.service';
import Swal from 'sweetalert2';
import { UserChallengesModel } from '../../models/userChallenges/userchallenges.model';
import { Observable } from 'rxjs/Observable';
import { ChallengeModel } from '../../models/challenges/challenge.model';


@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class ChallengeCalendarComponent implements OnInit {
  title = 'app';

  constructor(private router: Router, private userService: UserService) { }
  id = 1;
  userChallenges$: Observable<UserChallengesModel[]>;
  challengesList$: Observable<ChallengeModel[]>;

  calendarOptions: Object = {
    height: 'parent',
    header: {
      left: 'title',
      center: '',
      right: 'today prev,next'
    },
    //  fixedWeekCount: false,
    defaultDate: Date.now(),
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    views: {
      month: {
        eventLimit: 5
      }
    },
    eventClick: this.alertOnEventClick,
    events: [
      {
        title: 'Click for Google',
        url: 'challenge/1',
        start: '2018-05-05'
      }
    ]
  };

  ngOnInit() {
    this.getUserChallenges(this.id);
  }

  alertOnEventClick(obj, jsEvent, view) {

  }

  onCalendarInit(initialized: boolean) {
    console.log('Calendar initialized');
  }

  refreshList() {

  }

  getChallengesById(id) {
  }

  getUserChallenges(id) {
    this.userService.getUserChallenges(id).subscribe((response: UserChallengesModel[]) => {
      this.userChallenges$ = Observable.of(response);

    });
  }

}

import {
  Component, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ChallengeService } from '../../services/challenge.service';
import Swal from 'sweetalert2';
import { UserChallengesModel } from '../../models/userChallenges/userchallenges.model';
import { Observable } from 'rxjs/Observable';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { Calendar } from 'fullcalendar';

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class ChallengeCalendarComponent implements OnInit {
  obj: {};
  calendarChallenges: ChallengeModel[] = new Array<ChallengeModel>();
  title = 'app';

  constructor(private router: Router, private userService: UserService, private challengeService: ChallengeService) { }
  id = 1;
  userChallenges$: Observable<UserChallengesModel[]>;
  challengesList$: Observable<ChallengeModel[]>;
  challenges: ChallengeModel[] = new Array<ChallengeModel>();

// KALENDORIUI
  userChallenges: UserChallengesModel[];
  calendarEvents: Event[] = [];


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
    ]
  };

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo() {
    this.userService.getChallengesByUserId(2).then(data => {
      this.userChallenges = data;
      this.userChallenges.forEach(ch => {
        var obj = {
          id: ch.user_id,
          title: 'plz work'.toString(),
          start: ch.startDate,
          end: ch.endDate
        };
        this.calendarEvents.push(obj);
      });
      //this.calendarOptions.events = this.calendarEvents;
      $('#myCalendar').fullCalendar('renderEvents', this.calendarEvents, true);
    });
  }

  alertOnEventClick(obj, jsEvent, view) {

  }

  onCalendarInit(initialized: boolean) {
    console.log('Calendar initialized');
  }


  //   formEventsData(challenges, userCh) {debugger;
  //     this.calendarChallenges.length = challenges.length;
  //     for (let i = 0; i < challenges.length; i++) {
  //       this.obj = {
  //         id: challenges[i].id,
  //         title: "challenges[i].title",
  //         created_at: challenges[i].created_at,
  //         reward: challenges[i].reward,
  //         start: '2018-05-05'
  //       };
  //       this.calendarChallenges.push(this.obj);
  //     }

  //   //  this.eventSources = this.calendarChallenges;
  //   //  this.calendarOptions.events = eventSources;

  // //    $('#myCalendar').fullCalendar('addEventSource', this.eventSources);
  //       //  eventSources = null;
  //   }

  // getUserChallenges(id) {
  //   this.userService.getUserChallenges(id).subscribe((response: UserChallengesModel[]) => {
  //     this.userChallenges$ = Observable.of(response);
  //     response.forEach(element => {
  //       this.challengeService.getChallengeById(element.challengeId).subscribe((data: ChallengeModel) => {
  //         this.challenges.push(data);
  //       });
  //     });
  //     //   this.formEventsData(this.challenges, this.userChallenges$);
  //   });
  // }

}

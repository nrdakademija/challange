import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { ChallengeService } from '../../services/challenge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-challenge',
  templateUrl: 'add-challenge.component.html',
  styleUrls: ['challenge.component.css']
})

export class AddChallengeComponent implements OnInit {

  challengeInfo: ChallengeModel = new ChallengeModel();
  isPhoto = false;
  triedToSave = false;
  saving = false;

  constructor(private challengeService: ChallengeService, private router: Router) {


  }

  ngOnInit() { }

  addChallenge(value: any) {
    console.log('Reactive Form Data:  ')
    console.log(value);
    if (value.imgUrl.endsWith(".jpg") || value.imgUrl.endsWith(".jpeg") || value.imgUrl.endsWith(".png")) {
      this.isPhoto = true;
    }
    else {
      this.isPhoto = false;

    }
  }

  save(form) {};



}

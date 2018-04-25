import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {NgbRatingConfig, NgbProgressbarConfig,NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app.routing';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserService } from './services/user.service';
import { ChallengeService } from './services/challenge.service';
import { AuthenticationService } from './services/authentication.service';
import { HttpModule } from '@angular/http';
import { ChallengeCategoriesFilterPipe } from './pipes/challenge-filter.pipe';
import { AddChallengeComponent } from './components/challenge/add-challenge.component';
import { HomeComponent } from './components/home/home.component';
import { ChallengeDetailsComponent } from './components/challenge/details/challenge-details.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChallengeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ChallengeCategoriesFilterPipe,
    AddChallengeComponent,
    ChallengeDetailsComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    NgxCarouselModule
  ],
  providers: [
    UserService,
    ChallengeService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

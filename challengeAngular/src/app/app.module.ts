import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
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
    AddChallengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ChallengeService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

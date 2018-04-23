import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component'
import { AboutComponent } from '../about/about.component'
import { ChallengeComponent } from '../challenge/challenge.component'

@NgModule({
  imports: [
      RouterModule.forRoot([
          { path: '' , component: HomeComponent},
          { path: 'login' , component: LoginComponent},
          { path: 'register' , component: RegisterComponent},
          { path: 'about' , component: AboutComponent},
          { path: 'challenge' , component: ChallengeComponent},

          // otherwise redirect to home
          { path: '**', redirectTo: '' }
      ])
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}

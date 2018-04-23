import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {}

  public openLogin() {
    //show modal
    console.log("kazkas vyksta");

 }

 public openRegister() {
  //show modal
  console.log("kazkas vyksta");

}
}

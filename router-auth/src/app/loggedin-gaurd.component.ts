import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './app.component';

@Injectable()
export class LoggedinGaurd implements CanActivate{
  constructor(private authService:  AuthService){

  }
  canActivate():boolean {
    console.log("Checking if logged in: ",this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }
}

@Component({
  selector: 'app-loggedin-gaurd',
  template: `
    <p>
      loggedin-gaurd Works!
    </p>
  `,
  styles: []
})
export class LoggedinGaurdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Injectable, Inject } from '@angular/core';


@Injectable()
export class AuthService {
  constructor(){

  }
  login(user: string, password:string): boolean {
    console.log("AuthService login called");
    if(user == 'user' && password == 'password'){
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any{
    localStorage.removeItem('username');
  }
  getUser(): any{
    return localStorage.getItem('username');
  }
  isLoggedIn(): boolean {
    return this.getUser() !=null
  }
}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  constructor(private authService: AuthService){
    this.message='';
      //console.log(authService.isLoggedIn);
  }

  login(username: string, password:string): boolean{
    console.log("Login method called");
    this.message='';
    if(!this.authService.login(username, password)){
      this.message = 'Incorrect credentials!';
      setTimeout(function(){
        this.message ='';
      }.bind(this), 2500);
      return false;
    }
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}

@Component({
  selector:'home-component',
  template:`
    <h1>Welcome Home!</h1>
  `
})
export class HomeComponent{

}

@Component({
  selector:'aboutus-component',
  template:`
    <h1>This is About Us component</h1>
  `
})
export class AboutUsComponent{

}

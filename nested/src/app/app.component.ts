import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

@Component({
  selector: 'home',
  template: `
    <h1> This is HomeComponent</h1>
  `
})
export class HomeComponent {
  title = 'Nested route example!';
}

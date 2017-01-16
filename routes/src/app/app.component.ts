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
  selector: 'home-component',
  template:
  `
    <h1>{{title}}</h1>
  `

})
export class HomeComponent {
  title = 'Home component is working!!';
}

@Component({
  selector: 'about-component',
  template:
  `
    <h1>{{title}}</h1>
  `

})
export class AboutComponent {
  title = 'About us route is working!!';
}


@Component({
  selector: 'contact-component',
  template:
  `
    <h1>{{title}}</h1>
  `

})
export class ContactComponent {
  title = 'Contact route is working!!';
}

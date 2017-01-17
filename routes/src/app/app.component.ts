import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  parameter;
  constructor( private route: ActivatedRoute ){
    route.params.subscribe( params =>{
      this.parameter = params['id'];
    })
  }
}

@Component({
  selector: 'home-component',
  template:
  `
    <h1>{{title}}  {{parameter}}</h1>
  `

})
export class HomeComponent {
  title = 'Home component is working!!';
  parameter;

  constructor( private route: ActivatedRoute ){
    route.params.subscribe( params =>{
      this.parameter = params['id'];
    })
  }
}

@Component({
  selector: 'about-component',
  template:
  `
    <h1>{{title}}  {{parameter}}</h1>
  `

})
export class AboutComponent {
  title = 'About us route is working!!';
  parameter;

  constructor( private route: ActivatedRoute ){
    route.params.subscribe( params =>{
      this.parameter = params['id'];
    })
  }
}


@Component({
  selector: 'contact-component',
  template:
  `
    <h1>{{title}}  {{parameter}}</h1>
  `

})
export class ContactComponent {
  title = 'Contact route is working!!';
  parameter;

  constructor( private route: ActivatedRoute ){
    route.params.subscribe( params =>{
      this.parameter = params['id'];
    })
  }
}

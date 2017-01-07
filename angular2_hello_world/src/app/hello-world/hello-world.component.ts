import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `<div app-hello-world>
  Hello world Testing
  </div>`,
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

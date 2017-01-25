import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat',
  template: `
    <h2>
      This is protected content
    </h2>
  `,
  styles: []
})
export class FlatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

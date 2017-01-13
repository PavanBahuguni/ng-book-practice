import { Component } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  selector: 'app-simple-http',
  template: `
    <h2> Basic Request</h2>
    <button type=button (click)="makeRequest()">Make Request</button>
    <div *ngIf="loading">loading...</div>
    <pre>{{data | json}}</pre>
  `,
  styles: []
})
export class SimpleHttpComponent {
  data : Object;
  loading : boolean;

  constructor(private http: Http) { }
  makeRequest():void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts')
      .subscribe((res:Response)=>{
        this.data = res.json();
        this.loading = false;
      });
  }
}

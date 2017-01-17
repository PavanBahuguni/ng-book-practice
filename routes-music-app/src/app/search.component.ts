import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from './app.component.js';

@Component({
  selector: 'search',
  template: `
    <h1>Search</h1>
    <p>
      <input type="text" #newquery [value]="query" (keydown.enter)="submit(newquery.value)">
      <button (click)="submit(newquery.value)">search</button>
    </p>
    <div *ngIf="results">
      <div *ngIf="!results.length">
        No tracks were found with the term '{{query}}'.
      </div>
      <div *ngIf="results.length">
        <h1>Results</h1>
        <div class="row">
          <div class="col-sm-6 col-md-4" *ngFor="let t of results">
            <div class="thumbnail">
              <div class="content">
                <img src="{{t.album.image[0].url}}" class="img-responsive">href=""
                <div class="caption">
                  <h3>
                    <a [routerLink]="['artists', t.artists[0].id]">{{ t.artists[0].name}}
                    </a>
                  </h3><br>
                  <p>
                    <a [routerLink]="['/tracks', t.id]">{{t.name}}</a>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
      </div>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SpotifyService } from './app.component';

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
          <div class="col-sm-6 col-md-3" *ngFor="let t of results">
            <div class="thumbnail">
              <div class="content">
                <img src="{{ t.album.images[0].url }}" class="img-responsive">
                <div class="caption">
                  <h3>
                    <a [routerLink]="['/artists', t.artists[0].id]">{{ t.artists[0].name}}
                    </a>
                  </h3><br>
                  <p>
                    <a [routerLink]="['/tracks', t.id]">{{t.name}}</a>
                  </p>
                </div>
                <div class="attribution">
                  <h4>
                    <a [routerLink]="['/albums', t.album.id]">{{t.album.name}}
                    </a>
                  </h4>
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
  query: string;
  results: Object;

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {
      this.route
         .queryParams
         .subscribe( params => {this.query =
           params['query'] || '';});

  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    console.log('this.query', this.query);
    if(!this.query){
      return;
    }
    console.log("calling api");
    this.spotify
        .searchByTrack(this.query)
        .subscribe((res: any) =>
          this.renderResults(res));
  }

  renderResults(res: any): void{

    this.results = null;
    if(res && res.tracks && res.tracks.items){
      this.results = res.tracks.items;
      console.log("results",this.results);
    }
  }

  submit(query: string):void {
     this.router.navigate(['search'], { queryParams: {
       query: query
     } })
    .then(_=>this.search());
  }
}

@Component({
  template:`
    <div *ngIf="track">
      <h1>{{ track.name }}</h1>
      <p>
        <img src="{{ track.album.images[1].url }}">
      </p>
      <p>
        <audio controls> <src=" {{ track.preview_url }} "></audio>
      </p>
      <p><a href (click)="back()">Back</a></p>
    </div>
  `
})
export class TrackComponent{
    track: Object;
    id;
    constructor(private spotify: SpotifyService,
                private activatedRoute: ActivatedRoute){

    }
    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        console.log(this.id);
      });
      this.spotify
          .getTrack(this.id)
          .subscribe((res: any) => this.renderTrack(res));
    }

    renderTrack(res: any){
      this.track = null;
      console.log(res);
      if(res){
        this.track = res;
        console.log("results",this.track);
      }
    }
}


@Component({
  template:`
    <div *ngIf="artist">
      <h1>{{ artist.name }}</h1>
      <p>
        <img src="{{ artist.images[1].url }}" style="width:50%;height:50%;">
      </p>
      <p>
        Followers: {{ artist.followers.total }}
      </p>
      <p><a href (click)="back()">Back</a></p>
    </div>
  `
})
export class ArtistComponent{
    artist: Object;
    id;
    constructor(private spotify: SpotifyService,
                private activatedRoute: ActivatedRoute){

    }
    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        console.log(this.id);
      });
      this.spotify
          .getArtist(this.id)
          .subscribe((res: any) => this.renderArtist(res));
    }

    renderArtist(res: any){
      this.artist = null;
      console.log(res);
      if(res){
        this.artist = res;
        console.log("results",this.artist);
      }
    }
}

import { Component, Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
@Injectable()
export class SpotifyService {
  static BASE_URL: string= 'https://api.spotify.com/v1';

  constructor( private http : Http){

  }

  query(URL: string, params?: Array<string>): Observable<any[]>{
      let queryURL: string = `${SpotifyService.BASE_URL}${URL}`;
      console.log(queryURL);
      if(params){
        queryURL = `${queryURL}?${params.join('&')}`;
      }
      console.log(queryURL);
      return this.http.request(queryURL).map((res:any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    console.log("search method called",);
    return this.query('/search', [
      `q=${query}`,
      `type=${type}`
    ]);
  }
  searchByTrack(query: string){
    return this.search(query, 'track');
  }
  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }
  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(@Inject(SpotifyService) private spotifyService) {

  }

}

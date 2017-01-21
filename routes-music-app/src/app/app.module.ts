import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent, SpotifyService } from './app.component';
import { SearchComponent, TrackComponent, ArtistComponent } from './search.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
    { path: 'artists/:id', component: ArtistComponent },
    { path: 'tracks/:id', component: TrackComponent },
  //{ path: 'albums/:id', component: AlbumComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

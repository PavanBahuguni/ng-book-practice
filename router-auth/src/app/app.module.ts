import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent, AUTH_PROVIDERS, HomeComponent, AboutUsComponent} from './app.component';
import { FlatComponent } from './flat/flat.component';
import { LoggedinGaurd } from './loggedin-gaurd.component';
import {   RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent },
  {path:'protected', component:FlatComponent, canActivate: [LoggedinGaurd]},
  {path:'about', component:AboutUsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FlatComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AUTH_PROVIDERS,LoggedinGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }

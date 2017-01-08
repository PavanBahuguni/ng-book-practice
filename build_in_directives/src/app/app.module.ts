import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent,NgSwitchDemo, NgStyleDemo, NgClassDemo, NgForDemo } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchDemo,
    NgStyleDemo,
    NgClassDemo,
    NgForDemo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

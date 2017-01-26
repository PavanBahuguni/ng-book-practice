import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, ParamService } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
       provide: ParamService,
       useFactory: (): ParamService => new ParamService('YOLO')
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

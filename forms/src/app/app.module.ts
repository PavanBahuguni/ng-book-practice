import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkuFormWithBuilderComponent } from './sku-form-with-builder.component';
import { FormWithValidationsExlicitComponent } from './form-with-validations-exlicit.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model.component';
@NgModule({
  declarations: [
    AppComponent,
    SkuFormWithBuilderComponent,
    FormWithValidationsExlicitComponent,
    DemoFormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, HomeComponent } from './app.component';
import { ProductComponent, ByIdComponent, InteresteComponent, SportifyComponent } from './product.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductComponent,
  children: [
     { path: '', redirectTo: 'main', pathMatch:'full' },
     { path: 'main', component: HomeComponent },
     { path: ':id', component: ByIdComponent },
     { path: 'interest', component: InteresteComponent },
     { path: 'sportify', component: SportifyComponent },
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ProductComponent,
    ByIdComponent,
    InteresteComponent,
    SportifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

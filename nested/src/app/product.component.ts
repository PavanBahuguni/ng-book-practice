import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './app.component';

@Component({
  selector: 'app-product',
  template: `
   <div class="navLinks">
     <a [routerLink]="['./main']">Main</a> |
     <a [routerLink]="['./interest']">Interest</a> |
     <a [routerLink]="['./sportify']">Sportify</a> |
     Enter Id: <input #id size="6">
     <button (click)="goToProduct(id.value)">Go</button>
   </div>
   <div class="products-area">
      <router-outlet></router-outlet>
   </div>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  goToProduct(id:string): void{
    this.router.navigate(['./', id], {relativeTo: this.route });
  }
}

@Component({
  selector:'by-id',
  template:  `
    <h1> This is by id componenet. {{prod_id}}</h1>
  `
})
export class ByIdComponent{
    prod_id="default";
    constructor(private route: ActivatedRoute){
      route.params.subscribe(params =>{
          this.prod_id = params['id'];
      });
    }
}


@Component({
  selector:'interest',
  template:  `
    <h1> This is Interest Component.  Sub route of Products</h1>
  `
})
export class InteresteComponent{

}


@Component({
  selector:'spotify',
  template:  `
    <h1> This is Spotify component.  Sub route of Products</h1>
  `
})
export class SportifyComponent{

}

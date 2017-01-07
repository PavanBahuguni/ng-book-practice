import { Component } from '@angular/core';
import { Product } from './app.component';

@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `
    <div class="product-department">
        <span *ngFor="let name of product.department; let i=index">
          <a href="#">{{name}}</a>
          <span>{{i < (product.length-1)?'>':''}}</span>
        </span>
    </div>
  `,
  styleUrls:['../resources/vendor/styles.css','../resources/vendor/semantic.min.css']
})
export class ProductDepartmenComponent{
  product : Product;
}

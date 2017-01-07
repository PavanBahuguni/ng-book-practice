import { Component } from '@angular/core';
import { Product } from './app.component';

@Component({
  selector: 'product-image',
  host:{class:'ui small image'},
  inputs:['product'],
  template: `
    <img class="product-image" [src]="product.imageUrl">
  `,
  styleUrls:['../resources/vendor/styles.css','../resources/vendor/semantic.min.css']
})
export class ProductImageComponent{
  product:Product;
}

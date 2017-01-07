import { Component, OnInit } from '@angular/core';
import { Product } from './app.component';

@Component({
  selector: 'product-row',
  inputs:['product'],
  host:{'class':'item'},
  template:`
      <product-image [product]="product"></product-image>
      <div class="content">
        <div class="header">{{product.name}}</div>
        <div class="meta">
          <div class="product-sku">SKU #{{product.sku}}</div>
        </div>
        <div class="description">
          <product-department [product]="product"></product-department>
        </div>
        <price-display [price]="product.price"></price-display>
      </div>
  `,
  styleUrls:['../resources/vendor/styles.css','../resources/vendor/semantic.min.css']
})
export class ProductRowComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}

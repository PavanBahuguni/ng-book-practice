import { Component, EventEmitter } from '@angular/core';
import { Product } from './app.component';

@Component({
  selector: 'products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
    <div class="ui items">
      <product-row *ngFor="let myProduct of productList"
        [product]="myProduct"
        (click)="clicked(myProduct)"
        [class.selected]="isSelected(myProduct)">
      </product-row>
    </div>
  `,
  styleUrls:['../resources/vendor/styles.css','../resources/vendor/semantic.min.css']
})
export class ProductsListComponent{
  // @input passed as an array of Product.
  //Provided by parent component InventoryApp
  productList: Product[];
  //@output- Outputs the current Product whenever a new Product is selected
  onProductSelected:EventEmitter<Product>;
  currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product:Product):void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  isSelected(product:Product):boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}

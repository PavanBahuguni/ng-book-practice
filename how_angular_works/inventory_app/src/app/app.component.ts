import { Component } from '@angular/core';

@Component({
  selector: 'inventory-app',
  template: `
    <div class="inventory-app">
       <products-list [productList]="products" (onProductSelected)="productWasSelected($event)">
       </products-list>
    </div>`,
  styleUrls:['../resources/vendor/semantic.min.css','../resources/vendor/styles.css']
})
export class AppComponent {
  products: Product[];
  constructor(){
    this.products= [


      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'resources/images/products/blue-jacket.jpg',
        ['Women', 'Appearal', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
  }
  productWasSelected(product: Product): void{
    console.log('Product clicked: ',product);
  }

}

export class Product{
   constructor(
     public sku: string,
     public name: string,
     public imageUrl: string,
     public departmen: string[],
     public price: number
   ){
   }
}

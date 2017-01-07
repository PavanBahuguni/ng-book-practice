import { Component } from '@angular/core';

@Component({
  selector: 'price-display',
  inputs:['price'],
  template: `
    <div class="price-display">\${{price}}</div>
  `,
  styleUrls:['../resources/vendor/styles.css','../resources/vendor/semantic.min.css']
})
export class ProductDisplayComponent{
price: number;

}

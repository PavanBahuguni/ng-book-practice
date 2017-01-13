import { Component } from '@angular/core';
import {FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-demo-form-ng-model',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header"> Demo Form: Sku</h2>
    <form [formGroup]='myForm' (ngSubmit)="onSubmit(myForm.value)" class="ui form">
      <div class="field">
        <label for="productNameInput">Product Name</label>
        <input type="text" id="productNameInput" placeholder="ProductName" name=sku [style.width.%]="50"
            [formControl]="myForm.get('productName')" [(ngModel)]="productName"    [formControl]="myForm.controls['sku']"><br><br>
        <button type="submit" class="ui button">Submit</button>
      </div>
    </form>
    <div class="ui info message">
      The product name is: {{productName}}
    </div>
  </div>

  `,
  styleUrls: ['./styles.css']
})
export class DemoFormNgModelComponent{
  myForm : FormGroup;
  productName : AbstractControl;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
       'productName': ['',Validators.required]

    });
  }
  onSubmit(value:string){
    console.log("You submitted value: ",value)
  }
}

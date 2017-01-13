import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-sku-form-with-builder',
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form: Sku</h2>
      <form [formGroup]='myForm' (ngSubmit)="onSubmit(myForm.value)" class="ui form">
        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" name=sku [style.width.%]="50" [formControl]="myForm.controls['sku']"><br><br>
          <button type="submit" class="ui button">Submit</button>
          </div>
      </form>
    </div>
    <hr>
    <hr>
  `,
    styleUrls: ['./styles.css']
})
export class SkuFormWithBuilderComponent{
  myForm: FormGroup;

  constructor(fb:FormBuilder){
    this.myForm = fb.group({
      'sku':['ABC123']
    });
  }

  onSubmit(value:string){
    console.log('you submitted value: ', value);
    this.myForm.reset();
  }

}

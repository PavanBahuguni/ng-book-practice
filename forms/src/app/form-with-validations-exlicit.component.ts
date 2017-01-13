import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-with-validations-exlicit',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header"> Demo Form: Sku</h2>
    <form [formGroup]='myForm' (ngSubmit)="onSubmit(myForm.value)" class="ui form">
      <div class="field" [class.error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input type="text" id="skuInput" placeholder="SKU" name=sku [style.width.%]="50" [formControl]="myForm.controls['sku']"><br><br>
        <p *ngIf="!sku.valid">SKU is invalid</p>
        <p *ngIf="sku.hasError('required')">SKU is required</p>
        <p *ngIf="!myForm.valid">Form is invalid</p>

        <button type="submit" class="ui button">Submit</button>
      </div>
    </form>
  </div>
  `,
  styleUrls: ['./styles.css']
})
export class FormWithValidationsExlicitComponent{
myForm: FormGroup;
sku : AbstractControl;

constructor(fb:FormBuilder){
  this.myForm = fb.group({
    'sku':['', Validators.required]
  });
  this.sku = this.myForm.controls['sku'];
  console.log(this.sku.valid);
}

onSubmit(value:string){
  console.log('you submitted value: ', value, this.sku.valid);
}
}

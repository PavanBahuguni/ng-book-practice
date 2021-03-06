import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-with-validations-exlicit',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header"> Demo Form: Sku</h2>
    <form [formGroup]='myForm' (ngSubmit)="onSubmit(myForm.value)" class="ui form">
      <div class="field" [class.error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input type="text" id="skuInput" placeholder="SKU" name="sku" [style.width.%]="50" [formControl]="myForm.controls['sku']"><br><br>
        <p *ngIf="!sku.valid">SKU is invalid</p>
        <p *ngIf="sku.hasError('required')">SKU is required</p>
        <p *ngIf="sku.hasError('invalidSku')">SKU is required to start with 123</p>
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
      'sku':['', Validators.compose([Validators.required, this.skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('Form changed to: ', value);
      }
    );
  }

  onSubmit(value:string){
    console.log('you submitted value: ', value, this.sku.valid);
  }

  skuValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.match(/^123/)){
      return {invalidSku:true};
    }
  }


}

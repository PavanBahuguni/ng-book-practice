import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css']
})
export class AppComponent {
  onSubmit(form:any):void{
  console.log('you submitted value: ', form)
  }
}

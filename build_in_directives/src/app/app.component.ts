import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h1>Angular2 NgIf demo</h1>
              <div>
                <h3 *ngIf="4>3"> This is visible because condition is true</h3>
                <h3 *ngIf="4<3"> This will not be visible condition is false</h3>
                <h3 *ngIf="getTrue()"> This will be as function returns false</h3>
              <div><hr>
              <NgSwitch-demo></NgSwitch-demo><hr>
              <NgStyle-demo></NgStyle-demo><hr>
              <NgClass-demo></NgClass-demo><hr>
              <NgFor-demo></NgFor-demo>
            `
})
export class AppComponent {
  getFalse():boolean{
      return false;
  }
  getTrue():boolean{
      return true;
  }
}

@Component({
  selector: 'NgSwitch-demo',
  template: `
              <h1>Angular2 NgSwitch demo</h1>
              <div [ngSwitch]="choice">
                <h4> Current choice is {{choice}}</h4>
                <span *ngSwitchCase="1">This is choice 1</span>
                <span *ngSwitchCase="2">This is choice 2</span>
                <span *ngSwitchDefault>This is last choice</span>
                <br><button (click)="nextChoice()">Next choice</button>
              <div>
            `
})
export class NgSwitchDemo {
  choice:number =1;

  nextChoice():void{
      if(this.choice>=3){
        this.choice = 1;
      } else{
        this.choice++;
      }
  }
}



@Component({
  selector: 'NgStyle-demo',
  template: `
              <h1>Angular2 NgStyle demo</h1>
              <h3 [style.background-color]="'yellow'">uses a fixed yellow background</h3>
              <h3 [ngStyle]="{color:'white','background-color':'blue'}">Uses a fixed blue background and white font</h3>
              <div>
                  <input type="text" name="color" value="{{color}}" #colorinput>
              </div>
              <div>
                  <input type="text" name="fontsize" value="{{fontSize}}" #fontinput>
              </div>
              <span [ngStyle]="{color:red}">
                Red Text
              <span>
              <div>
                <span [ngStyle]="{color:color}" [style.font-size.px]="fontSize">This is {{color}} colored text!! With font-size of {{fontSize}}px. </span>
              </div>
              <button (click)="apply(colorinput, fontinput)">Apply</button>
            `,
  styleUrls:["./styles.css"]
})
export class NgStyleDemo {
  color:string;
  fontSize:number;
  apply(color, fontSize){
    this.color = color.value;
    this.fontSize = fontSize.value;
    console.log(color.value, fontSize.value);
  }
}



@Component({
  selector: 'NgClass-demo',
  template: `
              <h1>Angular2 NgClass demo</h1>
              <h3 [ngClass]="{bordered:'true'}">bordered class is applied as the condition is true</h3>
              <h3 [ngClass]="{bordered: getFalse()}">bordered class is applied as the condition is true</h3>
              <h3 [ngClass]="['blue']">bordered class is applied as the condition is true</h3>
            `,
  styleUrls:["./styles.css"]
})
export class NgClassDemo {

    getFalse():boolean{
        return false;
    }
    getTrue():boolean{
        return true;
    }
}



@Component({
  selector: 'NgFor-demo',
  template: `
              <h1>Angular2 NgFor demo</h1>
              <h2> The house of Stark</h2>
              <ul>
                <li *ngFor="let stark of starks;let i=index">
                  <span [ngClass]="{blue:'false'}"> {{stark}} </span>
                </li>
              </ul>
            `,
  styleUrls:["./styles.css"]
})
export class NgForDemo {
  starks : string[];

  constructor(){
      this.starks = ['Eddard','Catelyn','Robb','Sansa','Arya', 'Brandon', 'Rickon'];
  }
}

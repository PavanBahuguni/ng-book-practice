import { Component, ReflectiveInjector } from '@angular/core';

class MyService {
    getValue(): string {
      return 'a value';
    }
}

export class ParamService {
  param: string;
  constructor(private phrase: string) {
    console.log('ParamService is being created with phrase', phrase);
    this.param = phrase;
  }
  getValue(): string{
    return this.param;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myService: MyService;
  paramServValue: string;
  constructor(private paramService: ParamService){
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);
    console.log('Same instance?', this.myService === injector.get(MyService));
    this.paramServValue = this.paramService.getValue();
  }
  invokeService(): void{
    console.log("My Service returned: ", this.myService.getValue());
  }
}

//import { Component } from '@angular/core';
//@Component({
//      selector: 'my-app',
//      template: '<h2>Hello Promiesss...!!!!</h2>'
//})
//export class AppComponent { }

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h2>Hello my name is {{name}}.</h2>'
})
export class MyComponent {
  
   
    name = 'Priyaa';
}
   



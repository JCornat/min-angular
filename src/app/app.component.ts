import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello';
  }
}

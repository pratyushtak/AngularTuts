import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input [value]='city' type="text">`,
  imports: [],
  styles: `
    :host{
      color:  #a144eb;;
  }`
})
export class App {
  protected readonly title = signal('t1');

  city = 'San Francisco';
}

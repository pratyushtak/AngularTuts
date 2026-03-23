import { Component } from '@angular/core';
import { Child } from "../child/child";
import { FormsModule } from '@angular/forms';
import { afterEveryRender } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [Child, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  ngAfterViewInit(){
    console.log("ngAfterViewInit worked in parent as HTML rendered!")
  }

  constructor() {
    afterEveryRender(() => {
      console.log("afterEveryRender worked!");
    });
  }
}

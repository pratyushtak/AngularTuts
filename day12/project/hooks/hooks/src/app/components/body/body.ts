import { Component, afterEveryRender} from '@angular/core';
import { BodyChild } from '../body-child/body-child';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [BodyChild, FormsModule, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

  bodyData: string = '';
  inputVal: string = '';
  show: boolean = true;


  ngOnInit(){
    console.log('ngOnInit Called.');
  }

  ngDoCheck(){
    console.log("ngDoCheck Worked!")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Worked!");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit Worked!");
  }

  constructor() {
    afterEveryRender(() => {
      console.log('ngAfterEveryRender Worked!');
    });
  }

  

  sendToChild(){
    this.bodyData = this.inputVal;
  }

  toggleShow(){
    this.show = !this.show;
  }
}

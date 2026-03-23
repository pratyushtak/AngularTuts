import { Component } from '@angular/core';
import { Child2 } from '../child2/child2';


@Component({
  selector: 'app-parent2',
  imports: [Child2],
  templateUrl: './parent2.html',
  styleUrl: './parent2.css',
})
export class Parent2 {
  messageDataFromChild : string = '';
  dataRecieved(data: string){
    this.messageDataFromChild = data;
  }
}

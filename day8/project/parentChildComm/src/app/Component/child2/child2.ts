import { Component, Output, EventEmitter } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-child2',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {
  @Output() mEvent = new EventEmitter<string>();
  childInput:string = '';

  sendDataToParent(data: string){
    this.mEvent.emit(data)
  }

  resetfun(){
    this.childInput = '';
    this.mEvent.emit(this.childInput);
  }

  submitfun(){

  }
}

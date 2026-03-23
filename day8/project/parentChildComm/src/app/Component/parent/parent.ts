import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Child } from '../child/child';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-parent',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, Child, MatButtonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentValue: string = '';
  parentVal: string = '';

  resetfun(){
    this.parentValue='';
    this.parentVal = '';
  }

  submitfun(){
    this.parentVal = this.parentValue
  }
}

import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentValue: string = '';
}

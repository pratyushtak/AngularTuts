import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, 
    MatRadioModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {}

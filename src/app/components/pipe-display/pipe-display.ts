import { CurrencyPipe, DatePipe, JsonPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pipe-display',
  imports: [TitleCasePipe, DatePipe, JsonPipe, KeyValuePipe,
            LowerCasePipe, SlicePipe, UpperCasePipe, PercentPipe, 
            CurrencyPipe],
  templateUrl: './pipe-display.html',
  styleUrl: './pipe-display.css',
})
export class PipeDisplay {

  @Input() txtToPipe: string = '';
  @Input() numToPipe!: number;
  @Input() pipeStyle: string = '';

  // hard coded for object, currency, date, percent pipe.
  myObj = {
            name: 'Pratyush',
            age: 20
          }
  currency : number = 943;
  myDate = new Date();
  percent : number = .78;

}

// TO DO:-
// Currency and num seperate input
// JSON and object render
// custom pipe.

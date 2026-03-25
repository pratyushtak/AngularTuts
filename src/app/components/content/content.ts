import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipeDisplay } from '../pipe-display/pipe-display';
import { StarPipe } from '../../pipe-service';

@Component({
  selector: 'app-content',
  imports: [PipeDisplay, FormsModule, StarPipe],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

  userInputVal: string = ""; //will keep track of input value from user.
  userInputNumVal!: number; //will keep track of number input value from user.
  toPipe: string = ""; //will give the value to components to render & transform.
  toPipeNum!: number;
  myDate = '2026-03-25'; // hard coding date to display with pipe.
  submitStat : boolean = false;
  



  // Finalises the variable to be 
  // transformed via pipe.
  onSubmit(){
    this.toPipe = this.userInputVal; //user Input gets to component.
    this.submitStat = true;
  }

  onSubmitNum(){
    this.toPipeNum = this.userInputNumVal
  }
}

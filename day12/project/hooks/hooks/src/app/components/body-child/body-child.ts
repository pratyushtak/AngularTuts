import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-body-child',
  imports: [],
  templateUrl: './body-child.html',
  styleUrl: './body-child.css',
})
export class BodyChild {
  @Input() name = ''; 

  ngOnChanges(changes: SimpleChanges){
    console.log(`ngOnChanges worked as Input became " ${this.name} ". `)
  }
  ngOnDestroy(){
    console.log("ngOnDestroy Worked!!")
  }
}

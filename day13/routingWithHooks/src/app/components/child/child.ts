import { Component} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  
  ngAfterContentInit(){
    console.log("ngAfterContentInit Worked in child as ng-content loaded!!")
  }
  AfterEveryRender(){
    console.log("ngAfterEveryRender worked in child.")
  }
}

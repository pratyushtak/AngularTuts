import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-state-comp',
  imports: [],
  templateUrl: './state-comp.html',
  styleUrl: './state-comp.css',
})
export class StateComp {
  constructor(public route: ActivatedRoute){};
  stateName: string | null = '';

  ngOnInit(){
    this.stateName = this.route.snapshot.queryParamMap.get('name');
  }

  @HostListener('window:popstate', ['$event'])
    onPopState(event: any){
      history.go(-3);
  }
}

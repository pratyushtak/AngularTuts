import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-query-comp',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './query-comp.html',
  styleUrl: './query-comp.css',
})
export class QueryComp {}

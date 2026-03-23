import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./components/child/child";
import { Parent } from "./components/parent/parent";

@Component({
  selector: 'app-root',
  imports: [Parent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routingWithHooks');
}

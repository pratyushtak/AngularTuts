import { Component, signal } from '@angular/core';
import { Parent } from './Component/parent/parent';
import { Parent2 } from './Component/parent2/parent2';

@Component({
  selector: 'app-root',
  imports: [Parent, Parent2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parentChildComm');
}

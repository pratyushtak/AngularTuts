import { Component, signal } from '@angular/core';
import { Child } from './Component/child/child';
import { Parent } from './Component/parent/parent';

@Component({
  selector: 'app-root',
  imports: [Child, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parentChildComm');
}

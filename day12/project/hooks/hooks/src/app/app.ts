import { Component, signal } from '@angular/core';
import { Body } from './components/body/body';

@Component({
  selector: 'app-root',
  imports: [Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hooks');
}

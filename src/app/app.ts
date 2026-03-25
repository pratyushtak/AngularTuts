import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from './components/content/content';

@Component({
  selector: 'app-root',
imports: [Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipesProject');
}

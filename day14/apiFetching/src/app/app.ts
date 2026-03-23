import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Content } from './components/content/content';

@Component({
  selector: 'app-root',
  imports: [Navbar, Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('apiFetching');
}

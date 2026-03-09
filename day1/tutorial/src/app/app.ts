import { Component, signal } from '@angular/core';
import {Todos} from './MyComp/todos/todos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Todos, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tutorial');
}

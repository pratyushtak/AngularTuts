import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todo';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo!: Todo;
  @Output() deleteTodoEvent : EventEmitter<Todo> = new EventEmitter();

  deleteTodo(todo: Todo) {
    this.deleteTodoEvent.emit(todo);
    console.log("Event triggered");
  }
}

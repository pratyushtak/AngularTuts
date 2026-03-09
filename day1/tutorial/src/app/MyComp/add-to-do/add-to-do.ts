import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-to-do',
  imports: [FormsModule],
  templateUrl: './add-to-do.html',
  styleUrl: './add-to-do.css',
})
export class AddToDo {
  title: string = '';
  desc: string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
  }
}

import { Component } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../todo-item/todo-item';
import { AddToDo } from '../add-to-do/add-to-do';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItem, AddToDo],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todos : Todo[]=[];
  constructor() { 
    this.todos = [
      {
        sno: 1,
        title: 'Go to the market1',
        desc: 'You need to go to the market to buy stuff',
        active: true
      },
      {
        sno: 2,
        title: 'Go to the market2',
        desc: 'You need to go to the market to buy stuff',
        active: true
      },
      {
        sno: 3,
        title: 'Go to the market3',
        desc: 'You need to go to the market to buy stuff',
        active: true
      }
    ]
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }
}

import { Component } from '@angular/core';
import { TodoModel } from '../../../shared/models/todo.model';
import { mockTodoList } from '../../constants/todo.constant';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTodoItem = '';
  todoItems: TodoModel[] = mockTodoList;

  // TODO: move to a service as well
  submitTodo() {
    this.todoItems = [...this.todoItems, {
      id: this.todoItems.length,
      title: this.newTodoItem,
      status: 'todo',
      completed: false,
    }];
    this.newTodoItem = '';
  }
}

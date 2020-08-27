import {Component, OnInit} from '@angular/core';
import {Todo} from './models/todo';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  todoList: Todo[];
  todoTitle: string;
  todoBody: string;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTasks().subscribe(todos => this.todoList = todos);
  }

  addNew(): void {
    // this.todoService.addNewTask(new Todo(this.todoTitle, this.todoBody));
    console.log(this.todoTitle);
  }
}

import { Injectable } from '@angular/core';
import {Todo} from '../models/todo';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Array<Todo> = new Array<Todo>();
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addNewTask(todo: Todo): void {
    this.todoList.push(todo);
  }

  removeTask(todo: Todo): void {

  }
}

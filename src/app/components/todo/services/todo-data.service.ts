import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodoItem } from '../reducers/todos';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoData {
  constructor(private http: HttpClient) {}

  addTodo(description: string ): Observable<TodoItem> {
    return this.http.post<TodoItem>('http://localhost:3000/todos', {description});
  }
}

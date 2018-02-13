import { Actions, Effect } from '@ngrx/effects';

import { TodoData } from '../services/todo-data.service';

import * as actions from '../actions/todo.actions';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class TodoEffects {

  @Effect() addItem$ = this.actions$
    .ofType(actions.ADD_TODO)
    .map((a: any): string => a.description)
    .switchMap(a => this.service.addTodo(a)
      .map(r => new actions.AddTodoSucceeded(r))
      .catch(r => Observable.of(new actions.AddTodoFailed(`Cannot add ${a}`)))
  );

  constructor(private actions$: Actions, private service: TodoData) {}
}

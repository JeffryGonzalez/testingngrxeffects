import { Action } from '@ngrx/store';
import { TodoItem } from '../reducers/todos';


export const ADD_TODO = '[Todos] Add Todo';
export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public description:string) {}
}

export const ADD_TODO_SUCCEEDED = '[Todos] Add Todo Succceded';
export class AddTodoSucceeded implements Action {
  readonly type = ADD_TODO_SUCCEEDED;
  constructor(public todo:TodoItem) {}
}

export const ADD_TODO_FAILED = '[Todos] Add Todo Failed';
export class AddTodoFailed implements Action {
  readonly type = ADD_TODO_FAILED;
  constructor(public message:String ) {}
}

export type All =
  AddTodo
  | AddTodoSucceeded
  | AddTodoFailed;


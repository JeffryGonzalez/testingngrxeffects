import * as fromTodo from './todos';


export interface State {
  todos: fromTodo.State;
}

export const reducers = {
  todos: fromTodo.reducer
};

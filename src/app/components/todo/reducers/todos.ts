import { Action } from '@ngrx/store';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
export interface TodoItem {
  id: string;
  description: string;
}
export interface State extends EntityState<TodoItem> {}

export const initialState: State = {
  ids: ['1', '2'],
  entities: {
    '1': { id: '1', description: 'Tacos'},
    '2': { id: '2', description: 'Shells'}
  }
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

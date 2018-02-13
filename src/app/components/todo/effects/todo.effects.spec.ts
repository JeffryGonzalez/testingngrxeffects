import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { TodoEffects } from './todo.effects';
import * as fromActions from '../actions/todo.actions';
import { TodoData} from '../services/todo-data.service';
describe('Todo Effects', () => {
  let effects: TodoEffects;
  let actions: ReplaySubject<any>;
  let service: TodoData;

  beforeEach(() => {

    TestBed.configureTestingModule({

      providers: [
        TodoEffects,
        provideMockActions(() => actions),
        { provide: TodoData, useClass: FakeTodoData }
      ]
    });

    effects = TestBed.get(TodoEffects);
    service = TestBed.get(TodoData);
  });

  it('should return a new todo item', () => {
    const initiator = new fromActions.AddTodo('Clean Garage');
    const completion = new fromActions.AddTodoSucceeded({id: '1', description: 'Clean Garage'});
    spyOn(service, 'addTodo').and.returnValue(Observable.of({id: '1', description: 'Clean Garage'}));

    actions = new ReplaySubject(1);
    actions.next(initiator);
    effects.addItem$.subscribe((r: any) => {
      expect(r.type).toEqual(completion.type);
      expect(r.todo.description).toEqual(completion.todo.description);
      expect(r.todo.id).toEqual(completion.todo.id);
    });
  });

  it('should fail right', () => {
    const initiator = new fromActions.AddTodo('Clean office');
    const completion = new fromActions.AddTodoFailed('Cannot add Clean office');
    spyOn(service, 'addTodo').and.callFake(a => Observable.throw(new fromActions.AddTodoFailed('Cannot add Clean office')));

    actions = new ReplaySubject(1);
    actions.next(initiator);
    effects.addItem$.subscribe(r => {
      expect(r['message']).toEqual(completion.message);
     });
  });
});


class FakeTodoData extends TodoData {
  constructor() {
    super(null);
  }
  addTodo(description: string) {
    return null;
  }
}

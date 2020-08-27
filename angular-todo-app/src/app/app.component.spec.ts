import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {TodoComponent} from './components/todo/todo.component';
import {TodoService} from './services/todo.service';
import {Todo} from './models/todo';
import {of} from 'rxjs';

describe('TodoList in AppComponent', () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let todoService: any;

  // dummy todoList items
  const todoData: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent, TodoComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            // pass dummy data to TodoService getTasks method
            getTasks: () => of(todoData )
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
  });

  it('should have todo item from service in component', () => {
    fixture.detectChanges();
    expect(appComponent.todoList).toEqual(todoData);
  });
});

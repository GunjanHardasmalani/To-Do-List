import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './../models/Todo';

const httpOptions = {
  headers: new HttpHeaders(
    'Content-Type: application/json'

  )
};

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todoUrl= 'http://localhost:3000/lists';
 //todoUrl='https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  getTodo(): Observable<Todo []> {
    return this.http.get<Todo[]>( `${this.todoUrl} ` );

  }

  deleteTodo(todo: Todo): Observable<Todo>{
    console.log(todo.id);
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);

  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions);
  }

    toggleCompleted(todo: Todo): Observable<any>{
      const url = `${this.todoUrl}/${todo.id}`;
      return this.http.put(url, todo, httpOptions);
    }
}

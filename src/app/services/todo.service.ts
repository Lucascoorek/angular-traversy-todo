import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  urlLimit: string = "?_limit=5";
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + this.urlLimit);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
  toggleCompleted(todo: Todo) {
    const url: string = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  deleteTodo(todo: Todo) {
    const url: string = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }
}

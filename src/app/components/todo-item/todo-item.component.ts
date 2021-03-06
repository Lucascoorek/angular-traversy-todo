import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>();
  constructor(private todoService: TodoService) {}

  ngOnInit() {}
  setClasses(): {} {
    let classes = {
      todo: true,
      "is-completed": this.todo.completed
    };
    return classes;
  }
  onToggle(todo: any) {
    // Toggle on Ui
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}

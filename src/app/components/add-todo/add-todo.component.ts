import { Todo } from './../../models/todo';
import { TodoServiceService } from './../../services/todo-service.service';
import { Time } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodoEmit: EventEmitter<any> = new EventEmitter();
  title: string;
  description: string;
  dueDate: Date;
  time: Time;
  todos: Todo[];
  constructor(private todoService: TodoServiceService) { }
  ngOnInit() {
  }


  onSubmit(){
    const todo = {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      time: this.time,
      completed: false
    };
    console.log("on submit" +todo.title);
    this.addTodoEmit.emit(todo);
  }

  addTodoItems(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
}
}

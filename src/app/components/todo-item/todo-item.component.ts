import { TodoServiceService } from './../../services/todo-service.service';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from './../../models/todo';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
constructor(private todoService: TodoServiceService) { }

ngOnInit() {
}

// set dynamic classes

setClasses(){
  const classes = {
    todo: true,
    'is-complete': this.todo.completed
  }
  return classes;
}

onToggle(todo){
  console.log(todo);
  todo.completed = !todo.completed;

  // toggle on server
  this.todoService.toggleCompleted(todo).subscribe( todo =>{

  });
}

onDelete(todo){
  console.log("Delete");
  this.deleteTodo.emit(todo);
}
}

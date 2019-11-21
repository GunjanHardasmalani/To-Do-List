import { TodoServiceService } from './../../services/todo-service.service';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from './../../models/todo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
constructor(private todoService: TodoServiceService, private router: Router) { }

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

  todo.completed = !todo.completed;
  // toggle on server
  this.todoService.toggleCompleted(todo).subscribe( todo =>{

  });
}

onDelete(todo){
  this.deleteTodo.emit(todo);
}

getListById(todo){
this.router.navigate(['/view', todo.id]);

}
}

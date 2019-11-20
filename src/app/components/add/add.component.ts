import { Todo } from './../../models/todo';
import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './../../services/todo-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  constructor(private todoService: TodoServiceService) { }
  todos: Todo[];
  ngOnInit() {
    this.todoService.getTodo().subscribe(todos =>{
      this.todos = todos;

    });
  }

 addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
}
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoServiceService } from './../../services/todo-service.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoServiceService) { }


  ngOnInit() {
    this.todoService.getTodo().subscribe(todos =>{
      this.todos = todos;

  });
  }
  deleteTodo(todo: Todo){

    this.todos = this.todos.filter( t => t.id! !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });


  }

}


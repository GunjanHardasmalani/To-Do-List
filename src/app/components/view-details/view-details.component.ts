import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './../../models/todo';
import { TodoServiceService } from './../../services/todo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  @Input() id: string;
  todos: Todo[];
  constructor(private todoService: TodoServiceService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe( paramMap =>
     this.id = paramMap.get('id')
      );

    this.getListById(this.id);
    }

    getListById(id: string) {
      this.todoService.getListById(id).subscribe(todos => {
        this.todos = todos;
      });
    }
}

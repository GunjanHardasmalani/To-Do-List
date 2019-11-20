import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './../../models/todo';
import { TodoServiceService } from './../../services/todo-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoServiceService) { }


  ngOnInit() {
    console.log("On Init View");
    };

}

import { Todo } from './../../models/todo';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
@Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

}

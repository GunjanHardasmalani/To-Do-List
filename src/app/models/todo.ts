import { Time } from '@angular/common';

export class Todo {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  time: Time;
 completed: boolean;
}

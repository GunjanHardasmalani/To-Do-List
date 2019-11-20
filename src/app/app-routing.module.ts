import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';


const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

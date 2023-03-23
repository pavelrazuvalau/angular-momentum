import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingRoutingModule } from './greeting-routing.module';
import { GreetingPageComponent } from './pages/greeting/greeting-page.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GreetingPageComponent,
    GreetingComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GreetingRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
  ]
})
export class GreetingModule { }

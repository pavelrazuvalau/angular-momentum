import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCompletedDirective } from './directives/task-completed.directive';
import { TimeGreetingPipe } from './pipes/time-greeting.pipe';

@NgModule({
  declarations: [
    TaskCompletedDirective,
    TimeGreetingPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskCompletedDirective,
    TimeGreetingPipe,
  ]
})
export class SharedModule { }

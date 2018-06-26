import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from '../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent  {

  @Input() task: TaskModel; // To receive data from component
  @Output() selectTask = new EventEmitter<TaskModel>(); // To send data from component
  @Output() performTask = new EventEmitter<TaskModel>(); // To send data from component

  executeAction(action: string): void {
    this[action].emit(this.task);
  }

}

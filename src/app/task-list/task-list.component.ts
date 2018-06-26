import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../models/task.model';
import {TaskService} from '../task.service';
import {Observable} from 'rxjs/Observable';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TaskDialogComponent} from '../task-dialog/task-dialog.component';
import {take} from 'rxjs/operators/take';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<TaskModel[]>;
  selectedTask: TaskModel
  loading = true;

  constructor(
    private dialog: MatDialog,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks.valueChanges();
    this.tasks$
      .pipe(take(1))
      .subscribe(() => this.loading = false);
  }

  onPerformTask(task: TaskModel): void {
    task.done = !task.done;
    this.taskService.update(task);
  }

  showDialog(task?: TaskModel): void {
    const config: MatDialogConfig<any> = (task) ? {data: {task}} : null;
    this.dialog.open(TaskDialogComponent, config);
  }

  onDelete(task: TaskModel) {
this.taskService.delete(task);
  }

}

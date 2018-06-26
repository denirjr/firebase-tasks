import {Component, Inject, OnInit} from '@angular/core';
import {TaskModel} from '../models/task.model';
import {TaskService} from '../task.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  dialogTitle = 'New Task'
  task: TaskModel = {title: ''};

  constructor(
    @Inject(MAT_DIALOG_DATA ) private data: any,
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.dialogTitle = 'update task';
      this.task = this.data.task;
    }
  }


  onSave(): void {
    const operation: Promise<void> =
      (!this.data)
        ? this.taskService.create(this.task)
        : this.taskService.update(this.task);
    operation
      .then(() => {
        this.dialogRef.close();
      });

  }

}

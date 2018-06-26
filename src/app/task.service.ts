import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {TaskModel} from './models/task.model';
import {Observable} from 'rxjs/Observable';
import {CollectionReference} from '@firebase/firestore-types';

@Injectable()
export class TaskService {

  tasks: AngularFirestoreCollection<TaskModel>;

  constructor(
    private  db: AngularFirestore
  ) {
    this.setTasks();
  }

  private setTasks(): void {
    this.tasks = this.db.collection<TaskModel>('/tasks',
      (ref: CollectionReference) => ref.orderBy('done', 'asc').orderBy('title', 'asc'));
  }

  create(task: TaskModel): Promise<void> {
    const uid = this.db.createId();
    return this.tasks.doc<TaskModel>(uid)
      .set({
        uid,
        title: task.title,
        done: false
      });
  }

  update(task: TaskModel): Promise<void> {
    return this.tasks.doc<TaskModel>(task.uid)
      .update(task);

  }

  delete(task: TaskModel): Promise<void> {
    return this.tasks.doc<TaskModel>(task.uid)
      .delete();
  }

  getAll(uid: string): Observable<TaskModel> {
    return this.tasks.doc<TaskModel>(uid).valueChanges();
  }

}

import { NgModule } from '@angular/core';

import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';

import { AppComponent } from './app.component';

import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatLineModule,
  MatListModule, MatMenuModule, MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import {TaskService} from './task.service';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskDialogComponent
  ],
  entryComponents: [
    TaskDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFirestoreModule.enablePersistence(),
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

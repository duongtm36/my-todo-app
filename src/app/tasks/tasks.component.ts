import { Component, ElementRef, OnInit, viewChild } from '@angular/core';

import { TasksListComponent } from './tasks-list/tasks-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TasksListComponent,
    NewTaskComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private tasksService: TasksService) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.subscribe((value: string) => {
      this.tasksService.searchTasks(value);
    });
  }
}

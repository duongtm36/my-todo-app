import { Component, computed, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');

  constructor(private tasksService: TasksService) {}

  tasks = computed(() => {
    return this.tasksService.getAllTasks();
  });
}

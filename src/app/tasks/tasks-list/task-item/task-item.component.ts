import { Component, input } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Task } from '../../task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  faTrash = faTrash;
  faEdit = faEdit;
  task = input.required<Task>();

  constructor(private tasksService: TasksService) {}

  handleDeleteTask(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }
}

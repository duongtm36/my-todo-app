import { Component, input } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TasksService } from '../../tasks.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  faTrash = faTrash;
  task = input.required<Task>();

  constructor(private tasksService: TasksService) {}
}

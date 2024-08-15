import { FormsModule } from '@angular/forms';
import { Component, ElementRef, viewChild } from '@angular/core';

import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // Tạo biến tham chiếu đến phần tử formAddNewTask trong html
  private formElement =
    viewChild<ElementRef<HTMLFormElement>>('formAddNewTask');

  constructor(private tasksService: TasksService) {}

  handleAddNewTask(taskName: string) {
    // gọi hàm addNewTask
    this.tasksService.addNewTask(taskName);
    // reset form sau khi thêm task mới
    this.formElement()?.nativeElement.reset();
  }
}

import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  // tạo biến getAllTask, chỉ đọc danh sách tasks
  getAllTasks = this.tasks.asReadonly();

  // hàm tạo task mới
  addNewTask(taskName: string) {
    // tạo một task mới với id ngẫu nhiên, taskName nhận từ form
    const newTask: Task = {
      id: Math.random().toString(),
      taskName: taskName,
    };

    // cập nhật danh sách tasks bằng cách thêm task mới vào mảng hiện tại
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
}

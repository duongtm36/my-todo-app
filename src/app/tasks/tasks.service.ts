import { Injectable, signal } from '@angular/core';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private originalTasks = signal<Task[]>([]);
  private tasks = signal<Task[]>([]);

  constructor() {
    const initialTasks = [
      { id: '1', taskName: 'Task 1' },
      { id: '2', taskName: 'Task 2' },
      { id: '3', taskName: 'Task 3' },
    ];

    this.originalTasks.set(initialTasks);
    this.tasks.set(initialTasks);
  }

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
    console.log('task list: ', this.getAllTasks());
  }

  deleteTask(taskId: string) {
    // Cập nhật danh sách tasks bằng cách loại bỏ task có id tương ứng
    this.tasks.update((oldTasks) =>
      oldTasks.filter((task) => task.id !== taskId)
    );
  }

  searchTasks(searchTerm: string) {
    const filteredTasks = this.originalTasks(); // Lấy mảng gốc từ Signal

    if (searchTerm.trim()) {
      const newFilteredTasks = filteredTasks.filter((task) =>
        task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.tasks.set(newFilteredTasks); // Cập nhật mảng tasks theo kết quả tìm kiếm
    } else {
      this.tasks.set(filteredTasks); // Trả về toàn bộ dữ liệu gốc nếu không có từ khóa tìm kiếm
    }
  }
}

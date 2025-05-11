import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.entity";
import { v4 } from "uuid";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "Description for Task 1",
      status: TaskStatus.PENDING,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description for Task 2",
      status: TaskStatus.IN_PROGRESS,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, descriotion: string) {
    const task: Task = {
      id: v4(),
      title,
      description: descriotion,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask() {}
  deleteTask() {}
}

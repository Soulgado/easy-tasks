import { v4 as uuidv4 } from 'uuid';
import type { IBoard, ITask } from "../../types";

export class Board implements IBoard {
    id: string;
    title: string;
    tasks: ITask[];

    constructor(title: string) {
        this.id = uuidv4();
        this.title = title;
        this.tasks = [];
    }

    addTask(task: ITask): ITask[] {
        this.tasks.push(task);
        return this.tasks;
    }

    removeTask(id: string): ITask {
        const removedTask = this.tasks.find(task => task.id === id);
        if (!removedTask) {
            throw new Error("No such task exists");
        } 
        this.tasks = this.tasks.filter(task => task.id !== id);
        return removedTask;
    }

    editTask(taskData: ITask): ITask {
        const currentTask = this.tasks.find(task => taskData.id === task.id);
        if (!currentTask) {
            throw new Error("No such task exists");
        }
        this.tasks[this.tasks.indexOf(currentTask)] = taskData;
        return taskData;
    }
}
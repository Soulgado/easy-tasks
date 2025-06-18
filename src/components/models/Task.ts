import { v4 as uuidv4 } from 'uuid';
import { type ITask, type ISubTask, type TaskStatus } from "../../types";

export class Task implements ITask {
    id: string;
    title: string;
    description: string;
    subtasks: ISubTask[];
    status: TaskStatus;

    constructor(title: string, description: string, status: TaskStatus) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.status = status;
        this.subtasks = [];
    }
    
    addSubtask(subtask: ISubTask): ISubTask[] {
        this.subtasks.push(subtask);
        return this.subtasks;
    }

    removeSubTask(id: string): ISubTask {
        const deletedSubTask = this.subtasks.find(subtask => subtask.id === id);
        if (!deletedSubTask) {
            throw new Error("No such subtask exists");
        }
        this.subtasks = this.subtasks.filter(subtask => subtask.id !== id);
        return deletedSubTask;
    }

    editSubTask(subTaskData: ISubTask): ISubTask {
        const currentSubtask = this.subtasks.find(subtask => subtask.id === subTaskData.id);
        if (!currentSubtask) {
            throw new Error("No such subtask exists");
        }
        this.subtasks[this.subtasks.indexOf(currentSubtask)] = subTaskData;
        return subTaskData;
    }
    
}


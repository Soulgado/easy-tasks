export type TaskStatus = "TODO" | "INPROGRESS" | "DONE";

export interface ISubTask {
    id: string;
    description: string;
    status: TaskStatus;
}

export interface ITask {
    id: string;
    title: string;
    description: string;
    subtasks: ISubTask[];
    status: TaskStatus;
    addSubtask(subtask: ISubTask): ISubTask[];
    removeSubTask(id: string): ISubTask;
    editSubTask(subTaskData: ISubTask): ISubTask;
};

export interface IBoard {
    id: string;
    tasks: ITask[];
    addTask(task: ITask): ITask[];
    removeTask(id: string): ITask;
    editTask(taskData: ITask): ITask;
}

export interface IStorageAPI {
    addBoard(board: IBoard): IBoard[];
    deleteBoard(id: string): IBoard;
    editBoard(boardData: IBoard): IBoard; 
}
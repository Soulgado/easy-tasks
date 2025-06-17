type TaskStatus = "TODO" | "INPROGRESS" | "DONE";

type SubTask = {
    id: string;
    description: string;
    status: TaskStatus;
}

export type Task = {
    id: string;
    title: string;
    description: string;
    subtasks: SubTask[];
    status: TaskStatus;
    addSubtask(subtask: SubTask): SubTask[];
    removeSubTask(id: string): SubTask;
    editSubTask(SubTaskData: SubTask): SubTask;
};

export type Board = {
    id: string;
    tasks: Task[];
    addTask(task: Task): Task[];
    removeTask(id: string): Task;
    editTask(taskData: Task): Task;
}

export type StorageAPI = {
    addBoard(board: Board): Board[];
    deleteBoard(id: string): Board;
    editBoard(boardData: Board): Board; 
}
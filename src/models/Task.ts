
type TaskStatus = "TODO" | "INPROGRESS" | "DONE";

type SubTask = {
    description: string;
    status: TaskStatus;
}

export type Task = {
    title: string;
    description: string;
    subtasks: SubTask[];
    status: TaskStatus;
};

export type Board = {
    tasks: Task[];
}
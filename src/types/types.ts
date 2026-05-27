type SubTask = {
	name: string;
	progress: number;
};

type Task = {
	name: string;
	subTasks: SubTask[];
};

export type { SubTask, Task };

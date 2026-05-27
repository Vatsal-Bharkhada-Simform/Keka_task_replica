import type { Task } from "../types/types";

export const tasks: Task[] = [
	{
		name: "Task-1",
		subTasks: [
			{
				name: "Sub task 1",
				progress: 20,
			},
			{
				name: "Sub task 2",
				progress: 30,
			},
			{
				name: "Sub task 3",
				progress: 10,
			},
			{
				name: "Sub task 4",
				progress: 45,
			},
		],
	},
	{
		name: "Task-2",
		subTasks: [
			{
				name: "Sub task 1",
				progress: 80,
			},
			{
				name: "Sub task 2",
				progress: 50,
			},
			{
				name: "Sub task 3",
				progress: 20,
			},
			{
				name: "Sub task 4",
				progress: 45,
			},
		],
	},
];

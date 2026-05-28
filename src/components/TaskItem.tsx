import { useState } from "react";
import type { Task } from "../types/types";
import SubTask from "./SubTask";

export default function TaskItem({ task }: { task: Task }) {
	const [taskState, setTaskState] = useState<Task>(task);

	const progress =
		taskState.subTasks.reduce((acc, subTask) => {
			acc += subTask.progress;
			return acc;
		}, 0) / taskState.subTasks.length;

	function handleProgressChange(
		index: number,
		e: React.ChangeEvent<HTMLInputElement>
	) {
		setTaskState((prevState) => {
			const newObj = structuredClone(prevState);
			newObj.subTasks[index].progress = +e.target.value;

			return newObj;
		});
	}

	return (
		<div className="task">
			<div className="task__head">
				<h1>{taskState.name}</h1>
				<div className="progress_cont">
					<div>{progress.toFixed(2)}%</div>
					<progress value={progress} max={100}></progress>
				</div>
			</div>
			<div className="task__subtasks">
				{taskState.subTasks.map((item, index) => {
					return (
						<SubTask
							task={item}
							key={item.name + index}
							onChange={handleProgressChange.bind(null, index)}
						/>
					);
				})}
			</div>
		</div>
	);
}

import { useId } from "react";
import type { SubTask } from "../types/types";

export default function SubTask({
	task,
	onChange,
}: {
	task: SubTask;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	const id = useId();

	return (
		<>
			<div className="subtask">
				<h2>{task.name}</h2>
				<div className="progress_cont">
                    <label htmlFor={id}>{task.progress.toFixed(2)}%</label>
					<input
						className="progress"
						type="range"
						min="0"
						max="100"
						value={task.progress}
						onChange={onChange}
						id={id}
					/>
				</div>
			</div>
		</>
	);
}

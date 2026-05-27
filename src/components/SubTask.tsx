import type { SubTask } from "../types/types";

export default function SubTask({
	task,
	onChange,
}: {
	task: SubTask;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<>
			<div className="subtask">
				<h3>{task.name}</h3>
				<div className="progress_cont">
                    <div>{task.progress.toFixed(2)}%</div>
					<input
						className="progress"
						type="range"
						min="0"
						max="100"
						value={task.progress}
						onChange={onChange}
						id="myRange"
					/>
				</div>
			</div>
		</>
	);
}

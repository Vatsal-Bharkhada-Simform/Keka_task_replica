import TaskItem from "./components/TaskItem";
import { tasks } from "./utils/data";

function App() {
	return (
		<>
			{tasks.map((task, index) => {
				return <TaskItem task={task} key={task.name + index} />;
			})}
		</>
	);
}

export default App;

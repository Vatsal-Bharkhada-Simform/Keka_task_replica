import { useState } from "react";
import type { Task } from "../types/types";
import SubTask from "./SubTask";

export default function TaskItem({task} : {task: Task}){
    const [taskState, setTaskState] = useState<Task>(task);
    
    let progress = taskState.subTasks.reduce((acc, subTask) => {
        acc += subTask.progress
        return acc;
    }, 0);

    progress /= taskState.subTasks.length;

    function handleProgressChange(index: number, e: React.ChangeEvent<HTMLInputElement>){
        setTaskState(prevState => {
            return {
                ...prevState,
                subTasks: prevState.subTasks.map((subtask, i) => {
                    if(i === index){
                        return {
                            ...subtask,
                            progress: Number(e.target.value)
                        }
                    }

                    return {
                        ...subtask
                    }
                })
            }
        })
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
                {
                    taskState.subTasks.map((item, index) => {
                        return (
                            <SubTask task={item} key={item.name+index} onChange={handleProgressChange.bind(null, index)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

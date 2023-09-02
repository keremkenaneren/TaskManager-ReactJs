import TaskUI from "./TaskUI.jsx";
import {useContext} from "react";
import TasksContext from "../context/Task.jsx";

function TaskList() {

    const {tasks} = useContext(TasksContext)
    
    return (
        <div className="flex flex-wrap" >
            {
                tasks.map((task, index) => {
                    return <TaskUI key={index} task={task} />
                })
            }
        </div>
    );
}

export default TaskList;
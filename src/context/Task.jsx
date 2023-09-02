import {createContext, useState} from "react";
import axios from "axios";

const TasksContext = createContext()

function Provider({children}){

    const [tasks, setTasks] = useState([]);

    // Create
    const createTask = async (title, desc) => {

        const response = await axios.post("http://localhost:3000/tasks", {
            title,
            desc,
        })

        console.log(response)

        const createdTask = [...tasks, response.data];
        setTasks(createdTask);
    }

    // Get
    const  fetchTasks = async () => {
        const response = await axios.get("http://localhost:3000/tasks");
        setTasks(response.data)
    }

    // Delete
    const deleteTask = async (id) => {
        const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
        const afterDeletingTask = tasks.filter((task) => {
            return task.id !== id;
        })
        setTasks(afterDeletingTask)
    }

    // Values Object :
    const sharedValuesAndMethods = {
        tasks,
        createTask,
        fetchTasks,
        deleteTask,
    }


    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>{children}</TasksContext.Provider>
    )

}

export {Provider}
export default TasksContext;